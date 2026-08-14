import { ErrorMessage } from "formik"


const ValidationError = ({name}: {name: string}) => {
    return (
        <ErrorMessage
            name={name}
            component="div"
            className="text-xs text-red-500"
        />
    )
}

export default ValidationError
