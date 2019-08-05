import React from 'react'
import '../assets/css/header.css'
class header extends React.Component{
    render(){
        return (
            <header>
                <i className="icon-sao"></i>
                <input type="text" className="heder-input-text" placeholder="新品上市"/>
                <button className="icon-msg"></button>
            </header>
        )
    }
}
export default header