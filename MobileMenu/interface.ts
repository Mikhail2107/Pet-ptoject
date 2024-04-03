export interface IMobileMenu {
    className?: string;
    link: string;
    text: string;
    id?: number;
}

export interface IMobileMenuLink {
    menuMobileLink: IMobileMenu[]
}