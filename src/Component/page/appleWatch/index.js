import React, { useState } from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Applewatch() {
  const allitem = [
    "Tất cả",
    "Apple Watch Series 7",
    "Apple Watch Series 6",
    "Apple Watch SE",
    "Apple Watch Series 3",
  ];
  const [appleWatch, setApplewatch] = useState(data.watch);
  const cloneApplewatch = data.watch;
  return (
    <>
      <PageItem
        heading="Apple Watch"
        pathImg="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/06/Banner-ThuBaoSuong-Moca.jpg"
        allitem={allitem}
        posts={appleWatch}
        clonePosts={cloneApplewatch}
        setPosts={setApplewatch}
        namecardsm="Apple Watch"
        imgCardsm="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/elementor/thumbs/Image-Standard-6-poaryzxbukt0ks39zdrv1faiedxkt45pepgcunmy26.png"
        imgCardsm2="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/elementor/thumbs/Image-Standard-7-poarz1t088vl800joel46etfl5ob8id62yrbt7k5pq.png"
      />
    </>
  );
}
