import React, {useEffect, useRef, useState} from 'react';
import './Carousel.scss'

function Carousel(props) {
  const timer = useRef(null);
  const intervalTime = 3000
  const lenOfCarouselItems = props.children.length
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => { // componentDidMount, componentWillUnmount
    timer.current = setInterval(() => {
      autoMove()
    }, intervalTime)
    return () => clearInterval(timer.current)
  }, [])

  const autoMove = () => { // 自动播放
    setActiveIndex((activeIndex) => {
      if (activeIndex === lenOfCarouselItems - 1) return 0
      else return activeIndex + 1
    })
  }

  const handleClick = (index, event) => { // 点击暂停播放，一段时间后重新播放
    event.preventDefault()
    clearInterval(timer.current)
    moveTo(index)
    timer.current = setInterval(() => {
      autoMove()
    }, intervalTime)
  }

  const moveTo = (targetIndex) => setActiveIndex(() => targetIndex)

  const renderCarouselBtn = () => {
    return Array(lenOfCarouselItems).fill(0).map((_, index) => {
      return (
        <button
          className={`${index === activeIndex ? 'carousel-btn carousel-btn-active' : 'carousel-btn'}`}
          key={index}
          onClick={(event) => handleClick(index, event)}
        >
          {index + 1}
        </button>
      )
    })
  }

  return (
    <div className='carousel-container'>
      <div
        className='carousel-inner flexbox'
        style={{transform: `translateX(-${activeIndex * 100}%`}}
      >
        {props.children}
      </div>
      <div
        className='carousel-btn-container flexbox flexbox-center gap-mini'
      >
        {renderCarouselBtn()}
      </div>
    </div>
  )

}

export default Carousel;
