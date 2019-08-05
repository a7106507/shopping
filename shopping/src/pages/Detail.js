import React from 'react'
import '../assets/css/Detail.css'
import config from '../configs/configs'
import {inject,observer} from 'mobx-react'
import {Link} from 'react-router-dom'
@inject ('store')
@observer
class detail extends React.Component{
    render(){
        console.log(this.props.store.detdata)
        return (
            <div className='detail'>
                <div className="detail-back" onClick={()=>{this.props.history.go(-1)}}></div>
                <div className="detail-swiper">
                    <img src={config.active+this.props.location.query.Imgpath} alt=""/>
                </div>
                <div className="detail-title">
                    <p>{this.props.location.query.Name}</p>
                    <div className="detail-price">
                        <span><small>￥</small> {this.props.location.query.Price} </span>
                        <h5>￥20.00</h5>
                    </div>
                </div>
                <div className="detail-sales">
                    已经领取: 200 剩余: 1800
                </div>
                <dl className="detail-sku">
                    <dt>颜色：</dt>
                    <dd>浅蓝色</dd>
                </dl>
                <div className="detail-cont">
                    <ul className="detail-cont-nav">
                        <li className="detail-cont-active">商品详情</li>
                        <li>商品品论</li>
                    </ul>
                    <div className="detail-cont-img">
                        <img src={config.active+this.props.location.query.Imgpath} alt=""/>
                        <img src={config.active+this.props.location.query.Imgpath} alt=""/>
                        <img src={config.active+this.props.location.query.Imgpath} alt=""/>
                        <img src={config.active+this.props.location.query.Imgpath} alt=""/>
                    </div>
                </div>
                <div className="detail-car">
                    <div className="detail-car-li">
                        <i className="detail-car-fx"></i>
                        <Link to='/buycar'><i className="detail-car-gw"></i></Link>
                    </div>
                    <div className="detail-car-sc" onClick={()=>{this.props.store.addwares(this.props.location.query)}}>加入购物车</div>
                    <div className="detail-car-gm">立即购买</div>
                </div>
            </div>
        )
    }
}

export default detail