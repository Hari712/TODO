export const API_CALL = "API_CALL";
export const LOADER = "LOADER";
export const UPDATE = "UPDATE";
export const DELETETODO = "DELETETODO";
export const NEWTASK = "NEWTASK";
export const EDITTASK = "EDITTASK";  
export const UPDATETASK = "UPDATETASK";
export const CLOSEMODAL = "CLOSEMODAL";

export function APIdata(data) {
    return {
        type: API_CALL,
        data
    }
}

export function loadercall(data) {
    return {
        type: LOADER,
        data
    }
}

export function update(id, status){
    return{
        type: UPDATE,
        id,
        status
    }
}

export function deletetodo(id){
    return{
        type: DELETETODO,
        id
    }
}

export function addtask(userId,id,title,completed){
    return{
        type: NEWTASK,
        userId,
        id,
        title,
        completed
    }
}
export function edittask(id){
    return{
        type:EDITTASK,
        id
    }
}

export function updateTask(id, data){
    return{
        type:UPDATETASK,
        id,
        data
    }
}
export function closemodal(){
    return {
        type:CLOSEMODAL
    }
}