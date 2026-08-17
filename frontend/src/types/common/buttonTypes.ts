type ButtonType = "submit" | "reset" | "button";

export type ButtonProps = {
    type?: ButtonType ;
    children: React.ReactNode
    className?: string;
}
