import React ,{createContext, useContext,useState}from 'react'

export const ModalContext = React.createContext();
const ModalProvider = ({children}) => {
  const [isOpen,setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     
      <ModalContext.Provider value={{isOpen,toggleModal}}>
        {children}
      </ModalContext.Provider>
    </>
  )
}

export default ModalProvider  