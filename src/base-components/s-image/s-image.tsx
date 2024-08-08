import React, { CSSProperties, ReactNode } from 'react';

export function SImage(props: SImageProps) {
    if (!props.src) return null;

    return (
        <div
            className={props.className}
            style={{
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                backgroundImage: `url(${props.src})`,
                backgroundPosition: props.backgroundPosition || 'center',
                backgroundSize: props.backgroundSize || 'cover',
                backgroundRepeat: props.backgroundRepeat || 'no-repeat',
                border: props.border,
                boxShadow: props.boxShadow,
                ...props.style,
            }}>
            {props.children}
        </div>
    );
}

export interface SImageProps {
    src: string;
    style?: CSSProperties;
    children?: ReactNode;
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
    boxShadow?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    background?: string;
    backgroundSize?: 'contain' | 'initial' | 'cover';
    backgroundPosition?: 'center' | 'initial';
    backgroundRepeat?: string;
    borderRadius?: string | number;
}
