
import './App.css'
import AdminLogin from './Component/Adminlogin/Adminlogin'
import Home from './Component/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Adminreg from './Component/Adminreg/Adminreg'
import Adminhome from './Component/Adminhome/Adminhome'
import reg_staff_admin from './Component/Staff-reg-admin/reg_staff_admin'
import Adminstaffview from './Component/Adminstaffview/Adminstaffview'
import Adminstaffallview from './Component/Adminstaffallview/Adminstaffallview'
import Editstaffdetails from './Component/Editstaffdetails/Editstaffdetails'
function App() {


  return (
    <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/adminlogin' Component={AdminLogin}/>
      <Route path='/adminreg' Component={Adminreg}/>
      <Route path='/adminhome' Component={Adminhome}/>
      <Route path='/staffregadmin' Component={reg_staff_admin}/>
      <Route path='/adminstaffreg' Component={Adminstaffview}/>
      <Route  path="/adminstaffallview/:id" Component={Adminstaffallview} />
      <Route  path="/adminstaffedit/:id" Component={Editstaffdetails} />
    </Routes>
    
    
    </BrowserRouter>
        </>
  )
}

export default App
