//a person will take 5 steps between 3 to 7 seconds

var steps = document.querySelector('#no_of_steps');
var step_count = document.querySelector('#step_no');
var showTimePassed = document.querySelector('#time-passed');
document.querySelector('#submit').addEventListener('click', run);
var graph = document.querySelector('#graph');

let total_steps;
const arr = [];
const time_passed = [0];
const step_no = [0];
function run(e){
    total_steps = Number(steps.value);
    for(let steps=0; steps<total_steps; steps=steps+1){
        let time_taken = (Math.floor((Math.random()*3)+1))*1000;
        arr.push(time_taken);
        step_no.push(steps+1);
        let sum = 0;
        for(i=0; i<steps; i++){
            sum+=arr[i];
        }
        time_passed.push((arr[steps]+sum)/1000);
        setTimeout(function(){
            console.log(steps+1, "   ", arr[steps]); 
            step_count.innerHTML = steps+1;    
            showTimePassed.innerHTML = `Time Elapsed : ${(arr[steps]+sum)/1000} seconds`;
            if(steps == total_steps-1){
                graph.classList.remove("hidden");
            }
            			
        }, arr[steps]+sum)
    }
    console.log(time_passed);
    console.log(step_no);
}
document.querySelector('#make_chart').addEventListener('click', makeChart);
function makeChart(){
    new Chart("myChart", {
    type: "line",
    data: {
      labels: step_no,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: time_passed
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 0, max:time_passed[total_steps]}}],
      }
    }
  });
}