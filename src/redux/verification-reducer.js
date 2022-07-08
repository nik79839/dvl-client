import { verificationAPI } from "../api/api";

const SET_FIELDLIST = 'SET_FIELDLIST';
const UPDATE_FIELD_TEXT='UPDATE_FIELD_TEXT';

let initialState = {
    fields: [
        { name: '?', textField: '?' },
        { name: '?!!', textField: '?!' },
    ]
};

const verificationReducer = (state = initialState, action) => { 
    switch (action.type) {
        case SET_FIELDLIST:
            return {                                     
                ...state,
                fields: action.fieldList
            }
        case UPDATE_FIELD_TEXT:
            let updatedList = [...state.fields];
            updatedList[action.key].textField = action.text;
            return {                                     
                ...state,
                fields: updatedList
            }
        default:                                     
            return state;
    }
}

export const setFieldList = (fieldList) => (
    { type: SET_FIELDLIST,  fieldList  }
)
export const setFieldText = (text,key) => ({ type: UPDATE_FIELD_TEXT, text,key })

export const getFieldList = () => {
    return async (dispatch) => { 
        let response = await verificationAPI.getFields();
        dispatch(setFieldList(response.data));      
    }
}

export const postFieldList = (fieldList) =>{
    return async () => { 
        let response = await verificationAPI.postFields(fieldList);   
    }
}

export const updateFieldText = (text,key) => {
    return (dispatch) => {
        dispatch(setFieldText(text,key));
    }
}

export default verificationReducer;
