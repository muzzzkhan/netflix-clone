import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import { AuthContextProvider } from "./context/AuthContext"
import Home from './pages/Home'
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Account from "./pages/Account"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <>
      {/* Because we will do conditional render of navbar if the user is logged in or logged out */}
      <AuthContextProvider>
        <Navbar/>
        <Routes> {/*Ctrl+Spacebar to auto import a component*/}
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App