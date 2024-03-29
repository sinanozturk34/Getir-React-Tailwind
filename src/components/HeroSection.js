import Slider from "react-slick";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };
  return (
    <div
      className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent 
    before:absolute before:inset-0 before:w-full before:h-full before:z-10"
    >
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
          />
        </div>
      </Slider>

      <div className="container flex  justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br />
            kapında <br />
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
          <div className="flex">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={code => setSelected(code)}
              selected={selected}
              className="flag-select "
            />
            <label className="flex-1 relative block">
              <input className="h-11 px-3 ml-2 border-2 border-gray-200 rounded w-full transition-colors
               hover:border-primary-brand-color focus:border-primary-brand-color outline-none
               peer"/>
               {/* <span className="absolute top-0 left-0 h-full px-4 flex-items-center p-3
               text-sm text-gray-700 peer-focus:h-6 transition-all">Telefon Numarası</span> */}
            </label>
          </div>
          <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex-items-center justify-center rounded-md w-full font-semibold ">
            Telefon numarası ile devam et
          </button>
          <hr className="h-[1px] bg-gray-300 my-2"/>
          <button className="bg-blue-900 bg-opacity-10 text-blue-700 transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex-items-center justify-center rounded-md w-full font-semibold ">
            Facebook ile devam et
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
