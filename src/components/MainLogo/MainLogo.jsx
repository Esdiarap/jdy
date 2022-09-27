import React, {Component} from 'react';
import './MainLogo.scss'
import url5 from './rolling-logo-5.png'
import url10 from './rolling-logo-10.png'
class MainLogo extends Component {
  state = {
    imgSrcArr: [url5, url10]
  }
  renderLogoItem = (imgSrcArr) => {
    return imgSrcArr.map(src => {
      return (
        <div className='logo-item' key={Math.random()}><img src={src} alt="#"/></div>
      )
    })
  }
  render() {
    const {imgSrcArr} = this.state
    return (
      <div className='logo-wrapper'>
        <div className='logo-title text-center'>
          - 7 年服务沉淀，120W + 企业组织的选择 -
        </div>
        <div className='logo-rolling'>
          <div className='logo-item-container flexbox flexbox-center overflow-hidden gap-medium'>
            {
              Array(12).fill(0).map(_ => this.renderLogoItem(imgSrcArr))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default MainLogo;
