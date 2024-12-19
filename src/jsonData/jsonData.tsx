import {MenuStructure} from "@/interface/interface.tsx";

export const menuData: MenuStructure = {
    menu: [
        {
            label: "Dashboards",
            icon: "home",
            link: "/",
        },
        {
            label: "All Orders",
            icon: "user",
            link: "/all-orders",
        },
        {
            label: "Subscription Plan",
            icon: "dollar",
            link: "/subscription-plan",
        },
        {
            label: "Packages Edit",
            icon: "edit",
            link: "/packages-edit",
        },
        {
            label: "Subscription History",
            icon: "dollar",
            link: "/subscription-history",
        },
        {
            label: "Owner",
            icon: "user",
            link: "/owner",
        },
        {
            label: "Manage Policy",
            icon: "document",
            link: "/manage-policy",
            dropdown: true,
        },
    ],
    help: [
        {
            label: "Settings",
            icon: "settings",
            link: "/settings",
            dropdown: true,
        },
        {
            label: "My Profile",
            icon: "profile",
            link: "/my-profile",
            dropdown: true,
        },
        {
            label: "Logout",
            icon: "logout",
            link: "/logout",
        },
    ],
}
