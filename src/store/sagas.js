import {all, call, put, takeLatest, take, select, fork} from 'redux-saga/effects';
import { APIdata ,loadercall } from './actions';
import {FetchList, deleteTodo ,updateCompletetask, AddTodoApi, updateTodoApi} from '../services/ApiFile';
import * as actions from './actions'

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* TodolistSaga() {
    try {
        const responseData = yield call(FetchList);  
        yield delay(2000)
        yield put(APIdata(responseData));
        yield put(loadercall(false));
    } catch (e) {
        console.log('error', e)
    }
}
export function* TodoupdateSaga() {
  const { id , status} = yield take(actions.UPDATE)
  try {
      yield call(updateCompletetask, id, status);
      yield delay(1000);
      
  } catch (e) {
      console.log('error', e)
  }
}
export function* TodoDeleteSaga(){
  const {id} = yield take(actions.DELETETODO)
  try {
    yield call(deleteTodo, id);
  }
  catch(e){
    console.log('error',e);
  }
}
export function* TodoAddSaga(){
  const {userId,id,title,completed} = yield take(actions.NEWTASK)
  try {
    yield call(AddTodoApi, userId,id,title,completed);
  }
  catch(e){
    console.log('error',e);
  }
}
export function* TodoEDITSaga(){
  const {id,title} = yield take(actions.UPDATETASK)
  try {
    yield call(updateTodoApi, id,title);
  }
  catch(e){
    console.log('error',e);
  }
}
export function* rootSaga() {
    return yield all([
      TodolistSaga(),
      TodoupdateSaga(),
      TodoAddSaga(),
      TodoEDITSaga()
    ]);
}