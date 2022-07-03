import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Button(props) {
    let { icon, size, text, styler } = props;
    return (
        <button className={styler}>
            <FontAwesomeIcon icon={icon} size={size} />
            <span>{text}</span>
        </button>
    )
}