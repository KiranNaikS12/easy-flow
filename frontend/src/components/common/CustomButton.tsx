import type { ButtonProps } from "../../types/common/buttonTypes"


const Button = ({type = "button", children, onClick, className}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={className} >
           {children}
        </button>
    )
}

export default Button
