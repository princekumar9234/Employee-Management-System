import React from 'react'
import EmployHeader from '../Others/EmployHeader'
import EmpTaskList from '../Others/EmpTaskList'
import EmpTask from '../Others/EmpTask'

const EmployPanel = ({data}) => {
  console.log(data)
  return (
    <div className='p-5 bg-[#1C1C1C] lg:h-screen'>
      <EmployHeader/>
      <EmpTaskList/>
      <EmpTask/>
    </div>
  )
}

export default EmployPanel
