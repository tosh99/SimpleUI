import React, { CSSProperties, useEffect, useState } from 'react';
import { useDebounce } from 'ahooks';
import styles from './s-input.module.scss';

export function SInput(props: SInputProps) {
    const [input_value, set_input_value] = useState(props.value || '');
    const debounced_search_text = useDebounce(input_value, { wait: props.debounce_ms || 500 });
    
    useEffect(() => {
        set_input_value(props.value || '');
    }, [props.value]);
    
    useEffect(() => {
        if (props.onSearch) {
            props.onSearch(debounced_search_text as string);
        }
    }, [debounced_search_text]);

    return (
        <div className={styles.input} style={{ ...props.style, width: props.width }}>
            {props.label ? (
                <p className={styles.inputLabel} style={props.label_style}>
                    {props.label} {props.required ? <small style={{ color: 'red' }}>*</small> : ''}
                </p>
            ) : null}
            <input
                id={props.id}
                autoComplete={'off'}
                type="text"
                disabled={props.disabled}
                placeholder={props.placeholder || 'Placeholder'}
                value={input_value}
                style={props.input_style}
                onChange={(ev) => {
                    const new_value = ev.target.value;
                    set_input_value(new_value);
                    if (props.onChange) {
                        props.onChange(new_value);
                    }
                }}
            />
        </div>
    );
}

interface SInputProps {
    id?: string;
    label?: string;
    label_style?: CSSProperties;
    width?: number | string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    style?: CSSProperties;
    input_style?: CSSProperties;
    value?: string | number;
    is_full_width?: boolean;
    debounce_ms?: number; // Debounce time in milliseconds
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void; // Callback for debounced value changes
}
