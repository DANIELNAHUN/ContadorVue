Vue.component('counter', {
    template:  //html
        `
        <div class="main-container">
            <div class="counter-container">
                <button @click="counterNumber++">+</button>
                <p>{{counterNumber}}</p>
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
                'bg-success': this.counterNumber <= 30,
                'bg-warning': this.counterNumber > 30 && this.counterNumber < 60,
                'bg-danger': this.counterNumber >= 60
            }
        }
    }

})