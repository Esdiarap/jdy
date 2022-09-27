import React, {Component} from 'react';
import './MainAdvancedProductivity.scss'
import productivity from './productivity.jpg'
import gif from './func-gif0.gif'
import ButtonPrimary from "../ButtonPrimary";

class MainAdvancedProductivity extends Component {
  state = {
    productFunction: [
      {imgSrc: productivity, desc: '拖拉拽表单'},
      {imgSrc: productivity, desc: '拖拉拽表单'},
      {imgSrc: productivity, desc: '拖拉拽表单'},
      {imgSrc: productivity, desc: '拖拉拽表单'},
      {imgSrc: productivity, desc: '拖拉拽表单'},
      {imgSrc: productivity, desc: '拖拉拽表单'},
    ],
    selectIndex: 0
  }

  renderSelectItem = (selectItemInfo, index) => {
    const {selectIndex} = this.state
    // return selectItemInfo.map((item, index) => (
    //   <li className='productivity-select-item flexbox flex-column flexbox-center gap-mini' key={Math.random()}>
    //     <img src={selectItemInfo.imgSrc} alt="#" className='productivity-image'/>
    //     <p className='productivity-top-title active-select-item-font margin-bottom-small'>{selectItemInfo.desc}</p>
    //     {index === selectIndex ? <i className='active-select-item'></i> : null }
    //   </li>
    // ))
    return (
      <li className='productivity-select-item flexbox flex-column flexbox-center gap-mini' key={Math.random()}>
        <img src={selectItemInfo.imgSrc} alt="#" className='productivity-image'/>
        <p className='productivity-top-title active-select-item-font margin-bottom-small'>{selectItemInfo.desc}</p>
        {index === selectIndex ? <i className='active-select-item'></i> : null }
      </li>
    )
  }
  render() {
    const {productFunction} = this.state
    return (
      <div className='advanced-productivity'>
        <div className='row title'>两周一次功能更新，解锁<span className='highlight'>更先进的生产力</span> </div>
        <ul className='productivity-select-bar flexbox flexbox-center margin-top-medium row'>
          {
            productFunction.map((selectItemInfo, index) => this.renderSelectItem(selectItemInfo, index))
          }
        </ul>
        <div className='productivity-display-bg'>
          <div className='row productivity-display-container flexbox'>
            <div className='productivity-display-left flexbox flex-column gap-small'>
              <p className='productivity-down-title'>在线表单</p>
              <p className='productivity-down-desc'>拖拉拽设计表单，适合各种行业&nbsp;/&nbsp;场景的数据提交、收集神器。</p>
              <ButtonPrimary>查看详情&nbsp;&rarr;</ButtonPrimary>
            </div>
            <div className='productivity-display-right flexbox'>
              <img src={gif} alt="#" className='productivity-gif'/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default MainAdvancedProductivity;
