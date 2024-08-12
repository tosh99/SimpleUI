import React from 'react';
import { motion } from 'framer-motion';
import styles from './s-toggle.module.scss';
import { SFlex } from '../s-flex/s-flex';

export function SToggle(props: SToggleProps) {
    return (
        <SFlex align={'center'}>
            <p>{props.off_text}</p>
            <SFlex
                className={`${styles.switch} ${props.is_on ? styles.switchOn : ''}`}
                align={'center'}
                onClick={() => {
                    if (props.onToggle) props.onToggle();
                }}>
                <motion.div className={styles.handle} layout transition={spring} />
            </SFlex>
            <p>{props.on_text}</p>
        </SFlex>
    );
}

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 20,
};

export interface SToggleProps {
    on_text?: string;
    off_text?: string;
    is_on?: boolean;
    onToggle?: () => void;
}
