import React, { useContext } from 'react'
import  {ModalContext}  from './ModalProvider'

const Modal = ({title}) => {    
  const {isOpen} = useContext(ModalContext);
  return isOpen ? <div>{title} is Open</div> : null;

  
}

export default Modal