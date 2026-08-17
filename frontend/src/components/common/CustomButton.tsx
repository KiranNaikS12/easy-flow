import type { ButtonProps } from "../../types/common/buttonTypes"


const Button = ({type = "button", children, className}: ButtonProps) => {
    return (
        <button type={type} className={className}>
           {children}
        </button>
    )
}

export default Button
