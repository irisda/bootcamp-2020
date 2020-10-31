const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            result: '',
            confirmedName:''
        }
    },
    computed:{
results(){
    if(this.counter < 37){
       return "Not there yet"
    }
    else if(this.counter > 37){
      return "Too much"
    }
    else {

        return this.counter
    }
}
    },
    watch:{
result(){
    setTimeout(function(){
        this.number = 0;
    },
        5000
    )
}
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;



        },
        remove(num) {
            this.counter = this.counter - num;
        }
    }
})


app.mount('#events');
//methods get an function
//mount gets an unique id
//data wants a function as a value
//data will return always an object always an object dhe ne percaktojme key value
//data eshrew objekt dhe couseGoal jane proprerty te objektit.
//v-bind directive eshte perdorur per te vendosur vlerat e atriubteve
//v-html set kontntin e elementin html content
//click listener does not need any return value
//prevent default that prevent not submit  browser
//computed i perdorum si properties si data properties jo si funksione nuk i thherrasim si funksione