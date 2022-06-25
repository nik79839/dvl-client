import { verificationAPI } from "../api/api";

const SET_FIELDLIST = 'SET_FIELDLIST';

let initialState = {
    fields: [
        { name: 'asfsaf', textField: 'fjfhdf' },
        { name: '23425!!', textField: 'dsfsdg' },
    ]
};

const verificationReducer = (state = initialState, action) => {  //�������� ��������� ������ state � ������ ��� �� ��������� action
    switch (action.type) {
        case SET_FIELDLIST:
            return {                                     //�� ���������� ����� ����� state'a
                ...state,
                fields: action.payload
            }
        default:                                     //���� �� ������������� �� ������ action ����� ������� state
            return state;
    }
}

export const setFieldList = (fieldList) => (
    { type: SET_FIELDLIST, payload: { fieldList } }
)

export const getFieldList = () => {
    return async (dispatch) => {  //���������� ������ �� ����� ������ � ������������ �-���
        let response = await verificationAPI.getProfile()  //���������� ���� ������ ��'resolved (����� �����)
        //let { id, email, login } = response.data.data; // �� ���� �� data'�  id, email, login � ���������� ���� isAuth true
        dispatch(setFieldList(response.data));//� ���������� ���������� ������ � state ����� setAuthUserData        
    }
}

export default verificationReducer;
