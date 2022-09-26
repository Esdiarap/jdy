import React, {Component} from 'react';
import './MainBusinessGrowth.scss'
import ButtonOpacity from "../ButtonOpacity";
class MainBusinessGrowth extends Component {
  render() {
    return (
      <div className='container business-growth'>
        <div className="row title">
          搭上零代码数字化快车
          <br/>
          业务增长<span className='highlight'>尽在掌握</span>
        </div>
        <div className='business-growth-container grid col-3'>
          <div className='business-growth-item-container'>
            <a href="#" className='business-growth-item flexbox flex-column gap-small'>
              <div className='business-growth-title'>
                <p>搭建全程</p>
                <span className='highlight block margin-top-small'><span className='big-fontsize'>0</span>代码</span>
              </div>
              <p className='business-growth-description'>
                  仅凭拖拉拽，任意组合字段生成表单，简单连线即可设计业务流程。
              </p>
              <ButtonOpacity>了解更多&nbsp;&rarr;</ButtonOpacity>
            </a>
          </div>
          <div className='business-growth-item-container'>
            <a href="#" className='business-growth-item block'>
              Click here
            </a>
          </div>
          <div className='business-growth-item-container'>
            <a href="#" className='business-growth-item block'>
              Click here
            </a>
          </div>
          <div className='business-growth-item-container'>
            <a href="#" className='business-growth-item block'>
              Click here
            </a>
          </div>
          <div className='business-growth-item-container'>
            <a href="#" className='business-growth-item block'>
              Click here
            </a>
          </div>
          <div className='business-growth-item-container'>
            <a href="#" className='business-growth-item block'>
              Click here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBusinessGrowth;
