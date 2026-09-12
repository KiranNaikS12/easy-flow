import type { ButtonProps } from "../../types/componentTypes.ts/buttonTypes"


const Button = ({type = "button", children, onClick, className}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={className} >
           {children}
        </button>
    )
}

export default Button
