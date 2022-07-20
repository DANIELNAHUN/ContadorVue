Vue.component('counter',{
    template:  //html
    `
    <div>
        <button @click="counterNumber++">+</button>
        <h3>{{counterNumber}}</h3>
        <button @click="counterNumber--">--</button>
    </div>
    `,
    data(){
        return{
            counterNumber:0
        }
    }

})