import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Notification from "../../assets/svg/notification.svg?react"

const Header: React.FC = () => {
    const divHeight = ((90 / window.innerHeight) * 100).toFixed(2)
    return (
        <header
            style={{ height: `${divHeight}vh` }}
            className={`bg-white  border-b border-pattensBlue flex flex-col justify-center pr-8`}>
            <div className="flex justify-end">
                <div className={"flex justify-between items-center"}>
                    <div
                        className="bg-hawkesBlue rounded-full w-[54px] h-[54px] flex items-center justify-center">
                        <div className="relative cursor-pointer">
                            <Notification/>
                            <div
                                className="absolute -top-1 -right-[5px] bg-blueRibbon rounded-full flex w-4 h-4 text-center justify-center">
                                <span className="text-white text-xs">3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
