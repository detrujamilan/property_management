import React from "react";

interface MainLayoutProps {
    children: React.ReactNode;
    routeHeading: string;
    routeSubHeading: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, routeHeading, routeSubHeading}) => {
    return (
        <div>
            <div>
                <h1 className="headline-text">{routeHeading}</h1>
                <span className="pt-[18px] metaText">{routeSubHeading}</span>
            </div>
            <div className="mt-7">
                {children}
            </div>
        </div>
    )
}
export default MainLayout;
