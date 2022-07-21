Vue.component('counter', {
    template:  //html
        `
        <div class="main-container">
            <div class="counter-container">
                <button @click="counterNumber++">+</button>
                <h3>{{counterNumber}}</h3>
                <button @click="counterNumber--">-</button>
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="{width: counterNumber+'%'}"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                :class="color">{{counterNumber}}%</div>
            </div>
        </div>

    `,
    data () {
        return {
            counterNumber: 0
        }
    },
    computed: {
        color () {
            return {
                'bg-success': this.counterNumber <= 10,
                'bg-warning': this.counterNumber > 10 && this.counterNumber < 20,
                'bg-danger': this.counterNumber >= 20
            }
        }
    }

})