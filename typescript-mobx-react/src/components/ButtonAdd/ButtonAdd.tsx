import React, {FC} from "react";
import "./ButtonAdd.css"

interface ButtonProps extends React.ComponentPropsWithRef<'button'>{
    color: 'blue' | 'red';
}

export const ButtonAdd: FC<ButtonProps> = ({children, color, onClick, ...props}) => {
    const className = `button button_${color}`

    return <button type={"button"} className={className} onClick={onClick} {...props}>
        {children}
    </button>
}