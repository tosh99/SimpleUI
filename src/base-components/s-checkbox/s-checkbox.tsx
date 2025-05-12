import React, { CSSProperties, ReactNode } from 'react';
import { SFlex } from '../s-flex/s-flex';
import { TbCheckbox, TbSquare } from 'react-icons/tb';

export function SCheckbox(props: SCheckboxProps) {
    const handleClick = () => {
        if (props.disabled) return;
        if (props.onChange) {
            props.onChange(!props.checked);
        }
    };
    
    return (
        <SFlex
            gap={8}
            align={'center'}
            style={{
                width: props.width || 'max-content',
                cursor: props.disabled ? 'not-allowed' : 'pointer',
                opacity: props.disabled ? 0.6 : 1,
                ...props.style,
            }}
            onClick={handleClick}>
            <SFlex
                direction={'column'}
                justify={'center'}
                align={'center'}>
                {props.checked ? (
                    <TbCheckbox style={{ color: props.disabled ? 'var(--DisabledFontColor)' : 'var(--CheckboxCheckedColor)' }} size={18} />
                ) : (
                    <TbSquare style={{ color: props.disabled ? 'var(--DisabledFontColor)' : 'var(--CheckboxUncheckedColor)' }} size={18} />
                )}
            </SFlex>
            <p
                style={{
                    color: props.disabled ? 'var(--DisabledFontColor)' : '',
                    margin: 0,
                }}>
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
    onChange?: (checked: boolean) => void;
    style?: CSSProperties;
}