import React from 'react'

import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Ipad() {
  const allitem = ["tat ca", '3', '4']
  return (
    <>
      <PageItem  
        heading = "ipad"
        pathImg = "src"
        allitem={allitem}
        posts = {data.ipad}
      />
    </>
  )
}
