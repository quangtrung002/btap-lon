import React from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Applewatch() {
  const allitem = ["Tất cả", "Apple Watch Series 7","Apple Watch Series 6","Apple Watch SE","Apple Watch Series 3"];

  return (
    <>
      <PageItem
        heading="Apple Watch"
        pathImg="https://shopdunk.com/wp-content/uploads/2022/05/ip13green_Banner-PC.jpg"
        allitem={allitem}
        posts={data.watch}
      />
    </>
  );
}
