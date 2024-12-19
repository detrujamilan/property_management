import React from "react";
import MainLayout from "@/common/MainLayout.tsx";
import AllOrdersTable from "@/pages/all-orders/component/AllOrdersTable.tsx";

const AllOrders: React.FC = () => {
    return (
        <MainLayout routeSubHeading={"Dashboard/All Orders"} routeHeading={"All Orders"}>
            <div>
                <AllOrdersTable/>
            </div>
        </MainLayout>
    )
}
export default AllOrders;
