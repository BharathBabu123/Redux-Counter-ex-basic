import {CreateStore} from 'redux';

const initialState = {
      count:0
};


const reducer =(state = initialState, action )=>{
    console.log('reducer' , action);
    return state;
}

const store = CreateStore(reducer);

export default store;