import React, { CSSProperties, ReactNode, useMemo, useState } from 'react';
import styles from './s-table.module.scss';
import { FaSort } from 'react-icons/fa';
import { SFlex } from '../s-flex/s-flex';

export const STable = (props: STableProps) => {
    const [sort_by, set_sort_by] = useState<string>('');
    const [sort_order, set_sort_order] = useState(1);

    const sorted_data = useMemo(() => {
        let dt = [...props.data];

        if (sort_by) {
            dt = dt.sort((a: any, b: any) => {
                return a[sort_by] > b[sort_by] ? sort_order : -1 * sort_order;
            });
        }

        return dt;
    }, [sort_by, props.data, sort_order]);

    return (
        <div className={styles.table} style={{ ...props.table_style, height: props.height, maxHeight: props.max_height, width: props.width || 'auto' }}>
            {/*Header*/}
            <div className={styles.tableHeader}>
                <div className={`${styles.tableRow} ${styles.tableHeaderRow}`}>
                    {props.columns.map((col, col_ix) => {
                        return (
                            <div key={'Col' + col_ix} className={styles.tableCell} style={{ minWidth: col.min_width, maxWidth: col.max_width }}>
                                <SFlex
                                    onClick={() => {
                                        if (col.sortable) {
                                            set_sort_by(col.data_key);
                                            set_sort_order((prev) => (prev === 1 ? -1 : 1));
                                        }
                                    }}>
                                    {col.title}
                                    {col.sortable ? <FaSort color={sort_by === col.data_key ? (sort_order === 1 ? 'green' : 'red') : 'gray'} /> : null}
                                </SFlex>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/*Data*/}
            <div className={styles.tableData}>
                {props.loading ? (
                    <div className={styles.tableLoading}>Loading</div>
                ) : (
                    <>
                        {sorted_data.map((item, item_ix) => {
                            return (
                                <div key={'D' + item_ix} className={styles.tableRow}>
                                    {props.columns.map((col, col_ix) => {
                                        return (
                                            <div
                                                key={'ColD' + col_ix}
                                                className={styles.tableCell}
                                                style={{ minWidth: col.min_width, maxWidth: col.max_width }}>
                                                {col.render ? col.render(item) : <p>{item[col.data_key]}</p>}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export interface STableColumn {
    title: string | ReactNode;
    render?: (item: any) => ReactNode;
    data_key: string;
    min_width?: number;
    max_width?: number;
    sortable?: boolean;
}

export interface STableProps {
    table_style?: CSSProperties;
    columns: STableColumn[];
    data: any[];
    width?: number | string;
    height?: number | string;
    max_height?: number | string;
    loading?: boolean;
}
