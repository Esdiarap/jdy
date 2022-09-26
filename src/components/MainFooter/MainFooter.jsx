import React, {Component} from 'react';
import './MainFooter.scss'

class MainFooter extends Component {
  state = {
    lists: {
      productFeatures: ['产品功能', '在线表单', '业务流程', '仪表盘', '知识库', '知识库', '控制中心', '特色能力', '数据分析'],
      solutions: ['解决方案', '协同型SRM', '设备管理', '专精特新', '轻量化ERP', '工程项目管理'],
      informationCenter: ['资料中心', '白皮书&文章', '帮助中心', '学习路径', '视频课程', '论坛交流'],
      learnAboutUs: ['了解我们', '零代码', '七周年', '全民开发', '行业案例', '产品定价', '更新日志', '网络监测'],
      contactUs: ['联系我们', '市场合作: marketing@jiandaoyun.com', '服务热线: 400-111-0890 (工作日L 09:00-12:00, 13:30-17.30)', '总裁办24H投诉电话: 133 7361 3297', '投诉邮箱: tousu@jiandaoyun.com (你对我们的产品，服务有任何不满均可投诉)']
    }
  }

  renderLinkList = (dataArr) => {
    return (
      <li className='link-list' key={Math.random()}>
        <h4>{dataArr[0]}</h4>
        <ul className='fold-block'>
          {
            this.renderAnchor(dataArr.slice(1))
          }
        </ul>
      </li>
    )
  }

  renderAnchor = (dataArr) => {
    return dataArr.map(name => {
      return (
        <li className='fold-inner' key={Math.random()}><a href="#">{name}</a></li>
      )
    })
  }

  render() {
    const {lists} = this.state
    return (
      <div className="container footer">
        <div className='row'>
          <ul className='flexbox'>
            {
              Object.keys(lists).map(key => key !== 'contactUs' && this.renderLinkList(lists[key]))
            }
            <li className='contactUs'>
              <h4>联系我们</h4>
              <ul className='fold-block'>
                {
                  this.renderAnchor(lists['contactUs'])
                }
              </ul>
              <div className='qr-code'>
                <div className='qr-code-wrapper'>
                  <div className='qr-code-block'>1</div>
                  <div className='qr-code-block'>2</div>
                </div>
                <div className='channel-wrapper'>
                  <div className='official-channel'>3</div>
                  <div className='official-channel'>3</div>
                  <div className='official-channel'>3</div>
                  <div className='official-channel'>3</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='container copyright flexbox flexbox-center'>
          <div className='copyright-left'>
            <img src="#" alt="#"/>
            <a href="#">Hey man</a>
          </div>
          &nbsp;
          <div className='copyright-right'>hey another man aaaaaaaaaaaaaaaa</div>
        </div>
      </div>
    );
  }
}

export default MainFooter;
