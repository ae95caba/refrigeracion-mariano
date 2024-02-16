import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from "react"
import Slider from "react-slick"

export default function SimpleSlider({
  children,
  speed,
  autoplaySpeed,
  slidesToShow,
  fade,
}) {
  var settings = {
    fade: false,
    dots: true,
    infinite: true,
    speed: speed,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{children}</Slider>
}
