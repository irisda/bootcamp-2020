const app = Vue.createApp ({
data(){
    return {
        myName:'Iris',
        myAge: 28,
        inputValue:'Hey Hey',
        imgUrl:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    }

},
methods:{
showRandom(){
    let randomNumber = Math.random()
    if(randomNumber > 0 && randomNumber <1)
    return randomNumber
}
}
})

app.mount('#assignment')
