import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { compose } from "redux";
import { getFieldList,updateFieldText } from '../redux/verification-reducer';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import  FieldList  from './FieldList';

const FieldListContainer = (props) => {

    //const dispatch = useDispatch();
    //let [fields, setFields] = useState(props.fields1);
    //const [loading, setLoading] = useState(false);

    //const getData = async() => {
        //await props.getFieldList();
        //setFields(props.fields1);
        //debugger;
    //}

    useEffect(  () => {
        props.getFieldList();
        //console.log(fields);
        //debugger;     
    },[])

    const onFieldChange = (textField,key) => {
        props.updateFieldText(textField,key);
        //let updatedList = props.fields1;
        //updatedList[key].textField = textField;
        //setFields(updatedList);
        //debugger;        
    }

    return(  
        <div>
            <FieldList fields={props.fields1} onChange={onFieldChange}/>
        </div>  )           
}
let mapStateToProps = (state) => {
    return {
        fields1: state.verificationPage.fields
    }   
}

export default compose(
    connect(mapStateToProps, { getFieldList,updateFieldText}))
    (FieldListContainer);

