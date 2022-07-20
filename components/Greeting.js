Vue.component('greeting', {
    template: //html
        `
    <div>
        <h1>{{greetingText}}</h1>
    </div>
    `,
    data () {
        return {
            greetingText: 'Hola mundo con Vue'
        }
    }
});