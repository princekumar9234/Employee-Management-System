import React from 'react'
import EmployHeader from '../Others/EmployHeader'
import EmpTaskList from '../Others/EmpTaskList'

const EmployPanel = () => {
  return (
    <div className='p-5 bg-[#1C1C1C] h-screen'>
      <EmployHeader/>
      <EmpTaskList/>
    </div>
  )
}

export default EmployPanel
