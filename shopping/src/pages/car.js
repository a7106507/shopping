import React from 'react'
import '../assets/css/car.css'
import config from '../configs/configs'
import {inject,observer} from 'mobx-react'

@inject ('store')
@observer
class car extends React.Component{
    constructor(){
        super()
        this.state ={
            check:null,
            onoff:0,
            id:[],
            singleoff:0
        }
    }
    render(){
        return (
            <div className='car'>
                 <div className="car-title">
                    <i className="car-title-back" onClick={()=>{
                        this.props.history.go(-1)
                    }}></i>
                    <h3 className="car-title-title">购物车</h3>
                </div>
                <dl className="car-cont">
                    <dt>
                        <span>
                            <p className="car-check-all" onClick={this.checkall}>
                                <i className={this.state.check === 0?'car-check-active':''}></i>
                            </p>
                            全选
                        </span>
                        <i className="car-delete-all" onClick={this.delete}></i>
                    </dt>
                    {this.props.store.carData.map((item)=>{
                        return (
                            <dd key={item.id}>
                                <span>
                                    <p className="car-check-all" onClick={()=>{this.check(item.id)}}>
                                        <i className={this.single(item.id)}></i>
                                    </p>
                                </span>
                                <img src={config.active+item.Imgpath} alt="" className="car-check-img"/>
                                <div className="car-check-title">
                                    <h3>{item.Name}</h3>
                                    <p>颜色分类:黑色,尺码:M</p>
                                    <div className="car-Price">
                                        <span>￥{item.Price*item.num}</span>
                                        <div className="car-input">
                                            <input type="button" value="" className="btn add" readOnly={true} onClick={()=>{this.props.store.addnum(item.id)}}/>
                                            <input type="number" value={item.num} className="num" readOnly={true}/>
                                            <input type="button" value="" className="btn del" readOnly={true} onClick={()=>{this.props.store.delnum(item.id)}}/>
                                        </div>
                                    </div>
                                </div>
                            </dd>
                        )
                    })}
                </dl>
                <div className="car-settle">
                    <div className="car-settle-total">
                        <h3>总计：<p>￥{this.total()}</p></h3>
                        <span>(共0件，不含运费)</span>
                    </div>
                    <div className="car-settle-btn">
                        去结算
                    </div>
                </div>
            </div>
        )
    }
    checkall=()=>{
        if(this.state.onoff === 0){
            this.setState({check:0})
            this.setState({onoff:1})
        }else{
            this.setState({check:null})
            this.setState({onoff:0})
            this.setState({id:[]})
        }
    }
    check=(itemid)=>{
        let data = this.state.id
        var onoff = 0
        var index = null
        for(var i=0;i<data.length;i++){
            if(data[i]===itemid){
                console.log(data[i])
                onoff = 1
                index = i
                break
            }else{
                onoff = 0
            }
        }
        if(onoff === 0){
            data.push(itemid)
        }else{
            data.splice(index,1)
        }
        this.setState({id:data})
    }
    single=(id)=>{
        var data = this.state.id
        if(this.state.check === 0){
            return 'car-check-active'
        }else{
            for(var i = 0;i<data.length;i++){
                if(data[i] === id){
                    return 'car-check-active'
                }
            }
        }
    }
    delete=()=>{
        if(this.state.check === null){
            if(this.state.id[0]){
                this.props.store.delall(this.state.id)
            }
        }else{
            this.props.store.delall([])
        }
    }
    total=()=>{
        var oid = this.state.id
        var data = this.props.store.carData
        var total = 0
        if(this.state.check === null){
            for(var i=0;i<oid.length;i++){
                for(var j=0;j<data.length;j++){
                    if(oid[i] === data[j].id){
                        total+= data[j].Price*data[j].num
                    }
                }
            }
        }else{
            for(var x=0;x<data.length;x++){
                total+=data[x].Price*data[x].num
                console.log(x)
            }
        }
        return (total)
    }
}
export default car