import React, { useEffect, useState } from "react"

const Field = (props) => {

    const onFieldChange = (e) => {
        props.onChange(e.target.value, props.Mykey);
    }

    return (
        <div>         
            <p>{props.name}</p>
            <textarea value={props.textField} onChange={onFieldChange} className="input" rows="1" />
        </div>
    );
}
export default Field;
