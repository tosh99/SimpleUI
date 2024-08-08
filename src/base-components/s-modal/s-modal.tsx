import React, {ReactNode} from "react";
import styles from "./s-modal.module.scss";
import {SButton} from "../s-button/s-button";
import {SFlex} from "../s-flex/s-flex";

export function SModal(props: SModalProps) {
    return (
        <>
            {props.opened ? (
                <div className={styles.modalWrapper}>
                    <div
                        className={styles.modal}
                        style={{
                            minWidth: props.width,
                        }}
                    >
                        <div className={styles.modalHeader}>
                            <p className={styles.modalHeaderText}>{props.title}</p>
                            <SFlex>
                                {props.headerButtons ? props.headerButtons : null}
                                <SButton onClick={props.onClose}>Close</SButton>
                            </SFlex>
                        </div>
                        <div
                            className={styles.modalBody}
                            style={{
                                minHeight: props.minHeight || 300,
                            }}
                        >
                            {props.children}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

interface SModalProps {
    children: ReactNode;
    minHeight?: number;
    width?: number;
    headerButtons?: ReactNode;
    title: string;
    opened?: boolean;
    onClose: () => void
}

