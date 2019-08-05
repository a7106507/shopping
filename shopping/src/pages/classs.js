import React from 'react'
import '../assets/css/classs.css'
import axios from 'axios'
import config from '../configs/configs'

class classs extends React.Component{
    constructor(){
        super();
        this.state={
            classsdata:[],
            index:0,
            item:[],
            iconData:[]
        }
        axios('/classsdata').then(
            (res)=>{
                this.setState({classsdata:res.data})
                this.setState({item:this.state.classsdata[this.state.index]})
                this.setState({iconData:JSON.parse(this.state.classsdata[this.state.index].iconData)}) 
            }
        )
    }
    
    render(){
        return (
            <div className='classs'>
                <div className="classs-title">
                    <i className="classs-title-back" onClick={()=>{console.log(this.props.history.go(-1))}}></i>
                    <h3 className="classs-title-title">分类</h3>
                </div>
                <div className="classs-nav">
                    <ul className="classs-nav-left">
                        {this.state.classsdata.map((item,index)=>{
                            return (
                                <li key={index} className={this.state.index ===index ? 'classs-nav-active':''} onClick={()=>{this.clickicon(item,index)}}>
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="classs-details">
                        <h5>{this.state.item.title}</h5>
                        <ul>
                            {this.state.iconData.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <img src={config.active+item.path} alt=''/>
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    clickicon=(item,index)=>{
        this.setState({index:index})
        this.setState({item:item})
        this.setState({iconData:JSON.parse(item.iconData)})
    }
}

export default classs