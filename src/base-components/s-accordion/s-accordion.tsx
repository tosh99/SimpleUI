import React, { ReactNode } from 'react';
import styles from './s-accordion.module.scss';
import { SFlex } from '../s-flex/s-flex';
import { motion } from 'framer-motion';

export function SAccordion(props: SFlexProps) {
    return (
        <SFlex direction={'column'} className={`${styles.accordion} ${props.accordionClassName}`}>
            <div
                className={`${styles.accordionBase} ${props.accordionBaseClassName}`}
                onClick={() => {
                    if (props.onToggleExpand) props.onToggleExpand();
                }}>
                {props.accordionBase}
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: props.is_expanded ? 'auto' : 0, opacity: props.is_expanded ? 1 : 0 }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
                className={`${styles.accordionContent} ${props.accordionContentClassName}`}>
                {props.accordionContent}
            </motion.div>
        </SFlex>
    );
}

export interface SFlexProps {
    accordionBase?: ReactNode;
    accordionContent?: ReactNode;
    accordionClassName?: string;
    accordionBaseClassName?: string;
    accordionContentClassName?: string;
    is_expanded?: boolean;
    onToggleExpand?: () => void;
}
