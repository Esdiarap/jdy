import React, {Component} from 'react';
import './MainFootBanner.scss'
import ButtonPrimary from '../ButtonPrimary'
class MainFootBanner extends Component {
  render() {
    return (
      <div className='container foot-banner'>
        <div className='flexbox flexbox-center text-center flex-column'>
          <div className='foot-banner-title title'>准备好迎接企业零代码数字化转型了吗？</div>
          <div className='foot-banner-subtitle'>无论中小企业还是大型组织，见到云都有适合您的数字化转型方案</div>
          <ButtonPrimary className='foot-banner-try block'>立即开始&nbsp;&rarr;</ButtonPrimary>
          <div className='foot-banner-tips'>*&nbsp;现在注册即可领取外部互联、数据工厂、智能助手等高级功能15天免费使用</div>
        </div>
      </div>
    );
  }
}

export default MainFootBanner;
