import React, { useEffect, useState,PureComponent } from "react";
import ReactDOM from 'react-dom';
import { compose } from "redux";
import { getFieldList,updateFieldText } from '../redux/verification-reducer';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import  FieldList  from './FieldList';

const FieldListContainer = React.memo((props) => {

    //const dispatch = useDispatch();
    //let [fields, setFields] = useState(props.fields1);
    //const [loading, setLoading] = useState(false);

    //const getData = async() => {
        //await props.getFieldList();
        //setFields(props.fields1);
    //}

    useEffect(  () => {
        props.getFieldList();;     
    },[])

    useEffect(  () => {
            
    },[props.fields1])

    const onFieldChange = (textField,key) => {
        props.updateFieldText(textField,key);        
    }
    return(  
        <div>
            <FieldList {...props} fields={props.fields1} onChange={onFieldChange}/>
        </div>  )           
})

let mapStateToProps = (state,ownProps) => {
    return {
        fields1: state.verificationPage.fields
    }   
}

export default compose(
    connect(mapStateToProps, { getFieldList,updateFieldText}))
    (FieldListContainer);

