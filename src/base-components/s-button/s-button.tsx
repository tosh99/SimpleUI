import {CSSProperties, ReactNode} from "react";
import styles from "./s-button.module.scss";
import React from "react";
import {SFlex} from "../s-flex/s-flex";

export function SButton(props: SButtonProps) {
    return (
        <SFlex align={"center"} justify={"center"} style={{...props.style, width: props.is_full_width ? "100%" : "max-content"}}
               className={`${styles.button} ${props.outline ? styles.outlineButton : ""} ${props.simple ? styles.simpleButton : ""} ${props.disabled ? styles.disabledButton : ""}`} onClick={() => {
            if (props.onClick) {
                props.onClick()
            }
        }}>
            {props.icon_left ? <div className={styles.iconLeft}>{props.icon_left}</div> : null}
            <p className={styles.buttonText}>{props.children}</p>
            {props.icon_right ? <div className={styles.iconRight}>{props.icon_right}</div> : null}
        </SFlex>
    );
}

export interface SButtonProps {
    children: ReactNode;
    onClick?: () => void;
    style?: CSSProperties;
    is_full_width?: boolean;
    icon_left?: ReactNode;
    icon_right?: ReactNode;
    simple?: boolean;
    outline?: boolean;
    disabled?: boolean;
}
