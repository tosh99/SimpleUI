import React, {CSSProperties, ReactNode} from "react";
import {SFlex} from "../s-flex/s-flex";

export function SCheckbox(props: SCheckboxProps) {
    return (
        <SFlex gap={3}
               align={'center'}
               style={{
                   width: props.width || "max-content",
                   ...props.style,
               }}
               onClick={props.onClick}
        >
            <input disabled={props.disabled} type={"checkbox"} checked={props.checked}/>
            <p
                style={{
                    color: props.disabled ? "gray" : "inherit",
                }}
            >
                {props.children}
            </p>
        </SFlex>
    );
}

export interface SCheckboxProps {
    children: ReactNode;
    width?: number | string;
    disabled?: boolean;
    checked?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
}