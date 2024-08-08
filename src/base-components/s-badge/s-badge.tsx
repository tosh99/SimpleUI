import React, {CSSProperties, ReactNode} from "react";
import styles from "./s-badge.module.scss";
import {SFlex} from "../s-flex/s-flex";

export function SBadge(props: SBadgeProps) {
    return (
        <SFlex
            align={'center'}
            style={{
                border: props.border,
                background: props.background || 'white',
                color: props.gradient_value_percentage ? "white" : props.color ? props.color : "black",
                boxShadow: props.highlighted ? "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" : "none",
            }}
            className={styles.appBadge}
        >
            <p>{props.children}</p>
        </SFlex>
    );
}

export interface SBadgeProps {
    children: ReactNode;
    background?: string;
    color?: string;
    border?: string;
    highlighted?: boolean;
    gradient_value_percentage?: number
}