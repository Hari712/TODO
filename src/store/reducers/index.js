
import {API_CALL ,UPDATE,DELETETODO,NEWTASK,LOADER, EDITTASK, UPDATETASK,CLOSEMODAL} from '../actions'
export function rootReducer(state, action) {
    switch(action.type) {
        case API_CALL:
            return {
                ...state,
                list : action.data
            }
        case LOADER:
            return {
                ...state,
                loader : action.data
            }
        case UPDATE:
            const Index = state.list.findIndex(element => element.id == action.id );
            let newList = [...state.list]
            newList[Index] = {...newList[Index], completed: action.status}
            return{
                ...state,
                list : newList
            }
        case DELETETODO:
            const list = state.list.filter((item) => item.id != action.id);
           return{
               ...state,
               list: list
           }
        case NEWTASK:
            const task = {userId:action.userId, id: action.id, title: action.title,completed: action.completed }
            return{
                ...state,
                list: [...state.list ,task]
            }  
        case EDITTASK:
            const Id = state.list.findIndex(element => element.id == action.id );
            const data = {...state.list[Id]}
            return{
                ...state,
                modal:true,
                selected:data
            }
        case UPDATETASK:
            const arr_id = state.list.findIndex(element => element.id == action.id );
            let List = [...state.list]
            List[arr_id] = {...List[arr_id], title:action.data}
            return{
                ...state,
                list:List,
                modal:false
            }
        case CLOSEMODAL:
            return{
                ...state,
                modal:false
            }
        default:
            // the dispatched action is not in this reducer, return the state unchanged
            return state;
    }
}

// export const getdata = state => state.data;