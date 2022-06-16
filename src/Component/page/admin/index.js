import React from 'react'

import Login from './login'
import Content from './content'

function Admin() {
  return (
    <div className='my-4 bg-white-50'>
      <Content/>
      <Login />
    </div>
  )
}

export default Admin
