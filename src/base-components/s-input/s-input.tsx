import React, { CSSProperties } from 'react';
import styles from './s-input.module.scss';

export function SInput(props: SInputProps) {
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
                value={props.value}
                onChange={(ev) => {
                    if (props.onChange) {
                        props.onChange(ev.target.value);
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
    value?: string | number;
    is_full_width?: boolean;
    onChange?: (value: string) => void;
}
