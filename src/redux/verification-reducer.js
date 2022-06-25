import { verificationAPI } from "../api/api";

const SET_FIELDLIST = 'SET_FIELDLIST';
const UPDATE_FIELD_TEXT='UPDATE_FIELD_TEXT';

let initialState = {
    fields: [
        { name: '?', textField: '?' },
        { name: '?!!', textField: '?!' },
    ]
};

const verificationReducer = (state = initialState, action) => {  //�������� ��������� ������ state � ������ ��� �� ��������� action
    switch (action.type) {
        case SET_FIELDLIST:
            return {                                     //�� ���������� ����� ����� state'a
                ...state,
                fields: action.fieldList
            }
        case UPDATE_FIELD_TEXT:
            let updatedList = state.fields;
            updatedList[action.key].textField = action.text;
            return {                                     //�� ���������� ����� ����� state'a
                ...state,
                fields: updatedList
            }
        default:                                     //���� �� ������������� �� ������ action ����� ������� state
            return state;
    }
}

export const setFieldList = (fieldList) => (
    { type: SET_FIELDLIST,  fieldList  }
)
export const setFieldText = (text,key) => ({ type: UPDATE_FIELD_TEXT, text,key })

export const getFieldList = () => {
    return async (dispatch) => {  //���������� ������ �� ����� ������ � ������������ �-���
        let response = await verificationAPI.getProfile()  //���������� ���� ������ ��'resolved (����� �����)
        dispatch(setFieldList(response.data));//� ���������� ���������� ������ � state ����� setAuthUserData        
    }
}

export const updateFieldText = (text,key) => {
    return (dispatch) => {
        dispatch(setFieldText(text,key));
    }
}

export default verificationReducer;
