import React, { ReactElement, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { SFlex } from '../s-flex/s-flex';

export const SSwiper = (props: SSwiperProps) => {
    const modules = useMemo(() => {
        const mod = [Navigation, Pagination, Scrollbar];
        if (props.autoPlay) mod.push(Autoplay);

        return mod;
    }, [props.autoPlay, props.scrollBar]);

    return (
        <Swiper
            modules={modules}
            slidesPerView={props.slidesPerView || 4}
            spaceBetween={props.spaceBetween || 30}
            navigation={true}
            autoplay={{
                delay: props.duration || 2500,
            }}
            pagination={{
                clickable: true,
            }}
            scrollbar={{
                draggable: true,
            }}
            style={{
                minHeight: 220,
                height: props.height || 'auto',
            }}>
            {props.items.map((item, idx) => (
                <SwiperSlide key={'Swipe' + idx}>
                    <SFlex height={'100%'} width={'100%'} style={{ minHeight: 200 }} align={'center'} justify={'center'}>
                        {props.renderItem(item, idx)}
                    </SFlex>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SSwiper;

export interface SSwiperProps {
    items: any[];
    renderItem: (item: any, idx: number) => ReactElement;
    height?: string | number;
    autoPlay?: boolean;
    scrollBar?: boolean;
    duration?: number;
    slidesPerView?: number;
    spaceBetween?: number;
}
