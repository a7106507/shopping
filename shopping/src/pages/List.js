import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/list.css'
import axios from 'axios'
import config from '../configs/configs'
import {inject,observer} from 'mobx-react'
@inject('store')
@observer
class List extends React.Component{
    state={
        listdata:[]
    }
    render(){
        return (
            <div className="home-new-list">
                <h3>新品上架</h3>
                <ul>
                    {this.state.listdata.map((item,index)=>{
                        return (
                            <li key={index}>
                                <Link to={{pathname:'/detail/'+item.id,query:item}}>
                                    <img src={config.active+item.Imgpath} alt=''/>
                                    <p>{item.Name}</p>
                                    <span>{'￥'+item.Price}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    componentWillMount=()=>{
        axios('/list').then(
            (res)=>{
                console.log(res.data)
                this.setState({listdata:res.data})
            }
        )
    }
}

export default List