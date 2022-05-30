Vue.component('saludo',{
    template: //html
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>1234</h3>
    </div>
    `,
    data(){
        return{
            saludo: 'Hola desde Vue'
        }
    }
});