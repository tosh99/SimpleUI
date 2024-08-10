import React, { useState } from 'react';
import { SPageSection } from './base-components/s-page-section/s-page-section';
import { SImage } from './base-components/s-image/s-image';
import { SFlex } from './base-components/s-flex/s-flex';
import SSwiper from './base-components/s-swiper/s-swiper';
import { SMarquee } from './base-components/s-marquee/s-marquee';
import { SInput } from './base-components/s-input/s-input';
import { SSelect } from './base-components/s-select/s-select';
import { STextarea } from './base-components/s-textarea/s-textarea';
import { SButton } from './base-components/s-button/s-button';
import { SBadge } from './base-components/s-badge/s-badge';
import { SAccordion } from './base-components/s-accordion/s-accordion';
import { FaPlus, FaUser } from 'react-icons/fa6';
import { SToggle } from './base-components/s-toggle/s-toggle';

const options = [
    { label: 'Opt 1', value: 1 },
    { label: 'Opt 2', value: 2 },
];

export function App() {
    const [opt, set_opt] = useState(options[0]);
    const [is_on, set_is_on] = useState(true);

    return (
        <>
            <SPageSection disableAnimation height={'auto'}>
                <SFlex direction={'column'}>
                    <header>Headings</header>
                    <h1>H1</h1>
                    <h2>H2</h2>
                    <h3>H3</h3>
                    <h4>H4</h4>
                    <h5>H5</h5>
                    <h6>H6</h6>
                    <p>Paragraph</p>
                    <a>Hyperlink</a>
                    <br />
                    <header>Buttons</header>
                    <SFlex>
                        <SButton>Button Normal</SButton>
                        <SButton simple>Button Simple</SButton>
                        <SButton outline>Button Outline</SButton>
                        <SButton disabled>Button Disabled</SButton>
                    </SFlex>
                    <br />
                    <header>Badges</header>
                    <SFlex>
                        <SBadge>App Design</SBadge>
                        <SBadge>Marketing</SBadge>
                        <SBadge>B3</SBadge>
                        <SBadge>B4</SBadge>
                    </SFlex>
                    <br />
                    <header>Inputs</header>
                    <SFlex align={'end'}>
                        <SInput label={'Normal'} required />
                        <SInput label={'Disabled'} disabled value={'Disabled'} />
                        <SInput label={'With Input'} value={is_on.toString()} />
                        <SToggle
                            is_on={is_on}
                            onToggle={() => {
                                set_is_on((prev) => !prev);
                            }}
                        />
                    </SFlex>
                    <br />
                    <header>Select</header>
                    <SFlex width={'100%'} wrap>
                        <SSelect label={'Normal'} options={options} />
                        <SSelect label={'Searchable'} options={options} searchable />
                        <SSelect label={'Searchable, Loading & Selected'} options={options} searchable value={opt} loading={true} />
                        <SSelect label={'Disabled'} options={options} disabled />
                        <SSelect label={'Searchable & Disabled'} options={options} searchable disabled />
                    </SFlex>
                    <br />
                    <header>Textarea</header>
                    <STextarea />
                </SFlex>
            </SPageSection>

            <SPageSection disableAnimation height={'auto'}>
                <SFlex direction={'column'}>
                    <p>Accordion Example</p>
                    <SAccordion
                        accordionBase={
                            <SFlex justify={'space-between'}>
                                <p>Accordion</p>
                                <FaPlus />
                            </SFlex>
                        }
                        accordionContent={
                            <SFlex direction={'column'}>
                                <p>Row 1</p>
                                <p>Row 2</p>
                                <p>Row 3</p>
                                <p>Row 4</p>
                            </SFlex>
                        }
                    />
                </SFlex>
            </SPageSection>

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
