// Packages
import React, { useState } from "react"

function Input(props) {
    const [isVisible, setIsVisible] = useState(false)
    const visible = isVisible ? "text" : "password"

    return (
        <div>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}

            {props.inputtype === "password" ? (
                <div>
                    <input
                        id={props.id}
                        name={props.name || props.id}
                        type={visible}
                        {...props}
                    />

                    <button
                        type="button"
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        {isVisible ? "Hide" : "Show"} password
                    </button>
                </div>
            ) : props.inputtype === "textarea" ? (
                <textarea
                    id={props.id}
                    name={props.name || props.id}
                    {...props}
                />
            ) : (
                <input id={props.id} name={props.name || props.id} {...props} />
            )}
        </div>
    )
}

export default Input
