import React from 'react'
import { Route, Routes } from 'react-router-dom'
import publicRoutes from '../routes'

export default function Container() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component
        return <Route key={index} path={route.path} element={<Page />}></Route>
      })}
    </Routes>
  )
}
