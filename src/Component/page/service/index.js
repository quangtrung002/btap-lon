import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Service() {
  const allitem = []
  
  return (
    <>
      <PageItem  
        heading = "Dịch vụ"
        pathImg = "https://shopdunk.com/wp-content/uploads/2022/05/ip13green_Banner-PC.jpg"
        allitem={allitem}
        posts = {data.service}
      />
    </>
  )
}