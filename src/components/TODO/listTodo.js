import Buttons from '../Buttons';
const ListTodo = (props) =>{
    const {list,onChange, deleteTask,edittask} = props;
    return(
        <ul>
        {list.map(({id, title, completed}) => (
         <div key={id} className="main-list" id={id}>
          <label class="todo--label px-0"> 
             <input type="checkbox" id={id} onChange={onChange} checked={completed}/>
              <span class="todo--text" style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</span> {completed?<p className="status">Completed</p>:null} 
          </label>
            <Buttons id={id} deleteTask={deleteTask} edittask={edittask} {...props}/>
        </div>
        ))}
        </ul>
    )
}

export default ListTodo;