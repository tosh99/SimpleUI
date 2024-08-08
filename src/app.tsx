import React from 'react';
import { SPageSection } from './base-components/s-page-section/s-page-section';
import { SImage } from './base-components/s-image/s-image';
import { SFlex } from './base-components/s-flex/s-flex';
import SSwiper from './base-components/s-swiper/s-swiper';
import { SMarquee } from './base-components/s-marquee/s-marquee';

export function App() {
    return (
        <>
            <SPageSection>
                <h1>H1</h1>
                <SSwiper
                    autoPlay={true}
                    items={[1, 2, 3, 1, 2, 3, 1, 2, 3]}
                    renderItem={(item) => (
                        <SFlex align={'center'} justify={'center'} height={300} width={'100%'} style={{ border: '1px solid red' }}>
                            {item}
                            <br />
                        </SFlex>
                    )}
                />
            </SPageSection>

            <SPageSection>
                <h1>H2</h1>
                <SFlex wrap>
                    <SImage src={'https://placehold.co/512'} width={256} height={256} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'initial'} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'contain'} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'contain'} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'contain'} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'contain'} />
                </SFlex>
            </SPageSection>

            <SPageSection background={'green'}>
                <h1>H3</h1>
                <SMarquee>
                    <SImage src={'https://placehold.co/512'} width={256} height={256} style={{ margin: '0 20px' }} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'initial'} style={{ margin: '0 20px' }} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'contain'} style={{ margin: '0 20px' }} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'contain'} style={{ margin: '0 20px' }} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'contain'} style={{ margin: '0 20px' }} />
                    <SImage src={'https://placehold.co/512'} width={256} height={256} backgroundSize={'contain'} style={{ margin: '0 20px' }} />
                </SMarquee>
            </SPageSection>
        </>
    );
}
