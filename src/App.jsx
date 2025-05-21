import { Outlet } from "react-router-dom"
import  Nav from "./Components/Nav.jsx"

import { Provider } from "react-redux"
import appStore from "./utils/Mock_Data.js"


const App = () => {
  return (
    <Provider store={appStore}>
     <Nav />
     <Outlet/>
    </Provider>
  )
}

export default App