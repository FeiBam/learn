const fs = require('fs')
const path = require('path')
const config = require('../config/index')
const KoaRouter = require('@koa/router')
const Router = new KoaRouter()



function RoutesInject(Router = null,Path = config.routerPath , configArr = config.installRouter) {
    this.router = Router
    const files = fs.readdirSync(Path).filter(file => file !== 'index.js' ).filter(files => files.endsWith('.js'))
    this.routes = {}
    files.forEach(item => {
        if (item.toLowerCase().endsWith('.js')){
            this.routes[`${item.replace(/\.js/,'')}`] = require(`${Path}/${item}`)
        }
    })
    configArr.forEach(item=>{
        if (item.children){
            new RoutesInject(this.routes[item.routerName].router, item.childrenPath , item.children)
            this.router.use(item.url,this.routes[item.routerName])
        }
        else {
            this.router.use(item.url,this.routes[item.routerName])
        }
    })
    return this.router
}


const router = new RoutesInject(Router)


module.exports = {
    router
}
