import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './s-skeleton-loader.module.scss';

export function SSkeletonLoader(props: SSkeletonLoaderProps) {
    return <Skeleton containerClassName={styles.containerClassName} count={props.count} />;
}

export interface SSkeletonLoaderProps {
    count?: number;
}
