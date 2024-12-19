import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import HeaderLogo from "../../assets/svg/headerLogo.svg?react"
import SideBarMenu from "@/pages/sidebar/component/SideBarMenu.tsx";

const Sidebar: React.FC = () => {
    const divHeight = ((90 / window.innerHeight) * 100).toFixed(2)
    return (
        <div className="w-72 border-r border-pattensBlue flex flex-col">
            <div
                style={{height: `${divHeight}vh`}}
                className={`border-b border-pattensBlue flex items-center justify-center`}>
                <HeaderLogo className="h-10 w-11"/>
                <div className="pl-3">
                    <h2 className="headline">Skywar</h2>
                    <h5 className="text-[8px] font-pregular text-bigStone">Property Management</h5>
                </div>
            </div>
            <div className="px-3 pt-6">
                <SideBarMenu/>
            </div>
        </div>
    )
}

export default Sidebar;
