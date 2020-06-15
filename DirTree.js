const fs = require('fs')

const first = '|--'
let now = ''
let index = 0
function PathTree(path,Index = null) {
    const PathArr = fs.readdirSync(path)
    let ArrIndex = 0
    PathArr.forEach(item => {
        ArrIndex ++
        now = '\xa0'.repeat(Index * 3) + first
        if(fs.statSync(path + item).isDirectory()){
            index ++
            console.log(now + item)
            PathTree(path + item + '/',index)
        }
        else {
            if (PathArr.length === ArrIndex){
                ArrIndex = 0
                Index = 0
            }
            console.log(now + item)
        }
    })
}

PathTree('./')

