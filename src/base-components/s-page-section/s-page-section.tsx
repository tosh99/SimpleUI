import React, { CSSProperties, ReactNode, useMemo } from 'react';
import styles from './s-page-section.module.scss';
import { motion } from 'framer-motion';

export const SPageSection = (props: SPageSectionProps) => {
    const parent_style = useMemo(() => {
        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            height: props.height || '100vh',
            padding: props.padding,
            paddingTop: props.paddingTop,
            paddingBottom: props.paddingBottom,
            margin: props.margin,
            marginTop: props.marginTop,
            marginBottom: props.margin,
            backgroundColor: props.backgroundColor || 'white',
            background: props.background,
            backgroundImage: props.backgroundUrl ? `url(${props.backgroundUrl})` : undefined,
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.backgroundSize || 'cover',
            backgroundRepeat: 'no-repeat',
            border: props.border,
            borderTop: props.borderTop,
            borderBottom: props.borderBottom,
        };
    }, [props]);

    return (
        <>
            {props.disableAnimation ? (
                <div id={props.id ? props.id : undefined} className={`${styles.sectionPage} ${props.className}`} style={parent_style}>
                    <div className={`${styles.sectionPageInner}`}>{props.children}</div>
                </div>
            ) : (
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: props.animateOnce, amount: props.viewPerTrigger || 0.2 }}
                    transition={{ delay: props.delay || 0.25, duration: props.duration || 1.5 }}
                    id={props.id ? props.id : undefined}
                    className={`${styles.sectionPage} ${props.className}`}
                    style={parent_style}>
                    <div className={`${styles.sectionPageInner}`}>{props.children}</div>
                </motion.section>
            )}
        </>
    );
};

interface SPageSectionProps {
    children: ReactNode;
    style?: CSSProperties;
    delay?: number;
    duration?: number;
    animateOnce?: boolean;
    viewPerTrigger?: number;
    disableAnimation?: boolean;
    height?: string | number;
    margin?: string | number;
    marginTop?: string | number;
    marginBottom?: string | number;
    padding?: string | number;
    paddingTop?: string | number;
    paddingBottom?: string | number;
    border?: string;
    borderBottom?: number;
    borderTop?: number;
    id?: string;
    className?: any;
    background?: string;
    backgroundColor?: string;
    backgroundUrl?: string;
    backgroundSize?: 'contain' | 'initial' | 'cover';
    backgroundPosition?: 'center' | 'initial';
}
