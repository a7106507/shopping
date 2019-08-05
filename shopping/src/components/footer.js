import React from 'react'
import '../assets/css/footer.css'
import {Link} from 'react-router-dom'
class footer extends React.Component{
    render(){
        console.log(this.props.path)
        return(
            <footer className="home-footer-nav">
                <Link to='/home'>
                    <i className={this.props.path==='/home'?"icon-home-active":"icon-home"}></i>
                    <p className={this.props.path==='/home'?"word-active":""}>首页</p>
                </Link>
                <Link to='/life'>
                    <i className={this.props.path==='/life'?"icon-exhibition-active":"icon-exhibition"}></i>
                    <p className={this.props.path==='/life'?"word-active":""}>生活</p>
                </Link>
                <Link to='/classs'>
                    <i className={this.props.path==='/classs'?"icon-service-active":"icon-service"}></i>
                    <p className={this.props.path==='/classs'?"word-active":""}>分类</p>
                </Link>
                <Link to='/buycar'>
                    <i className='icon-car'></i>
                    <p>购物车</p>
                </Link>
                <Link to='/memsg'>
                    <i className="icon-my"></i>
                    <p>我的</p>
                </Link>
            </footer>
        )
    }
}
export default footer