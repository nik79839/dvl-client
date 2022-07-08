import  Field  from './Field';

const FieldList = (props) => { 

    const onFieldChange = (e,key) => {
        props.onChange(e, key);
    }
    //debugger;
        return <div>
            <h2>Lists</h2>
            <div>
                {
                    props.fields?.map((field,index) => (
                        <Field name={field.name} textField={field.textField} Mykey={index} onChange={onFieldChange}  />
                    ))
                }              
            </div>
            <button onClick={props.post}>Отправить/</button>
        </div>; 
}
export default FieldList;

