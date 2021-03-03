import React, {useState} from 'react'
import Modal from 'react-modal';
import Button from '../button/Button'
import './modal.css'

 const ModalWindow = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleOpenModal () {
    setModalIsOpen(true)
  }
  
  function handleCloseModal () {
    setModalIsOpen(false)
  }
  
  return (
    <>
      <Button 
        class = 'bttn bttn_middle'
        name = 'Setup'
        onClick={handleOpenModal} />

      <Modal 
          isOpen={modalIsOpen}
          contentLabel="Setup Modal"
          onRequestClose={handleCloseModal}
          ariaHideApp={false}
          className="modal">

        <p>Modal text!</p>
        <Button 
          class = 'bttn bttn_small bttn_modal'
          name = {<i className="fas fa-times"/>} 
          onClick={handleCloseModal} />
        
      </Modal>
    </>
  );
  
}


export default ModalWindow