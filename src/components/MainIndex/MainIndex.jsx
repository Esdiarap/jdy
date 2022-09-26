import React, {Component} from 'react';
import './MainIndex.scss'
import ButtonPrimary from "../ButtonPrimary";
import ButtonOpacity from "../ButtonOpacity";

class MainIndex extends Component {
  render() {
    return (
      <div className='index-wrapper'>
        <div className='index-bg-wrapper'>

        </div>
        <div className='index-container flexbox flexbox-center'>
          <div className='row flexbox flex-column index-text-container'>
            <h2>假标题，实际上这里是一张图片</h2>
            <h3>5分钟创建一个<span className='highlight'>设备管理应用</span></h3>
            <div className='flexbox  gap-small'>
              <ButtonPrimary>免费试用&nbsp;&rarr;</ButtonPrimary>
              <a href="#" className='introduce'>产品介绍视频</a>
            </div>
          </div>
        </div>
        <div className='index-bottom flexbox flexbox-center margin-auto'>
          <div className='entrance-wrapper flexbox flexbox-center flex-column flex-align-flex-start gap-mini'>
            <p className='entrance-title'>简道云协同性SRM</p>
            <p className='entrance-subtitle'>打破采供协作壁垒，实现供应链全流程闭环管理</p>
            <ButtonOpacity>了解更多&nbsp;&rarr;</ButtonOpacity>
          </div>
          <div className='entrance-wrapper'></div>
          <div className='entrance-wrapper'></div>
        </div>
      </div>
    );
  }
}

export default MainIndex;
