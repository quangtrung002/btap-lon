import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Sound() {
  const allitem = ["Tất cả", 'AirPods', 'EarPods', 'Beats', 'Harman Kardon', 'JBL', 'Google']
  
  return (
    <>
      <PageItem  
        heading = "Âm Thanh"
        pathImg = "https://shopdunk.com/wp-content/uploads/2022/05/ip13green_Banner-PC.jpg"
        allitem={allitem}
        posts = {data.airpods}
      />
    </>
  )
}
