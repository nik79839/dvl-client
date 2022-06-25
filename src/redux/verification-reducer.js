import { verificationAPI } from "../api/api";

const SET_FIELDLIST = 'SET_FIELDLIST';
const UPDATE_FIELD_TEXT='UPDATE_FIELD_TEXT';

let initialState = {
    fields: [
        { name: '?', textField: '?' },
        { name: '?!!', textField: '?!' },
    ]
};

export const updateObjectArray = (items, itemId, objPropName,newObjProps) => {
    return items.map(u => {    //.map возвращает новый массив который заменит
         if (u[objPropName] === itemId) { //если найдёт совподения по такому objPropName из обьекта с таким itemId 
             return { ...u, ...newObjProps }  // создаст новую копию объекта и заменит старые св-ва
         }
         return u; //если id не совподает то возвращаем старый объект
     })
 }

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
        let response = await verificationAPI.getProfile()
        dispatch(setFieldList(response.data));      
    }
}

export const updateFieldText = (text,key) => {
    return (dispatch) => {
        dispatch(setFieldText(text,key));
    }
}

export default verificationReducer;
