import {addUser, changePerson,removeUser,updateUser,deletePerson} from './constant/types'

export const add=(num)=>{
    return{
        type:addUser,
        payload:num
    }
}

export const remove=(num)=>{
    return{
        type:removeUser,
        payload:num
    }
}

export const updateUsers=(id)=>({
    type:updateUser,
    payload:id
})

export const changeDetails=(data)=>({
    type:changePerson,
    payload:data
})

export const deleteUser=(id)=>({
    type:deletePerson,
    payload:id
})