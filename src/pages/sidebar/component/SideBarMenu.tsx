import React, {useState} from "react";
import {menuData} from "@/jsonData/jsonData.tsx";
import {MenuItem} from "@/interface/interface.tsx";
import {Link, useLocation} from "react-router-dom";

const SideBarMenu: React.FC = () => {
    const location = useLocation()
    const [activeMenu, setActiveMenu] = useState<string>(location.pathname)

    return (
        <div>
            <div className="pb-3 border-b border-pattensBlue">
                <h6 className="text-doveGray text-sm font-pregular">Menu</h6>
            </div>
            <div className="pt-4">
                {
                    menuData.menu.map((item: MenuItem, index: number) => {
                        const isActive: boolean = activeMenu === item.link;
                        return (
                            <Link to={item.link}
                                  className={`flex items-center px-6 rounded-[10px] cursor-pointer py-3 ${isActive ? "bg-hawkesBlue text-bigStone" : "text-doveGray"}`}
                                  onClick={() => setActiveMenu(item.link)}
                                  key={index}>
                                <span className="subscription-plan-class">{item.label}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SideBarMenu;
