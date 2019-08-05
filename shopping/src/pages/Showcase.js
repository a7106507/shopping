import React from 'react'
import '../assets/css/Showcase.css'

class Showcase extends React.Component{
    render(){
        return (
            <div className='Showcase'>
                <div className="home-infrom">
                    <dl>
                        <dt className="home-infrom-title">
                            <i></i>
                            <p>APP新版本上线换一种方式购物</p>
                        </dt>
                        <dd className="home-infrom-cont">
                            <img src={require("../assets/images/banner-car.jpg")} alt=''/>
                        </dd>
                    </dl>
                </div>
                <div className="home-hot">
                    <h3>大牌热卖</h3>
                    <ul>
                        <li>
                            <img src={require("../assets/images/b1.jpg")} alt=''/>
                            <p>新款上市</p>
                        </li>
                        <li>
                            <img src={require("../assets/images/b2.jpg")} alt=''/>
                            <p>爱美装扮</p>
                        </li>
                        <li>
                            <img src={require("../assets/images/b3.jpg")} alt=''/>
                            <p>热潮时代</p>
                        </li>
                    </ul>
                </div>
                <div className="home-new"> 
                    <h3>新品必购</h3>
                <div className="home-new-icon">
                    <img src={require("../assets/images/xiao1.jpg")} alt=''/>
                    <img src={require("../assets/images/xiao2.jpg")} alt=''/>
                    <img src={require("../assets/images/xiao3.jpg")} alt=''/>
                    <img src={require("../assets/images/xiao4.jpg")} alt=''/>
                </div>
                </div>
            </div>
        )
    }
}

export default Showcase