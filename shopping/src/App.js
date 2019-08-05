import React from 'react';
import './assets/css/font-size.css'
import Header from './pages/header'
import Home from './components/home'
import Footer from './components/footer'
import Life from './pages/Life'
import Classs from './pages/classs'
import Detail from './pages/Detail' 
import Car from './pages/car'
import Login from './pages/login'
import {Route,Switch,Redirect} from 'react-router-dom'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        {this.props.location.pathname === '/home' ? <Header></Header>:''}
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/life' component={Life}/>
          <Route path='/classs' component={Classs}/>
          <Route path='/detail/:id' component={Detail}/>
          <Route path='/buycar' component={Car}/>
          <Route path='/memsg' component={Login}/>
          <Redirect exact to='/home' from='/'/>
        </Switch>
        {this.props.location.pathname.indexOf('/detail') === 0 ||this.props.location.pathname === '/buycar' ? '':<Footer path={this.props.location.pathname}></Footer> }
      </div>
    )
  }
}

export default App;
