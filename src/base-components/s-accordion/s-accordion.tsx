import React, { ReactNode, useState } from 'react';
import styles from './s-accordion.module.scss';
import { SFlex } from '../s-flex/s-flex';
import { motion } from 'framer-motion';

export function SAccordion(props: SFlexProps) {
    const [is_expanded, set_is_expanded] = useState(false);

    return (
        <SFlex direction={'column'} className={`${styles.accordion} ${props.accordionClassName}`}>
            <div
                className={`${styles.accordionBase} ${props.accordionBaseClassName}`}
                onClick={() => {
                    set_is_expanded((prev) => !prev);
                }}>
                {props.accordionBase}
            </div>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: is_expanded ? 'auto' : 0, opacity: is_expanded ? 1 : 0 }}
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
    onClick?: () => void;
}
