import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import styles from './s-select.module.scss';
import { useClickAway, useDebounce, useKeyPress } from 'ahooks';
import { TbSelector } from 'react-icons/tb';
import ClipLoader from "react-spinners/ClipLoader";
import { nanoid } from 'nanoid';

// Global tracking for open select dropdown
let OPEN_DROPDOWN_ID: string | null = null;

export function SSelect(props: SSelectProps) {
    const select_id = useRef<string>(nanoid());
    const [is_open, set_is_open] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    // Listen for global dropdown open/close events
    useEffect(() => {
        const handleSelectOpen = (event: CustomEvent) => {
            if (event.detail !== select_id.current && is_open) {
                set_is_open(false);
                set_highlight_index(0);
            }
        };
        
        window.addEventListener('select-dropdown-opened' as any, handleSelectOpen);
        
        return () => {
            window.removeEventListener('select-dropdown-opened' as any, handleSelectOpen);
        };
    }, [is_open]);
    
    // Notify other dropdowns when this one opens
    useEffect(() => {
        if (is_open) {
            OPEN_DROPDOWN_ID = select_id.current;
            window.dispatchEvent(new CustomEvent('select-dropdown-opened', { detail: select_id.current }));
        } else if (OPEN_DROPDOWN_ID === select_id.current) {
            OPEN_DROPDOWN_ID = null;
        }
    }, [is_open]);

    useClickAway(() => {
        set_is_open(false);
        set_highlight_index(0);
        return false;
    }, ref);

    const [search_text, set_search_text] = useState('');
    const [options, set_options] = useState(props.options);
    const [highlight_index, set_highlight_index] = useState(0);
    const debounced_search_text = useDebounce(search_text, { wait: 500 });
    const optionsRef = useRef<HTMLDivElement>(null);

    const label_key = useMemo(() => {
        return props.label_key || 'label';
    }, [props.label_key]);

    const value_key = useMemo(() => {
        return props.value_key || 'value';
    }, [props.value_key]);

    useEffect(() => {
        set_options([...props.options]);
    }, [props.options]);

    useEffect(() => {
        if (props.filter) {
            set_options(props.filter(search_text));
        }
    }, [search_text, props.filter]);

    useEffect(() => {
        if (props.onSearch) {
            props.onSearch(debounced_search_text);
        }
    }, [debounced_search_text]);

    useKeyPress(['downarrow'], () => {
        if (is_open) {
            set_highlight_index((prev) => {
                const newIndex = prev + 1 === options.length ? options.length - 1 : prev + 1;
                scrollToHighlight(newIndex);
                return newIndex;
            });
        }
    });

    useKeyPress(['uparrow'], () => {
        if (is_open) {
            set_highlight_index((prev) => {
                const newIndex = prev - 1 < 0 ? 0 : prev - 1;
                scrollToHighlight(newIndex);
                return newIndex;
            });
        }
    });

    useKeyPress(['esc'], () => {
        set_is_open(false);
    });

    useKeyPress(['enter'], () => {
        if (options[highlight_index] && is_open) {
            if (props.onChange) {
                props.onChange(options[highlight_index], highlight_index);
            }
            set_is_open(false);
            set_search_text('');
        }
    });

    const scrollToHighlight = (index: number) => {
        if (optionsRef.current) {
            const optionElement = optionsRef.current.children[index] as HTMLElement;
            if (optionElement) {
                optionElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    };

    return (
        <div className={`${styles.select} ${props.disabled ? styles.selectDisabled : ''}`} ref={ref} style={{ minWidth: props.width, width: props.width }}>
            {/*Label*/}
            {props.label ? (
                <p className={styles.selectLabel} style={props.label_style}>
                    {props.label} {props.required ? <small style={{ color: 'red' }}>*</small> : ''}
                </p>
            ) : null}

            {/*Input Search / Selected Value*/}
            <div
                className={styles.selectValue}
                onClick={(ev) => {
                    ev.stopPropagation();
                    if (props.disabled) return;

                    if (props.searchable) {
                        set_is_open(true);
                    } else {
                        set_is_open(!is_open);
                    }
                }}>
                {props.searchable ? (
                    <div className={styles.selectOptionSearch}>
                        <input
                            id={props.id}
                            autoComplete={'off'}
                            disabled={props.disabled}
                            placeholder={props.placeholder || 'Search...'}
                            value={is_open ? search_text : search_text || (props.value && props.value[label_key])}
                            onChange={(ev) => {
                                set_search_text(ev.target.value);
                            }}
                            title={props.value && props.value[label_key] ? props.value[label_key] : undefined}
                            style={{ width: '100%' }}
                            onFocus={(ev) => {
                                ev.stopPropagation();
                                set_is_open(true);
                            }}
                        />
                        <div className={styles.selectIconSection}>{props.loading ? <ClipLoader color="gray" size={16} /> : <TbSelector />}</div>
                    </div>
                ) : (
                    <div className={`${styles.selectSelectedValue} ${props.value && props.value[label_key] ? '' : styles.selectPlaceHolder}`}>
                        <p title={props.value && props.value[label_key] ? props.value[label_key] : undefined}>
                            {(props.value && props.value[label_key]) || props.placeholder || 'Select'}
                        </p>
                        <div className={styles.selectIconSection}>{props.loading ? <ClipLoader color="gray" size={16} /> : <TbSelector />}</div>
                    </div>
                )}

                {is_open ? (
                    <div className={styles.selectOptions} ref={optionsRef}>
                        {options.slice(0, 20).map((option, option_idx) => {
                            return (
                                <div
                                    key={'Option' + option_idx}
                                    className={`${styles.selectOption} ${highlight_index === option_idx ? styles.selectOptionHover : ''} ${props.value && props.value[value_key] == option[value_key] ? styles.selectOptionSelected : ''}`}
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        if (props.onChange) props.onChange(option, option_idx);
                                        set_is_open(false);
                                        set_search_text('');
                                    }}>
                                    <p>{option.render ? option.render(option) : option[label_key]}</p>
                                </div>
                            );
                        })}
                        {search_text && !options.length ? <p>Not Found</p> : null}
                        {!search_text && !options.length ? <p>No Items</p> : null}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

interface SSelectProps {
    width?: string | number;
    id?: string;
    required?: boolean;
    options: any[];
    value?: any;
    label?: string;
    label_style?: CSSProperties;
    label_key?: string;
    value_key?: string;
    placeholder?: string;
    loading?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    filter?: (search_text: string) => any[];
    onChange?: (item: any, item_index: number) => void;
    onSearch?: (item: string) => void;
}
