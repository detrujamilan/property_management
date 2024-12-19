import React, {useState} from "react";
import {Table} from "@/common/Table.tsx";
import OrderDetailsModal from "@/pages/all-orders/component/OrderDetailsModal.tsx";

export type DataRow = {
    id: number;
    name: string;
    package: string;
    amount: number;
    date: string;
    gateway: string;
    status: string;

};

type DataColumns = {
    key: keyof DataRow;
    label: string;
};

const data: DataRow[] = [
    {
        id: 1,
        name: "Alice",
        package: "Basic Plan",
        amount: 150.5,
        date: "2024-06-18",
        gateway: "PayPal",
        status: "Paid",
    },
    {
        id: 2,
        name: "Bob",
        package: "Professional Plan",
        amount: 200.0,
        date: "2024-06-17",
        gateway: "Stripe",
        status: "Pending",
    },
    {
        id: 3,
        name: "Charlie",
        package: "Basic Plan",
        amount: 99.99,
        date: "2024-06-16",
        gateway: "Bank Transfer",
        status: "Cancel",
    },
    {
        id: 4,
        name: "David",
        package: "Professional Plan",
        amount: 500.0,
        date: "2024-06-15",
        gateway: "PayPal",
        status: "Paid",
    },
    {
        id: 5,
        name: "Eve",
        package: "Basic Plan",
        amount: 75.25,
        date: "2024-06-14",
        gateway: "Credit Card",
        status: "Pending",
    },
    {
        id: 6,
        name: "Frank",
        package: "Professional Plan",
        amount: 300.75,
        date: "2024-06-13",
        gateway: "Stripe",
        status: "Paid",
    },
    {
        id: 7,
        name: "Grace",
        package: "Basic Plan",
        amount: 125.0,
        date: "2024-06-12",
        gateway: "PayPal",
        status: "Paid",
    },
    {
        id: 8,
        name: "Hank",
        package: "Professional Plan",
        amount: 400.5,
        date: "2024-06-11",
        gateway: "Bank Transfer",
        status: "Pending",
    },
    {
        id: 9,
        name: "Ivy",
        package: "Basic Plan",
        amount: 50.75,
        date: "2024-06-10",
        gateway: "Credit Card",
        status: "Cancel",
    },
    {
        id: 10,
        name: "Jack",
        package: "Professional Plan",
        amount: 275.25,
        date: "2024-06-09",
        gateway: "Stripe",
        status: "Paid",
    },
];


const columns: DataColumns[] = [
    {key: "name", label: "Name"},
    {key: "package", label: "Package"},
    {key: "amount", label: "Amount"},
    {key: "date", label: "Date"},
    {key: "gateway", label: "Gateway"},
    {key: "status", label: "Status"},
];


const AllOrdersTable: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [orderDetails, setOrderDetails] = useState<DataRow | null>(null)
    const typeCheckData = (type: string) => {
        return data.filter((item) => item.status.toLowerCase() === type.toLowerCase()).length;
    }
    const paid: number = typeCheckData("Paid")
    const pending: number = typeCheckData("pending")
    const cancel: number = typeCheckData("Cancel")

    const handleOpenViewModal = (row: DataRow) => {
        setOrderDetails(row)
        setOpenModal(true)
    }
    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <>
            <div className="bg-white p-7 rounded-lg">
                <div className={"flex items-center"}>
                    <div>
                        <h2 className="headline-text-bold">All Orders</h2>
                    </div>
                    <div className="flex items-center gap-5 pl-10">
                        <div className={"bg-blueRibbon text-[1.02vw] px-4 py-2 rounded"}>
                            <span className={"font-pregular text-white"}>All ({data?.length})</span>
                        </div>
                        <div className={"bg-zumthor text-[1.02vw] px-4 py-2 rounded"}>
                            <span className={"font-pregular text-blueRibbon"}>Paid ({paid})</span>
                        </div>
                        <div className={"bg-zumthor text-[1.02vw] px-4 py-2 rounded"}>
                            <span className={"font-pregular text-blueRibbon"}>Pending ({pending})</span>
                        </div>
                        <div className={"bg-zumthor text-[1.02vw] px-4 py-2 rounded"}>
                            <span className={"font-pregular text-blueRibbon"}>Cancel ({cancel})</span>
                        </div>
                    </div>
                </div>
                <div className="pt-7">
                    <Table data={data} columns={columns} isFilter={false} isPagination={true}
                           handleOpenViewModal={handleOpenViewModal}/>
                </div>
            </div>
            <OrderDetailsModal orderDetails={orderDetails} isOpen={openModal} closeModal={closeModal}/>
        </>
    )
}
export default AllOrdersTable;
