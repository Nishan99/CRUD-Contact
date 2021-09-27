import {addUser, removeUser, updateUser,changePerson,deletePerson} from '../actions/constant/types'
const initialState={
    datas:[
       
    ],
    selectedData:null
}
const personReducers=(state=initialState, action)=>{
    switch(action.type){
        case addUser:
            return {
                ...state,
                datas:[
                    action.payload,
                    ...state.datas
                ]
            }
        case removeUser:
            return state.counter - action.payload
        case updateUser:
            let arr = state.datas.filter(contact=>contact.id === action.payload)
            arr = arr.values()
            for(let value of arr){
                arr = value
            }
            return{
                ...state,
                selectedData:arr
            }
            case changePerson:
                return{
                    ...state,
                    datas:state.datas.map(each=>each.id === action.payload.id ? action.payload: each)
                }
            case deletePerson:
                return{
                    ...state,
                    datas:state.datas.filter(item=>item.id !== action.payload)
                }
            
        default:
            return state
    }
}

export default personReducers