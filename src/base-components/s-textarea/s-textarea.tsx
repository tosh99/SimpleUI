import React, { CSSProperties } from 'react';
import styles from './s-textarea.module.scss';

export function STextarea(props: STextareaProps) {
    return (
        <div className={styles.textArea} style={{ ...props.style, width: props.width }}>
            <p className={styles.textAreaLabel} style={{ ...props.label_style }}>
                {props.label}
            </p>
            <textarea
                style={{ minHeight: props.min_height }}
                disabled={props.disabled}
                value={props.value}
                onChange={(ev) => {
                    if (props.onChange) {
                        props.onChange(ev.target.value);
                    }
                }}
                placeholder={props.placeholder || 'Placeholder'}
            />
        </div>
    );
}

export interface STextareaProps {
    id?: string;
    width?: number | string;
    min_height?: number | string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    style?: CSSProperties;
    label_style?: CSSProperties;
    value?: string | number;
    onChange?: (ev: any) => void;
}
