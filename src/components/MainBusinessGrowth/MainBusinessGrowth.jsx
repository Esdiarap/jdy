import React, {Component} from 'react';
import './MainBusinessGrowth.scss'
import ButtonOpacity from "../ButtonOpacity";

class MainBusinessGrowth extends Component {
  state = {
    code: 1000, // -> 0
    day: 60, // -> 5
    save: 1, // -> 20
    match: 0, // -> 99
    diedai: 30, // -> 1
    speedUp: 0, // -> 80
    growData: {
      code: {
        value: 1000,
        title: '搭建全程',
        subtitle: '仅凭拖拉拽，任意组合字段生成表单，简单连线即可设计业务流程。',
        unit: '代码'
      },
      day: {
        value: 60,
        title: '搭建全程',
        subtitle: '仅凭拖拉拽，任意组合字段生成表单，简单连线即可设计业务流程。'
      },
      save: {
        value: 1,
        title: '搭建全程',
        subtitle: '仅凭拖拉拽，任意组合字段生成表单，简单连线即可设计业务流程。'
      },
      match: {
        value: 0,
        title: '搭建全程',
        subtitle: '仅凭拖拉拽，任意组合字段生成表单，简单连线即可设计业务流程。'
      },
      diedai: {
        value: 30,
        title: '搭建全程',
        subtitle: '仅凭拖拉拽，任意组合字段生成表单，简单连线即可设计业务流程。'
      },
      speedUp: {
        value: 0,
        title: '搭建全程',
        subtitle: '仅凭拖拉拽，任意组合字段生成表单，简单连线即可设计业务流程。'
      },
    }
  }
  renderBusinessGrowthItem = () => {
    const {growData} = this.state
    const resArr = []
    Object.keys(growData).forEach(key => {
      resArr.push((
        <div className='business-growth-item-container' key={Math.random()}>
          <h1>{this.state[key]}</h1>
          <a href="#" className='business-growth-item flexbox flex-column gap-mini'>
            <div className='business-growth-title'>
              <p>{growData[key].title}</p>
              <span className='highlight block margin-top-small'><span className='big-fontsize'>{this.state[key]}</span>{growData[key].unit}</span>
            </div>
            <p className='business-growth-description margin-bottom-small'>
              {growData[key].subtitle}
            </p>
            <ButtonOpacity className='align-flex-start business-growth-btn'>了解更多&nbsp;&rarr;</ButtonOpacity>
          </a>
        </div>
      ))
    })
    return resArr
  }

  componentDidMount() {
    const animate = (name, originState, increment = true, step, destination, time = 1000 / 60) => {
      const afterState = increment ? originState + step : originState - step
      if (increment) {
        if (afterState >= destination) {
          this.setState({
            [name]: destination
          })
          return
        }
        this.setState({
          [name]: afterState
        })
      }else {
        if (afterState <= destination) {
          this.setState({
            [name]: destination
          })
          return
        }
        this.setState({
          [name]: afterState
        })
      }
      setTimeout(() => {
        animate(name, afterState, increment, step, destination, time)
      }, time)
    }
    const animationLastTime = 5000 // 动画持续5秒钟
    animate('code', 1000, false, 12, 0, animationLastTime / (1000 / 12))
    animate('day', 60, false, 1, 5, animationLastTime / (60 - 5))
    animate('save', 1, true, 1, 20, animationLastTime / (20 - 1))
  }

  render() {
    return (
      <div className='container business-growth'>
        <div className="row title">
          搭上零代码数字化快车
          <br/>
          业务增长<span className='highlight'>尽在掌握</span>
        </div>
        <div className='business-growth-container grid col-3'>
          {
            this.renderBusinessGrowthItem()
          }
        </div>
      </div>
    );
  }
}

export default MainBusinessGrowth;
