const proxy = require('http-proxy-middleware')
import config from './configs/configs'
module.exports = function(app){
    app.use(
        proxy('/list',{
            target:'http://106.15.235.104:8282',
            changeOrigin:true 
        }),
        proxy('/classsdata',{
            target:'http://106.15.235.104:8282',
            changeOrigin:true 
        })
    )
}