import React, { useEffect, useState } from "react"
import  Field  from './Field';

const FieldList = (props) => { 

    let [fields, setFields] = useState(props.fields) //из пропсов берём  статус и отдаём его в значения
    useEffect(() => {                // "- Закиньте в меня ф-цию которую я выполню когда произайдёт уже отрисовка"
        setFields(props.fields);
        //debugger;
    }, [props.fields] ) //если зависимость от props изменилась, то синхронизируйся

    const onFieldChange = (e,key) => {
        props.onChange(e, key);
    }

        return <div>
            <h2>Lists</h2>
            <div>
                {
                    fields?.map((field,index) => (
                        <Field name={field.name} textField={field.textField} Mykey={index} onChange={onFieldChange}  />
                    ))
                }              
            </div>
            <button onClick={() => alert(props.fields[0].textField)} />
        </div>; 
}
export default FieldList;

