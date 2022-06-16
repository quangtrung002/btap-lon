import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Applewatch() {
  const allitem = ["Tất cả", "Apple Watch Series 7","Apple Watch Series 6","Apple Watch SE","Apple Watch Series 3"];

  return (
    <>
      <PageItem
        heading="Apple Watch"
        pathImg="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/06/Banner-ThuBaoSuong-Moca.jpg"
        allitem={allitem}
        posts={data.watch}
      />
    </>
  );
}
