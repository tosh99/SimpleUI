import React, { CSSProperties, ReactNode } from 'react';
import styles from './s-tabs.module.scss';

export const STabs = (props: STabsProps) => {
    return (
        // Tabs
        <div className={styles.tabs} style={props.tab_style}>
            {props.tabs.map((item, idx) => {
                return (
                    <div
                        key={'Tab' + idx}
                        className={`${styles.tab} ${props.tab_key == idx ? styles.tabSelected : ''}`}
                        style={props.tab_item_style}
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

export interface STabsProps {
    tabs: STab[];
    onTabClick: (item: number) => void;
    tab_key?: number | string;
    tab_style?: CSSProperties;
    tab_item_style?: CSSProperties;
}

export interface STab {
    label: ReactNode;
    children?: ReactNode;
}
