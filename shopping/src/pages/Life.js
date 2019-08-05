import React from 'react'
import '../assets/css/Life.css'
class Life extends React.Component{
    render(){
        return (
            <div className='Life'>
                <div className="Lift-title">
                    <i className="Lift-title-back" onClick={()=>{console.log(this.props.history.go(-1))}}></i>
                    <h3 className="Lift-title-title">爱生活</h3>
                </div>
                <div className="Lift-list">
                    <div className="Lift-content">
                        <h3 className="Lift-content-title">
                            绯闻女孩,火爆全球 时尚话题女王四人组,绯闻女孩,火爆全球 时尚话题女王四人组绯闻女孩,火爆全球 时尚话题女王四人组
                        </h3>
                        <img className="Lift-content-img" src={require("../assets/images/x-1.jpg")} alt=''/>
                        <p className="Lift-content-p">
                            《绯闻女孩》两年内火爆全球，话题女王也因为泰勒·摩森和杰西卡·斯佐尔的时尚蜕变已经由最开始两人扩充到四人的时尚造型秀，各国奢侈品牌单品混搭上身，抢穿天桥新装。美国上东区的富家女集体出击，争当最耀眼的Gossip Queen！
                        </p>
                        <div className="Lift-content-btn">
                            <p><i className="Lift-giveup"></i>点赞</p>
                            <p><i className="Lift-share"></i>收藏</p>
                        </div>
                    </div>
                    <div className="t-line">
                    </div>
                    <div className="Lift-content">
                        <h3 className="Lift-content-title">
                            绯闻女孩,火爆全球 时尚话题女王四人组,绯闻女孩,火爆全球 时尚话题女王四人组绯闻女孩,火爆全球 时尚话题女王四人组
                        </h3>
                        <img className="Lift-content-img" src={require("../assets/images/x-2.jpg")} alt=''/>
                        <img className="Lift-content-img" src={require("../assets/images/x-3.jpg")} alt=''/>
                        <p className="Lift-content-p">
                            《绯闻女孩》两年内火爆全球，话题女王也因为泰勒·摩森和杰西卡·斯佐尔的时尚蜕变已经由最开始两人扩充到四人的时尚造型秀，各国奢侈品牌单品混搭上身，抢穿天桥新装。美国上东区的富家女集体出击，争当最耀眼的Gossip Queen！
                        </p>
                        <div className="Lift-content-btn">
                            <p><i className="Lift-giveup"></i>点赞</p>
                            <p><i className="Lift-share"></i>收藏</p>
                        </div>
                    </div>
                    <div className="t-line">
                    </div>
                </div>
            </div>
        )
    }
}
export default Life