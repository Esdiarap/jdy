import React, {Component} from 'react';
import './MainPersonalPerform.scss'
import ButtonPrimary from "../ButtonPrimary";
import ButtonOpacity from "../ButtonOpacity";
class MainPersonalPerform extends Component {
  state = {
    cards: [
      {
        title: '业务人员',
        subtitle: '让想法落地',
        lis: ['告别漫长IT排期', '编码小白也会用', '应用更适应实际需求', '实时跟踪业务增长成果'],
      },
      {
        title: '业务人员',
        subtitle: '让想法落地',
        lis: ['告别漫长IT排期', '编码小白也会用', '应用更适应实际需求', '实时跟踪业务增长成果']
      },
      {
        title: '业务人员',
        subtitle: '让想法落地',
        lis: ['告别漫长IT排期', '编码小白也会用', '应用更适应实际需求', '实时跟踪业务增长成果']
      },
    ]
  }
  renderLi = (li) => {
    return (
      <li className='card-li' key={Math.random()}>
        <span>✅</span>&nbsp;{li}
      </li>
    )
  }
  renderCard = (card) => {
    return (
      <div className='perform-card' key={Math.random()}>
        <div className='card-title-container flexbox flex-column margin-bottom-small gap-mini'>
          <p className='card-title'>{card.title}</p>
          <p className='card-subtitle'>{card.subtitle}</p>
        </div>
        <ul className='card-ul'>
          {
            card.lis.map(li => this.renderLi(li))
          }
        </ul>
        <ButtonOpacity className='perform-hidden-btn'>免费试用&nbsp;&rarr;</ButtonOpacity>
      </div>
    )
  }
  render() {
    const {cards} = this.state
    return (
      <div className='personal-perform'>
        <div className='row flexbox flex-column'>
          <p className='title'>无论管理层、信息部还是一线业务人员</p>
          <p className='title'>见到云零代码<span className='highlight'>都能有出色表现</span> </p>
        </div>
        <div className='personal-perform-card-container grid col-3 row'>
          {/*<div className='perform-card'>*/}
          {/*  <div className='card-title-container flexbox flex-column margin-bottom-small gap-mini'>*/}
          {/*    <p className='card-title'>业务人员</p>*/}
          {/*    <p className='card-subtitle'>让想法落地</p>*/}
          {/*  </div>*/}
          {/*  <ul className='card-ul'>*/}
          {/*    <li className='card-li'>*/}
          {/*      <span>✅</span>&nbsp;告别漫长IT排期*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*  <ButtonOpacity className='perform-hidden-btn'>免费试用&nbsp;&rarr;</ButtonOpacity>*/}
          {/*</div>*/}
          {
            cards.map(card => {
              return this.renderCard(card)
            })
          }
        </div>
        <ButtonPrimary className='block margin-auto'>免费试用&nbsp;&rarr;</ButtonPrimary>
      </div>
    );
  }
}

export default MainPersonalPerform;
