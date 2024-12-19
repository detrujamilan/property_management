export interface MenuItem {
    label: string;
    icon: string;
    link: string;
    dropdown?: boolean;
}

export interface MenuStructure {
    menu: MenuItem[];
    help: MenuItem[];
}


