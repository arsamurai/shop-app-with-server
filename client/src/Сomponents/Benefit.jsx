import React from "react";
import Button from "./Button";
import benefitBg from "../assets/img/benefit-preview.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar, A11y } from "swiper";

// import Swiper core and required modules
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// Import Swiper styles
import "swiper/swiper.scss";

SwiperCore.use([Pagination, Scrollbar, A11y]);

function Benefit({ onChangeCategory }) {
  const handleChangeCategoryOnDiscount = () => {
    onChangeCategory(4);
  };

  const handleChangeCategoryOnManClothes = () => {
    onChangeCategory(1);
  };

  const handleChangeCategoryOnWomanClothes = () => {
    onChangeCategory(2);
  };

  return (
    <div className="benefit__wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>
          <div className="benefit" style={{
                backgroundImage: `url(${benefitBg}`,
              }}>
            <div
              className="benefit__inner"
            >
              <div className="benefit-main">
                <h2 className="benefit-title">
                  Fashion <span className="secondWord">Clothes</span>
                </h2>
                <p className="benefit-text">
                  Только у нас вы найдёте что-то полезное!
                </p>
                <Button
                  onClick={handleChangeCategoryOnDiscount}
                  className="button--add benefit-btn"
                  outline
                >
                  Ко скидкам!
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="benefit" style={{
                backgroundImage: `url(${benefitBg}`,
              }}>
            <div
              className="benefit__inner"
            >
              <div className="benefit-main">
                <h2 className="benefit-title">
                  Nikolay <span className="secondWord">Pidor</span>
                </h2>
                <p className="benefit-text">
                  Только у нас вы найдёте что-то полезное!
                </p>
                <Button
                  onClick={handleChangeCategoryOnManClothes}
                  className="button--add benefit-btn"
                  outline
                >
                  Мужское бельё...
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="benefit" style={{
                backgroundImage: `url(${benefitBg}`,
              }}>
            <div
              className="benefit__inner"
            >
              <div className="benefit-main">
                <h2 className="benefit-title">
                  Artur4ik <span className="secondWord">Profi</span>
                </h2>
                <p className="benefit-text">
                  Только у нас вы найдёте что-то полезное!
                </p>
                <Button
                  onClick={handleChangeCategoryOnWomanClothes}
                  className="button--add benefit-btn"
                  outline
                >
                  Женское бельё...
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Benefit;
