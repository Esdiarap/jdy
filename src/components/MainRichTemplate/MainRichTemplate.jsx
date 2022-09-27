import React, {Component} from 'react';
import './MainRichTemplate.scss'
import ButtonOpacity from "../ButtonOpacity";
class MainRichTemplate extends Component {
  render() {
    const arr8 = Array(8).fill(0)
    const arr6 = Array(6).fill(0)
    const arr2 = Array(2).fill(0)

    return (
      <div className='rich-template margin-auto'>
        <div className='row title'>告别漫长的开发周期，丰富模板<span className='highlight'>开箱即用</span></div>
        <div className='row template-wrapper flexbox gap-small margin-top-medium'>
          <div className='template-left'>
            <p className='template-title'>通用业务模板</p>
            <div className='grid col-2 gap-small'>
              {
                arr8.map(_ => (
                  <div key={Math.random()}>
                    <a className='template-item flexbox gap-mini'>
                      <img src={[require('./templateImg.png')]} alt="#"/>
                      <div className='flexbox flex-column template-text'>
                        <p className='template-text-title'>SRM</p>
                        <p className='template-text-subtitle'>采购&nbsp;/&nbsp;供应商协同管理</p>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='template-right flexbox flex-column'>
            <div className='template-right-top margin-bottom-small'>
              <p className='template-title'>行业前沿场景</p>
              <div className='grid col-3 gap-small'>
                {
                  arr6.map(_ => (
                    <div key={Math.random()}>
                      <a className='template-item flexbox gap-mini'>
                        <img src={[require('./templateImg.png')]} alt="#"/>
                        <div className='flexbox flex-column template-text'>
                          <p className='template-text-title'>SRM</p>
                          <p className='template-text-subtitle'>采购&nbsp;/&nbsp;供应商协同管理</p>
                        </div>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='template-right-bottom flexbox gap-small'>
              <div className='template-right-bottom-left'>
                <p className='template-title'>热门专题应用</p>
                <div className='flexbox gap-small'>
                  {
                    arr2.map(_ => (
                      <div key={Math.random()}>
                        <a className='template-item flexbox gap-mini'>
                          <img src={[require('./templateImg.png')]} alt="#"/>
                          <div className='flexbox flex-column template-text'>
                            <p className='template-text-title'>SRM</p>
                            <p className='template-text-subtitle'>采购&nbsp;/&nbsp;供应商协同管理</p>
                          </div>
                        </a>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className='template-right-bottom-right flexbox flexbox-center'>
                <ButtonOpacity>了解更多&nbsp;&rarr;</ButtonOpacity>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainRichTemplate;
