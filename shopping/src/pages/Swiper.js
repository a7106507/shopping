import React from 'react'
import ReactSwipe from 'react-swipe'
import '../assets/css/swiper.css'
class swiper extends React.Component{
    render(){
        return (
            <div className='swiper'>
                <ReactSwipe 
                    className='carousel'
                    swipeOptions={{
                        auto: 2000,
                        speed: 500
                      }}
                >
                    <img src={require('../assets/images/banner1.jpg')} alt=''/>
                    <img src={require('../assets/images/banner2.jpg')} alt=''/>
                    <img src={require('../assets/images/banner3.jpg')} alt=''/>
                </ReactSwipe>
            </div>
        )
    }
}
export default swiper