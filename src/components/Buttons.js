import  ModalExampleModal from "../components/modal"
import { AiOutlineDelete } from "react-icons/ai";
import {FaEdit} from "react-icons/fa";
import {Button} from "semantic-ui-react"
const Buttons  = (props) =>{
    const {id,deleteTask, edittask} = props;
    return(
        <div>
        <Button color='green' className="Btn"  id={id}  onClick={edittask}><FaEdit id={id}  onClick={edittask} className="Btn-icon"/></Button>
        <Button color='red' className="Btn"  id={id}  onClick={deleteTask}><AiOutlineDelete id={id}  onClick={deleteTask} className="Btn-icon"/></Button>
       <ModalExampleModal {...props} id={id} />
        </div>
    );
}

export default Buttons;