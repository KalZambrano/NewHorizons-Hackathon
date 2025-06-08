import { useState } from 'react'
import PopUp from './components/popUp/popUp'
import './App.css'

function App() {
  const [classShow, setclassShow] = useState(' active')
  
  const openPopUp = () => {setclassShow(' active')}
  const closePopUp = () => {setclassShow('')}
  

  return (
    <>
      <button onClick={openPopUp}>Mostrar</button>
      <PopUp closePopUp={closePopUp} classShow={classShow}/>
    </>
  )
}

export default App
