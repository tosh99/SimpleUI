import {CSSProperties} from "react";
import styles from "./s-textarea.module.scss";
import React from "react";

export function STextarea(props: STextareaProps) {
    return (
        <div className={styles.textarea} style={props.style}>
            <p>{props.label}</p>
            <textarea
                disabled={props.disabled}
                value={props.value}
                onChange={(ev) => {
                    if (props.onChange) {
                        props.onChange(ev);
                    }
                }}
                placeholder={props.placeholder || 'Placeholder'}
            />
        </div>
    );
}

export interface STextareaProps {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    style?: CSSProperties;
    value?: string | number;
    onChange?: (ev: any) => void
}
