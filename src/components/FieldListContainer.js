import React, { useEffect, useState,PureComponent } from "react";
import ReactDOM from 'react-dom';
import { compose } from "redux";
import { getFieldList,updateFieldText, postFieldList } from '../redux/verification-reducer';
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

    const onFieldChange = (textField,key) => {
        props.updateFieldText(textField,key);        
    }
    const postFields = () => {
        props.postFieldList(props.fields);
    }

    return(  
        <div>
            <FieldList fields={props.fields} onChange={onFieldChange} post={postFields}/>
        </div>  )           
})

let mapStateToProps = (state) => {
    return {
        fields: state.verificationPage.fields
    }   
}

export default compose(
    connect(mapStateToProps, { getFieldList,updateFieldText,postFieldList}))
    (FieldListContainer);

