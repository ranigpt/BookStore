import { useState } from 'react'
import Allcompo  from "./home/Allcompo"
import {createBrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Course1 from './Courses/Course1'
import Signup from './componants/Signup'
import toast, { Toaster } from 'react-hot-toast';
import {useAuth} from './context/Authprovider'



function App() {
  const [authUser , setAuthUser]=useAuth();
  console.log(authUser);

  return (
    <>

<Routes>
  <Route path="/" element={<Allcompo/>}>
    
  </Route>

  <Route path="/course" element={authUser?<Course1/>:<Navigate to='/register'/>}>
  </Route>
  <Route path="/register" element={<Signup/>}>
    
    
  </Route>
</Routes>
<Toaster />
      
     
    </>
  )
}

export default App
