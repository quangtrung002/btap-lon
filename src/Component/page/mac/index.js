import React, { useState } from "react";
import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Mac() {
  const allitem = [
    "Tất cả",
    "MacBook Pro",
    "MacBook Air",
    "iMac",
    "Mac mini",
    "Hàng sắp về",
  ];
  const [mac, setMac] = useState(data.mac);
  const cloneMac = data.mac;
  return (
    <>
      <PageItem
        heading="Mac"
        pathImg="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/06/Banner-ThuBaoSuong-Moca.jpg"
        allitem={allitem}
        posts={mac}
        clonePosts = {cloneMac}
        setPosts = {setMac}
        namecardsm="Mac"
        imgCardsm="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/elementor/thumbs/Image-Standard-4-poaryv84wemkyqa3qtqq6yh7fgkqqmn1q26xg9twxa.png"
        imgCardsm2="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/elementor/thumbs/Image-Standard-5-poaryy1ngwqfxk60acylwfrl7m6udpy8qg5dw3pqem.png"
      />
    </>
  );
}
