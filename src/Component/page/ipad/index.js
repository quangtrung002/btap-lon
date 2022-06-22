import React, { useState } from "react";

import PageItem from "../pageItem/pageItem";
import { data } from "../../../data";

export default function Ipad() {
  const allitem = ["Tất cả", "iPad Pro", "iPad Air", "iPad 9", "iPad Mini"];
  const [ipad, setIpad] = useState(data.ipad);
  const cloneIpad = data.ipad;

  return (
    <>
      <PageItem
        heading="ipad"
        pathImg="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/2022/06/Danh-muc-PC-3-1.jpg"
        allitem={allitem}
        posts={ipad}
        clonePosts={cloneIpad}
        setPosts={setIpad}
        namecardsm="iPad"
        imgCardsm="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/elementor/thumbs/Image-Standard-2-poaryqixy8g5cogxi9plchnwgj7wo54e1exi1w0vse.png"
        imgCardsm2="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-991ea96/wp-content/uploads/elementor/thumbs/Image-Standard-3-poarysembwipzwe77aiuhh6tnayn3jbupo8h0fy3fy.png"
      />
    </>
  );
}
