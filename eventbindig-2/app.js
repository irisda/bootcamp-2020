const app = Vue.createApp({
    data(){
return{
    setInput:'',
    confirmedInput:''

}
    },
    methods:{
pressButton(){
    alert('hi there!')
},
saveInput(event){
    this.setInput = event.target.value
},
confirmInput(){
    this.confirmedInput = this.setInput
}
    }
})

app.mount('#assignment');