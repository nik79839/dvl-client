import { verificationAPI } from "../api/api";

const SET_FIELDLIST = 'SET_FIELDLIST';

let initialState = {
    fields: [
        { name: 'asfsaf', textField: 'fjfhdf' },
        { name: '23425', textField: 'dsfsdg' },
    ]
};

const verificationReducer = (state = initialState, action) => {  //редьюсер принимает старый state и меняет его на основании action
    switch (action.type) {
        case SET_FIELDLIST:
            return {                                     //мы возвращаем копию всего state'a
                ...state,
                fields: action.payload
            }
        default:                                     //если не соответствует не одному action тогда вернуть state
            return state;
    }
}

export const setFieldList = (fieldList) => (
    { type: SET_FIELDLIST, payload: { fieldList } }
)

export const getFieldList = () => {
    return async (dispatch) => {  //дожидаться промис мы можем только в ассинхронной ф-ции
        let response = await verificationAPI.getProfile()  //дожидаемся пока промис за'resolved (будет решен)
        //let { id, email, login } = response.data.data; // мы берём из data'ы  id, email, login и выставляем флаг isAuth true
        dispatch(setFieldList(response.data));//и отправляем полученные данные в state через setAuthUserData        
    }
}

export default verificationReducer;
