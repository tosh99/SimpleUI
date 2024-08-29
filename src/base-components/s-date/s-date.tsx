import React, { CSSProperties, useMemo, useState } from 'react';
import styles from './s-date.module.scss';
import { DateTime } from 'luxon';

export function SDate(props: SDateProps) {
    const is_valid_date = useMemo(() => {
        if (props.value) {
            return DateTime.fromFormat(props.value.toString(), 'dd/MM/yyyy').isValid;
        }

        if (!props.value) {
            return null;
        }

        return false;
    }, [props.value]);

    const [is_delete_mode, set_is_delete_mode] = useState<boolean>(false);

    return (
        <div className={styles.input} style={{ ...props.style, width: props.width || '100%' }}>
            {props.label ? (
                <p className={styles.inputLabel}>
                    {props.label} {props.required ? <small style={{ color: 'red' }}>*</small> : ''}
                </p>
            ) : null}
            <input
                id={props.id}
                autoComplete={'off'}
                type="text"
                disabled={props.disabled}
                placeholder={'DD/MM/YYYY'}
                value={props.value}
                onKeyDown={(ev) => {
                    if (ev.key === 'Backspace') {
                        set_is_delete_mode(true);
                    }
                }}
                style={{
                    borderColor: is_valid_date ? 'green' : is_valid_date === null ? 'lightgray' : 'red',
                }}
                onChange={(ev) => {
                    if (props.onChange) {
                        let val = ev.target.value;
                        if (val.length > (props.value?.toString() || '').length) {
                            if (val.length === 2 || val.length === 5) {
                                val += '/';
                            }
                        }

                        props.onChange(val);
                    }
                }}
            />
        </div>
    );
}

interface SDateProps {
    id?: string;
    label?: string;
    width?: number | string;
    disabled?: boolean;
    required?: boolean;
    style?: CSSProperties;
    value?: string | number;
    is_full_width?: boolean;
    onChange?: (value: string) => void;
}
