import React, {useContext} from 'react'
import { ModalContext } from './ModalProvider'

const ModalButton = () => {
const {toggleModal} = useContext(ModalContext);

  return (
   <button onClick={toggleModal}>Toggle Modal</button>
  )
}

export default ModalButton