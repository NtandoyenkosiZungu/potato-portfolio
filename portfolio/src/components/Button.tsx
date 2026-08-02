import React from "react"

type ButtonProps = {
    label : string;
    isDisabled?: boolean;
    onClick: ()=> void;
}

function Button ({label, isDisabled = false, onClick} : ButtonProps) {
    return (
        <button
            className="font-rubik text-primary bg-onyx-light rounded-lg border-2 border-primary p-2 cursor-pointer transition-all hover:bg-onyx-variant hover:-translate-y-0.75 active:translate-y-0"
            disabled ={isDisabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;