"use client";

import BannerHeader from "@/modules/common/components/banner-header";
import TaiLieuMoi from "../components/tai-lieu-moi";
import BoSuuTapMoi from "../components/bo-suu-tap-moi";
import Box from "@/modules/common/components/box";
const Index = () => {
  const carouselItem: any = [
    { Image: "images/slider0.jpg" },
    // {Image: "images/slider1.jpg"},
    // {Image: "images/slider2.jpg"},
    // {Image: "images/slider3.jpg"}
  ];

  return (
    <div className="">
      <div className="row">
        <div className="col-sm-12">
          <BannerHeader items={carouselItem} />
          <div className="container-collection">
            <Box className="collection">
              <BoSuuTapMoi />
            </Box>
            <div className="hr-collection" />
            <div className="wrapper-talieu">
              <TaiLieuMoi />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
