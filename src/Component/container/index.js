import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { data } from '../../data'
import ItemDescription from '../itemDescription'
import publicRoutes from '../routes'

export default function Container() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component
        return <Route key={index} path={route.path} element={<Page />}></Route>
      })}
      {data.iphone.map((item, index) => (
        <Route key={index} path={`/iphone/${item.id}`} element={<ItemDescription item={item} heading="iphone" />}></Route>
      ))}
      {data.ipad.map((item, index) => (
        <Route key={index} path={`/ipad/${item.id}`} element={<ItemDescription item={item} heading="ipad" />}></Route>
      ))}
    </Routes>
  )
}
