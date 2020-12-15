import React from 'react'
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button,Modal } from 'semantic-ui-react'
import {updateTask, closemodal} from '../store/actions'

function ModalExampleModal(props) {
 const {modal,selected} = props;
 const [title, settitle] = useState();
 useEffect(() => {
    settitle(selected.title);
  }, [selected.title]);
 const  textfield = (e) =>{ 
   settitle(e.target.value);
 }
 const updateTask = () =>{
    props.update(selected.id, title)
 }
 const closeModal = () =>{
     props.close();
 }
  return (
      <div>
      { modal ?
    <Modal open={modal}>
      <Modal.Header>Selected TODO</Modal.Header>
      <Modal.Content>
        <Modal.Description>
            <input type="text" onChange={(e) => textfield(e)} value={title}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={closeModal}>
          Cancel
        </Button>
        <Button
          content="update"
          labelPosition='right'
          icon='checkmark'
          onClick={updateTask}
          positive
        />
      </Modal.Actions>
    </Modal> : null}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        selected: state.selected
    }
  }

const mapDispatchToProps = dispatch => bindActionCreators({
    update: (id,title) => (updateTask(id,title)),
    close: () => (closemodal())
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalExampleModal);

