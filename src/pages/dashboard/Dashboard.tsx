import React from "react";
import MainLayout from "@/common/MainLayout.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store.tsx";

const Dashboard: React.FC = () => {

    const {user} = useSelector((state: RootState) => state.auth)

    return (
        <MainLayout routeHeading={"Dashboard"} routeSubHeading={`Welcome back, ${user?.username}`}>
            <div>
                DashBoard
            </div>
        </MainLayout>
    )
}
export default Dashboard;
