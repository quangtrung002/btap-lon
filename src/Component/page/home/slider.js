import React, { memo, useCallback, useEffect, useState } from 'react'
import { slider } from '../../../data'
import clsx from 'clsx'
import style from "./home.module.scss"

function Slider() {
  const [slide, setSlide] = useState(1)
  const nextSlide = useCallback(() => {
    if (slide !== slider.length) {
      setSlide(prevState => prevState + 1)
    } else if (slide === slider.length) setSlide(1)
  }, [slide])

  const prevSlide = useCallback(() => {
    if (slide !== 1) {
      setSlide(prevState => prevState - 1)
    } else if (slide === 1) setSlide(slider.length)
  }, [slide])

  useEffect(() => {
    const handleSider = setInterval(() => {
      console.log(slide)
      nextSlide()
    }, 3000)
    return () => clearInterval(handleSider)
  }, [])

  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        {slider.map((item, index) => (
          slide === item.id ? <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} class="active" aria-current="true" aria-label={`Slide ${item.id}`} onClick={() => setSlide(item.id)} className={clsx(style.dotSlider, { [style.dotActive]: slide === item.id })} key={item.id}></button>
            : <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`Slide ${item.id}`} onClick={() => setSlide(item.id)} className={clsx(style.dotSlider, { [style.dotActive]: slide === item.id })} key={item.id}></button>
        ))}
      </div>
      <div className={clsx(style.slider, "carousel-inner")}>
        {slider.map(item => (
          <div className={clsx("carousel-item", { active: slide === item.id })} key={item.id}>
            <img src={item.image} class="d-block w-100" alt="ảnh lỗi" />
          </div>
        ))}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={prevSlide}>
        <i className={clsx(style.btnSlide, "bi bi-chevron-left carousel-control-prev-icon")}></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={nextSlide}>
        <i className={clsx(style.btnSlide, "bi bi-chevron-right carousel-control-next-icon")}></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default memo(Slider)
