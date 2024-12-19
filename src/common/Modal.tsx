import React from "react";
import {Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import CloseIcon from "../assets/svg/closeIcon.svg?react"

interface modalProps {
    closeModal: () => void,
    isOpen: boolean;
    children: React.ReactNode;
    dialogTitle: string
}

export const Modal: React.FC<modalProps> = ({closeModal, isOpen, children, dialogTitle}) => {
    const widthModal = ((612 / window.innerWidth) * 100).toFixed(2)
    return (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
            <div className="fixed inset-0 bg-[#00000066] flex w-screen items-center justify-center">
                <DialogPanel style={{width: `${widthModal}vw`}}
                             className="space-y-4 bg-white p-8 rounded-[10px]">
                    <DialogTitle>
                        <div className={"flex justify-between items-center"}>
                            <h3 className="font-pmedium text-lg text-bigStone">{dialogTitle}</h3>
                            <CloseIcon className="cursor-pointer" onClick={closeModal}/>
                        </div>
                    </DialogTitle>
                    <div>
                        {children}
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
