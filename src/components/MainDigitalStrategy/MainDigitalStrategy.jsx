import React, {Component} from 'react';
import './MainDigitalStrategy.scss'
import ButtonOpacity from "../ButtonOpacity";
import strategyImg1 from './strategy-r1.png'

class MainDigitalStrategy extends Component {
  render() {
    return (
      <div className='digital-strategy'>
        <div className='row flexbox flex-column gap-small'>
          <p className='highlight title'>丰富的数字化实战资料</p>
          <p className='title'>专业引领企业成长</p>
        </div>
        <div className='row strategy-wrapper grid col-4 margin-top-medium'>
          <div className='strategy-carousel'></div>
          <div className='strategy-more flexbox flex-column flexbox-center gap-mini'>
            <p className='strategy-more-title text-center'>面向零代码开发者的免费干货资源</p>
            <p className='strategy-more-subtitle text-center'>120W+企业的信息化灵感从这里来</p>
            <ButtonOpacity className='highlight strategy-btn'>了解更多&nbsp;&rarr;</ButtonOpacity>
          </div>
          {
            Array(4).fill(0).map(_ => {
              return (
                <div key={Math.random()} className='strategy-item flexbox flexbox-center flex-column gap-small'>
                  <img src={strategyImg1} alt="#" className='strategy-img'/>
                  <p className='strategy-more-subtitle'>见到云产品介绍&nbsp;/&nbsp;PPT</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default MainDigitalStrategy;
