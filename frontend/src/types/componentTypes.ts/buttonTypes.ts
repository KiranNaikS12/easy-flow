type ButtonType = "submit" | "reset" | "button";

export type ButtonProps = {
    type?: ButtonType ;
    isDisabled?: boolean;
    children: React.ReactNode
    className?: string;
    onClick?: () => void;
}
