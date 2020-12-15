import LoaderFile from '../loader';
import ListTodo from './listTodo'
const Todo = (props) =>{
    const {loader,addtask} = props;
    return(
       <div>
            <h1> TODO APP! </h1>
            {loader ? <LoaderFile /> : <ListTodo {...props} />}
            <div className="add-task">
            <input placeholder="Add Task" onKeyDown={(e) => addtask(e)} type="text"></input>
            </div>
            
        </div>
    );
}

export default Todo;

