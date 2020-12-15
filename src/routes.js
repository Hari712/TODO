
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update, deletetodo , addtask,edittask ,textfield} from './store/actions';
import Todo from './components/TODO/Todomain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Routes = (props) => {
    const {list} = props
    const handleCheck = (e)  =>{
        props.taskcompleted(e.target.id,e.target.checked)
    } 
    const deleteTask = (e) =>{
        props.deletetask(e.target.id);
    }
  
    const addtask = (e) =>{
        if (e.keyCode === 13) {
            if(e.target.value === "" )
            {
                return;
            }
            else{
                const obj = list[list.length -1] ;
                props.addtask( obj.userId, (obj.id+1) , e.target.value , false);
            }
            e.target.value = "";
        }
    }
    const edittask = (e) =>{
        props.edittask1(e.target.id)
    }
  return (
        <Router>   
            <Switch>
                <Route exact path="/">
                    <Todo {...props} onChange={handleCheck} deleteTask={deleteTask}  edittask={edittask} addtask={addtask}/>
                </Route>
            </Switch>
        </Router>
    );
}

const mapStateToProps = (state) => {

    return {
        list: state.list,
        loader: state.loader,
        modal: state.modal,
        selected: state.selected
    }
  }


const mapDispatchToProps = dispatch => bindActionCreators({
    taskcompleted: (id, status) => (update(id, status)),
    deletetask: (id) => (deletetodo(id)),
    addtask: (userId,id,title,completed) => (addtask(userId,id,title,completed)),
    edittask1: (id) => (edittask(id))
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);
