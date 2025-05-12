import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { SAccordion } from './base-components/s-accordion/s-accordion';
import { SBadge } from './base-components/s-badge/s-badge';
import { SButton } from './base-components/s-button/s-button';
import { SFileUpload } from './base-components/s-file-upload/s-file-upload';
import { SFlex } from './base-components/s-flex/s-flex';
import { SImage } from './base-components/s-image/s-image';
import { SInput } from './base-components/s-input/s-input';
import { SLoader } from './base-components/s-loader/s-loader';
import { SMarquee } from './base-components/s-marquee/s-marquee';
import { SPageSection } from './base-components/s-page-section/s-page-section';
import { SSelect } from './base-components/s-select/s-select';
import { SSkeletonLoader } from './base-components/s-skeleton-loader/s-skeleton-loader';
import SSwiper from './base-components/s-swiper/s-swiper';
import { STextarea } from './base-components/s-textarea/s-textarea';
import { SToggle } from './base-components/s-toggle/s-toggle';
import { STabs } from './base-components/s-tabs/s-tabs';
import { SCheckbox } from './base-components/s-checkbox/s-checkbox';

const options = [
    { label: 'Opt 1', value: 1 },
    { label: 'Opt 2', value: 2 },
];

export function App() {
    const [opt, set_opt] = useState(options[0]);
    const [is_on, set_is_on] = useState(true);

    const [theme, set_theme] = useState<'light' | 'dark'>('dark');

    return (
        <>
            <SPageSection background={theme === 'dark' ? 'black' : 'white'} disableAnimation height={'auto'}>
                <SToggle
                    off_text="Light"
                    on_text="Dark"
                    is_on={theme === 'dark'}
                    onToggle={() => {
                        set_theme((prev) => (prev === 'light' ? 'dark' : 'light'));
                    }}
                />
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
                    <header>Loader</header>
                    <SLoader size={16} />
                    <br />
                    <header>Buttons</header>
                    <SFlex>
                        <SButton loading={true}>Button Normal</SButton>
                        <SButton variant={'secondary'}>Button Secondary</SButton>
                        <SButton variant={'ghost'}>Button Ghost</SButton>
                        <SButton variant={'outline'}>Button Outline</SButton>
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
                    <header>Skeleton Loader</header>
                    <SFlex width={'100%'}>
                        <SSkeletonLoader />
                        <SSkeletonLoader count={5} />
                    </SFlex>
                    <br />
                    <header>Checkbox</header>
                    <SCheckbox checked={false} onChange={(checked) => console.log('Checkbox state:', checked)}>I am off checkbox</SCheckbox>
                    <SCheckbox checked={true} onChange={(checked) => console.log('Checkbox state:', checked)}>I am on checkbox</SCheckbox>
                    <br />
                    <header>Tabs</header>
                    <STabs tab_key={0} tabs={[{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }]} onTabClick={(tab) => {}} />
                    <br />
                    <header>File Upload</header>
                    <SFlex>
                        <SFileUpload onFileUploaded={(file_content, file_name) => {}} render_button={<SButton>Upload Any</SButton>} />
                        <SFileUpload accept_image onFileUploaded={(file_content, file_name) => {}} render_button={<SButton variant={'outline'}>Upload Image</SButton>} />
                    </SFlex>
                    <br />
                    <header>Inputs</header>
                    <SFlex align={'end'}>
                        <SInput width={400} label={'Normal'} required />
                        <SInput label={'Disabled'} disabled value={'Disabled'} />
                        <SInput label={'With Input'} value={is_on.toString()} />
                        <SToggle
                            off_text={'Off'}
                            on_text={'On'}
                            is_on={is_on}
                            onToggle={() => {
                                set_is_on((prev) => !prev);
                            }}
                        />
                    </SFlex>
                    <br />
                    <header>Select</header>
                    <SFlex width={'100%'} wrap>
                        <SSelect label={'Normal'} options={options} loading={true} />
                        <SSelect label={'Searchable'} options={options} searchable />
                        <SSelect label={'Searchable, Loading & Selected'} options={options} searchable value={opt} loading={true} />
                        <SSelect label={'Disabled'} options={options} disabled />
                        <SSelect label={'Searchable & Disabled'} options={options} searchable disabled />
                    </SFlex>
                    <br />
                    <header>Textarea</header>
                    <STextarea />
                    <br />
                    <header>Accordion</header>
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
