import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Iphone() {
  const allitem = ["Tất cả", 'iPhone 13', 'iPhone 12','iPhone 11','iPhone SE']
  
  return (
    <>
      <PageItem  
        heading = "iPhone"
        pathImg = "https://shopdunk.com/wp-content/uploads/2022/05/ip13green_Banner-PC.jpg"
        allitem={allitem}
        posts = {data.iphone}
        imgCardsm = "https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/elementor/thumbs/Image-Standard-poarz4misqzg6twg7xszvw3tdbaevlod3cps91fz72.png"
        namecardsm="iPhone"
        imgCardsm2="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/elementor/thumbs/Image-Standard-1-poarynpfdqcadul0yqhpn0diodlt11t710z1m252b2.png"
      />
    </>
  )
}
