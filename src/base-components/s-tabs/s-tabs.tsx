import { ReactNode } from 'react';
import styles from './s-tabs.module.scss';
import React from 'react';

export const STabs = (props: { tabs: STab[]; onTabClick: (item: number) => void; tab_key?: number | string }) => {
    return (
        // Tabs
        <div className={styles.tabs}>
            {props.tabs.map((item, idx) => {
                return (
                    <div
                        key={'Tab' + idx}
                        className={`${styles.tab} ${props.tab_key == idx ? styles.tabSelected : ''}`}
                        onClick={() => {
                            props.onTabClick(idx);
                        }}>
                        {item.label}
                    </div>
                );
            })}
        </div>
    );
};

export interface STab {
    label: ReactNode;
    children?: ReactNode;
}
