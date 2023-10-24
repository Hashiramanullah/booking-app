import { createStore,combineReducers } from "redux";



let intialSignUpData = {
    SignUpData:[],

}

function SignUpData(oldData = intialSignUpData , newData){
    return oldData
}

let intialLoginData = {
    LoginData:[
    
    ],
}
    function LoginData(oldData = intialLoginData , newData){
oldData = {...oldData}
        return oldData
    }

    
    let rootRuducer = combineReducers({SignUpData,LoginData})

let MeraStore = createStore(rootRuducer);


export default MeraStore;