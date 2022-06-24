import React, { useEffect, useState } from "react"
import { Field } from './Field';

const FieldList = (props) => {

    let initialState = {
        fields: [
            { name: 'asfsaf', textField: 'fjfhdf' },
            { name: '23425', textField: 'dsfsdg' },
        ]
    };

    

    /*const handleInputChange = (textField,ind) => {
        let updatedList = fields;
        updatedList[ind].textField = textField;
        setFields(updatedList);
        
    }*/


        return <div>
            <h2>Lists</h2>
            <div>
                {
                    props.fields?.map((field,index) => (

                        <Field name={field.name} textField={field.textField} Mykey={index}  />
                    ))
                }              
            </div>
            <button onClick={() => alert(props.fields[0].textField)} />
        </div>; 
}
export default FieldList;

