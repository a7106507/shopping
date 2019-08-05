import React from 'react'
import '../assets/css/naviocn.css'
class naviocn extends React.Component{
    render(){
        return (
            <div className="nav-icon">
                <ul>
                    <li>
                        <img src={require("../assets/images/icon-tuan.png")} alt=''/>
                        <p>红包</p>
                    </li>
                    <li>
                        <img src={require("../assets/images/icon-tuan1.png")} alt=''/>
                        <p>签到</p>
                    </li>
                    <li>
                        <img src={require("../assets/images/icon-tuan2.png")} alt=''/>
                        <p>新品</p>
                    </li>
                    <li>
                        <img src={require("../assets/images/icon-tuan3.png")} alt=''/>
                        <p>团购</p>
                    </li>
                    <li>
                        <img src={require("../assets/images/icon-tuan4.png")} alt=''/>
                        <p>分类</p>
                    </li>
                    <li>
                        <img src={require("../assets/images/icon-tuan5.png")} alt=''/>
                        <p>生活</p>
                    </li>
                    <li>
                        <img src={require("../assets/images/icon-tuan6.png")} alt=''/>
                        <p>秀秀</p>
                    </li>
                    <li>
                        <img src={require("../assets/images/icon-tuan7.png")} alt=''/>
                        <p>达人</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default naviocn