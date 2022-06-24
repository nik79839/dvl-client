import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { compose } from "redux";
import { getFieldList } from '../redux/verification-reducer';
import { connect } from 'react-redux';
import  FieldList  from './FieldList';

const FieldListContainer = (props) => {

    let [fields, setFields] = useState()

    useEffect(() => {
        props.getFieldList();
        //setFields(props.fields1);
        console.log(fields);
    })

    /*const handleInputChange = (textField,ind) => {
        let updatedList = fields;
        updatedList[ind].textField = textField;
        setFields(updatedList);
        
    }*/

    return(  
        <div>
            <FieldList fields={fields}/>
        </div>  )           
}
let mapStateToProps = (state) => {
    return {
        fields1: state.verificationPage.fields
    }   
}

export default compose(
    connect(mapStateToProps, { getFieldList }))
    (FieldListContainer);

