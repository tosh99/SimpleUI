import React, { CSSProperties, ReactNode } from 'react';
import styles from './s-flex.module.scss';

export function SFlex(props: SFlexProps) {
    return (
        <div
            className={`${styles.flex} ${props.className || ''}`}
            style={{
                flexDirection: props.direction,
                alignItems: props.align,
                justifyContent: props.justify,
                flexWrap: props.wrap ? 'wrap' : 'nowrap',
                gap: props.gap,
                width: props.width,
                height: props.height,
                margin: props.margin,
                marginTop: props.marginTop,
                marginBottom: props.marginBottom,
                padding: props.padding,
                paddingTop: props.paddingTop,
                paddingBottom: props.paddingBottom,
                ...props.style,
            }}
            onClick={() => {
                if (props.onClick) {
                    props.onClick();
                }
            }}>
            {props.children}
        </div>
    );
}

export interface SFlexProps {
    children?: ReactNode;
    className?: string;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justify?: 'start' | 'end' | 'center' | 'space-between';
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    style?: CSSProperties;
    wrap?: boolean;
    gap?: number;
    width?: number | string;
    height?: number | string;
    margin?: number | string;
    marginTop?: string | number;
    marginBottom?: string | number;
    padding?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    onClick?: () => void;
}
