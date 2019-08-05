import {observable,action} from 'mobx'

class store {
    @observable carData = []
    @action delall (data){
        console.log(data)
        if(data[0]){
            console.log(data)
            for(var i=0;i<data.length;i++){
                for(var j=0;j<this.carData.length;j++){
                    if(data[i] === this.carData[j].id){
                        this.carData.splice(j,1)
                    }
                }
            }
        }else{
            console.log('空数组')
            this.carData = []
        }
    }
    @action addwares (data){
        console.log(this.carData[0])
        data.num = 1;
        var onoff = 0;
        if(this.carData[0]){
            for(var i=0;i<this.carData.length;i++){
                if(this.carData[i].id === data.id ){
                    onoff = 1
                }
            }
        }
        if(onoff === 0){
            this.carData.push(data)
        }
        console.log(this.carData)
    }
    @action addnum (index){
        for(var i=0;i<this.carData.length;i++){
            if(index === this.carData[i].id){
                this.carData[i].num++
            }
        }
    }
    @action delnum (index){
        for(var i=0;i<this.carData.length;i++){
            if(index === this.carData[i].id){
               if(this.carData[i].num === 1){
                    this.carData[i].num = 1
               }else{
                   this.carData[i].num--
               }
            }
        }
    }
}

export default new store()