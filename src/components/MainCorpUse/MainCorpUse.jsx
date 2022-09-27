import React, {Component} from 'react';
import './MainCorpUse.scss'

class MainCorpUse extends Component {
  state = {
    cropsInfo: [
      {imgSrc: 'First', desc: 'No1'},
      {imgSrc: 'Second', desc: 'No2'},
      {imgSrc: 'TempSrc', desc: '我哎我家'},
      {imgSrc: 'TempSrc', desc: '我哎我家'},
      {imgSrc: 'TempSrc', desc: '我哎我家'},
      {imgSrc: 'First', desc: 'No1'},
      {imgSrc: 'Second', desc: 'No2'},
    ]
  }

  renderItem = (cropInfo) => {
    return (
      <div className='crop-item text-center flexbox flex-column flex-space-between' key={Math.random()}>
        <figure>
          <div className='crop-logo'>{cropInfo.imgSrc}</div>
        </figure>
        <figcaption className='crop-description'>{cropInfo.desc}</figcaption>
      </div>
    )
  }

  renderCol = (cropsData) => {
    return (
      <div className='crop-col' key={Math.random()}>
        <div className='crop-item-container flexbox flex-column gap-small'>
          {cropsData.map(crop => this.renderItem(crop))}
        </div>
      </div>
    )
  }

  render() {
    const {cropsInfo} = this.state
    return (
      <div className='container corp-use' >
        <div className='title row'>
          超<span>1200000家</span>企业组织
          <br/>
          都在使用简道云
        </div>
        <div className='crop-container flexbox flexbox-center gap-small'>
          <div className='crop-wrapper flexbox gap-small'>
            {/*<div className='crop-col'>*/}
            {/*  <div className='crop-item-container flexbox flex-column gap-small'>*/}
            {/*    <div className='crop-item text-center flexbox flex-column flex-space-between test'>*/}
            {/*      <figure>*/}
            {/*        <div className='crop-logo'>first1</div>*/}
            {/*      </figure>*/}
            {/*      <figcaption className='crop-description'>first1</figcaption>*/}
            {/*    </div>*/}
            {/*    <div className='crop-item text-center flexbox flex-column flex-space-between'>*/}
            {/*      <figure>*/}
            {/*        <div className='crop-logo'>this is logo</div>*/}
            {/*      </figure>*/}
            {/*      <figcaption className='crop-description'>我爱我家</figcaption>*/}
            {/*    </div>*/}
            {/*    <div className='crop-item text-center flexbox flex-column flex-space-between'>*/}
            {/*      <figure>*/}
            {/*        <div className='crop-logo'>this is logo</div>*/}
            {/*      </figure>*/}
            {/*      <figcaption className='crop-description'>我爱我家</figcaption>*/}
            {/*    </div>*/}
            {/*    <div className='crop-item text-center flexbox flex-column flex-space-between'>*/}
            {/*      <figure>*/}
            {/*        <div className='crop-logo'>this is logo</div>*/}
            {/*      </figure>*/}
            {/*      <figcaption className='crop-description'>我爱我家</figcaption>*/}
            {/*    </div>*/}
            {/*    <div className='crop-item text-center flexbox flex-column flex-space-between'>*/}
            {/*      <figure>*/}
            {/*        <div className='crop-logo'>this is logo</div>*/}
            {/*      </figure>*/}
            {/*      <figcaption className='crop-description'>我爱我家</figcaption>*/}
            {/*    </div>*/}
            {/*    <div className='crop-item text-center flexbox flex-column flex-space-between test'>*/}
            {/*      <figure>*/}
            {/*        <div className='crop-logo'>last1</div>*/}
            {/*      </figure>*/}
            {/*      <figcaption className='crop-description'>last1</figcaption>*/}
            {/*    </div>*/}
            {/*    <div className='crop-item text-center flexbox flex-column flex-space-between test'>*/}
            {/*      <figure>*/}
            {/*        <div className='crop-logo'>last2</div>*/}
            {/*      </figure>*/}
            {/*      <figcaption className='crop-description'>lst2</figcaption>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className='crop-col'></div>*/}
            {/*<div className='crop-col'></div>*/}
            {
              Array(3).fill(0).map(_ => this.renderCol(cropsInfo))
            }
          </div>
          <div className='crop-wrapper flexbox gap-small'>
            {
              Array(3).fill(0).map(_ => this.renderCol(cropsInfo))
            }
          </div>
          <div className='crop-wrapper flexbox gap-small'>
            {
              Array(3).fill(0).map(_ => this.renderCol(cropsInfo))
            }
          </div>

        </div>
        <div className='crop-tips'>
          -&nbsp;以上排名不分先后&nbsp;-
        </div>
      </div>
    );
  }
}

export default MainCorpUse;
