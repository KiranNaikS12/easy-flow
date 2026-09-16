import type { ButtonProps } from "../../types/componentTypes.ts/buttonTypes"


const Button = ({type = "button", isDisabled,  children, onClick, className}: ButtonProps) => {
    return (
        <button type={type} disabled={isDisabled} onClick={onClick} className={className} >
           {children}
        </button>
    )
}

export default Button
