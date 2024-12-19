import React from "react";
import {Modal} from "@/common/Modal.tsx";
import {DataRow} from "@/pages/all-orders/component/AllOrdersTable.tsx";

interface OrderDetailsModalProps {
    isOpen: boolean;
    closeModal: () => void;
    orderDetails: DataRow;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({orderDetails, closeModal, isOpen}) => {

    return (
        <Modal isOpen={isOpen} closeModal={closeModal} dialogTitle="Order Details">
            <div className="border border-pattensBlue rounded-[10px]">
                <div className="p-5">
                    <div className={"flex items-center"}>
                        <span className={"text-bigStone text-base font-pregular"}>Name :</span>
                        <span className={"text-doveGray text-base font-pregular"}>{orderDetails?.name}</span>
                    </div>
                    <div className={"flex items-center"}>
                        <span className={"text-bigStone text-base font-pregular"}>Package :</span>
                        <span className={"text-doveGray text-base font-pregular"}>{orderDetails?.package}</span>
                    </div>
                    <div className={"flex items-center"}>
                        <span className={"text-bigStone text-base font-pregular"}>Amount :</span>
                        <span className={"text-doveGray text-base font-pregular"}>{orderDetails?.amount}</span>
                    </div>
                    <div className={"flex items-center"}>
                        <span className={"text-bigStone text-base font-pregular"}>Date :</span>
                        <span className={"text-doveGray text-base font-pregular"}>{orderDetails?.date}</span>
                    </div>
                    <div className={"flex items-center"}>
                        <span className={"text-bigStone text-base font-pregular"}>Gateway :</span>
                        <span className={"text-doveGray text-base font-pregular"}>{orderDetails?.gateway}</span>
                    </div>
                    <div className={"flex items-center"}>
                        <span className={"text-bigStone text-base font-pregular"}>Payment Status :</span>
                        <span className={"text-doveGray text-base font-pregular"}>{orderDetails?.status}</span>
                    </div>
                    <div className={"flex items-center"}>
                        <span className={"text-bigStone text-base font-pregular"}>Payment Type :</span>
                        <span className={"text-doveGray text-base font-pregular"}>Yearly</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default OrderDetailsModal;
