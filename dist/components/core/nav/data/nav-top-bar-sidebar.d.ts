export interface NavTopBarSidebarItem {
    content: {
        logo?: any;
        title: string;
        subtitle: string;
    };
    dropdownMenu?: {
        header: {
            icon?: any;
            text: string;
        };
        items?: {
            icon: any;
            text: string;
            onclick?: () => void;
        }[];
        footer?: {
            icon?: any;
            text: string;
        };
    };
}
