const app = Vue.createApp({
    data() {
        return {
        courseGoalA:'Finish the course and learn vue!',
        courseGoalB:'Build amaizing vue apps!',
        webhref:'https://vue-ellipse-progress-demo.netlify.app/#/'
    }
    },
    methods: {
 outputGoal() {
const randonNumber = Math.random();
if(randonNumber < 0.5){
    return this.courseGoalA;
}
else{
    return this.courseGoalB;
}
}
    }
})


app.mount('#user-goal');
//methods get an function
//mount gets an unique id
//data wants a function as a value
//data will return always an object always an object dhe ne percaktojme key value
//data eshrew objekt dhe couseGoal jane proprerty te objektit.
//v-bind directive eshte perdorur per te vendosur vlerat e atriubteve
//v-html set kontntin e elementin html content