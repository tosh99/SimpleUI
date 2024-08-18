import React, { ReactNode, useMemo, useRef } from 'react';

export function SFileUpload(props: SFileUploadProps) {
    const csv_input_ref = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                if (reader.result) {
                    const file_name = file.name;
                    const file_size_in_kb = file.size / 1024;
                    const file_extension = file_name.split('.').pop();
                    if (file_extension) {
                        props.onFileUploaded(reader.result.toString(), file_name, file_extension, file_size_in_kb);
                    }
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const accept_extensions = useMemo(() => {
        let accept_extensions = '';
        if (props.accept_image) accept_extensions += '.jpg,.jpeg,.png,.gif,.bmp';
        if (props.accept_csv) accept_extensions += '.csv';
        if (props.accept_pdf) accept_extensions += '.pdf';
        if (props.accept_xls) accept_extensions += '.xls,.xlsx';
        if (props.accept_txt) accept_extensions += '.txt';
        return accept_extensions || undefined;
    }, [props.accept_image, props.accept_csv, props.accept_pdf, props.accept_xls, props.accept_txt]);

    return (
        <div>
            <input accept={accept_extensions} type="file" ref={csv_input_ref} style={{ display: 'none' }} onChange={handleFileChange} />
            <div
                onClick={() => {
                    csv_input_ref.current?.click();
                }}>
                {props.render_button}
            </div>
        </div>
    );
}

export interface SFileUploadProps {
    accept_image?: boolean;
    accept_csv?: boolean;
    accept_pdf?: boolean;
    accept_xls?: boolean;
    accept_txt?: boolean;
    render_button: ReactNode;
    onFileUploaded: (file_content: string, file_name: string, file_extension: string, file_size_in_kb: number) => void;
}
