import React, {  useState } from 'react'

import { getLoacalStorage, setLoacalStorage } from './Utils/LocalStorage'
import Login from './Pages/Login'
import AdminDashBoard from './Components/Auth/DashBoard/AdminDashBoard'
import EmployDashBoard from './Components/Auth/DashBoard/EmployDashBoard'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email,password) =>{
    if(email == 'princechouhan9939@gmail.com' && password =='PRINCE@18') {
      setUser('admin')

    }else if( email ='emp@gmail.com' && password == '123') {
      setUser('employee')
    }
    else{
      alert('invalid Credentials')
    }
  }

  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user === 'admin' &&  <AdminDashBoard/> }
      {user === 'employee' && <EmployDashBoard/>}
    </>
  )
}

export default App
