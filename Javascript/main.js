'use strict'

let goal;
let goals=[];
let pressCount = 0;
const goalsList = document.querySelector('.goalCol');

const enterBtn = document.querySelector('button').addEventListener('click',function getGoal() {
    goal = document.querySelector('.goals');
    goals.push(goal.value);
    goalsList.insertAdjacentHTML('beforeend',addGoals(pressCount));
    goal.value = '';
    pressCount = pressCount+1;

});

function addGoals(count=0){
    return `<input type="checkbox" id="goal${count}">
        <label for="goal${count}">${goals[count]}</label><br>`
}


