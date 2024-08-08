import React, { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';

export function SMarquee(props: SMarqueeProps) {
    return <Marquee>{props.children}</Marquee>;
}

export interface SMarqueeProps {
    children: ReactNode;
}
