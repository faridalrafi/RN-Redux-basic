import { CHANGE_TEXT } from '../actionTypes/text'

export const changeTextValue = (data) => {
    return {
        type : CHANGE_TEXT,
        payload : data
    }
}