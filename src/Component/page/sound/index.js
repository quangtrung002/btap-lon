import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Sound() {
  const allitem = ["Tất cả", 'AirPods', 'EarPods', 'Beats', 'Harman Kardon', 'JBL', 'Google']
  
  return (
    <>
      <PageItem  
        heading = "Âm Thanh"
        pathImg = "https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/04/JBL-banner_Banner-PC-copy-1.jpg"
        allitem={allitem}
        posts = {data.airpods}
        type = 'not'
      />
    </>
  )
}
