import React, {Component} from 'react';
import './MainCorpUse.scss'

class MainCorpUse extends Component {

  render() {
    return (
      <div className='container corp-use' >
        <div className='title row'>
          超<span>1200000家</span>企业组织
          <br/>
          都在使用简道云
        </div>
        <div className='crop-container flexbox flexbox-center gap-small'>
          <div className='crop-wrapper flexbox gap-small'>
            <div className='crop-col flexbox flex-column gap-small'>
              <div className='crop-item text-center flexbox flex-column flex-space-between'>
                <figure>
                  <div className='crop-logo'>this is logo</div>
                </figure>
                <figcaption className='crop-description'>我爱我家</figcaption>
              </div>
              <div className='crop-item text-center flexbox flex-column flex-space-between'>
                <figure>
                  <div className='crop-logo'>this is logo</div>
                </figure>
                <figcaption className='crop-description'>我爱我家</figcaption>
              </div>
              <div className='crop-item text-center flexbox flex-column flex-space-between'>
                <figure>
                  <div className='crop-logo'>this is logo</div>
                </figure>
                <figcaption className='crop-description'>我爱我家</figcaption>
              </div>
              <div className='crop-item text-center flexbox flex-column flex-space-between'>
                <figure>
                  <div className='crop-logo'>this is logo</div>
                </figure>
                <figcaption className='crop-description'>我爱我家</figcaption>
              </div>
              <div className='crop-item text-center flexbox flex-column flex-space-between'>
                <figure>
                  <div className='crop-logo'>this is logo</div>
                </figure>
                <figcaption className='crop-description'>我爱我家</figcaption>
              </div>
              <div className='crop-item text-center flexbox flex-column flex-space-between'>
                <figure>
                  <div className='crop-logo'>this is logo</div>
                </figure>
                <figcaption className='crop-description'>我爱我家</figcaption>
              </div>
            </div>
            <div className='crop-col'></div>
            <div className='crop-col'></div>
          </div>
          <div className='crop-wrapper flexbox gap-small'>
            <div className='crop-col'></div>
            <div className='crop-col'></div>
            <div className='crop-col'></div>
          </div>
          <div className='crop-wrapper flexbox gap-small'>
            <div className='crop-col'></div>
            <div className='crop-col'></div>
            <div className='crop-col'></div>
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
