import React, { useMemo } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export function SLoader(props: SLoaderProps) {
    const sz = useMemo(() => {
        return props.size || 20;
    }, [props.size]);

    return <ClipLoader color="gray" size={sz} />;
}

export interface SLoaderProps {
    size?: number;
}
