import React from 'react'
import Swiper from '../pages/Swiper'
import Naviocn from '../pages/Naviocn'
import '../assets/css/t-line.css'
import Showcase from '../pages/Showcase'
import List from '../pages/List'

class home extends React.Component{
    render(){
        return (
            <div className='home'>
                <Swiper></Swiper>
                <Naviocn></Naviocn>
                <div className='t-line'></div>
                <Showcase></Showcase>
                <List></List>
            </div>
        )
    }
}
export default home
