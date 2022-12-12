let count = 0;
let countA = 0;
let displayCount = document.getElementById('display-1')
let displayCountA = document.getElementById('display-2')


const plusOne = () => {
     count += 1
    displayCount.textContent = count
}

const plusTwo = () => {
    count += 2
    displayCount.textContent = count
}
const plusThree = () => {
    count += 3
    displayCount.textContent = count
}
const plusOneA = () => {
    countA += 1
    displayCountA.textContent = countA
}
const plusTwoA = () => {
    countA += 2
    displayCountA.textContent = countA
}
const plusThreeA = () => {
    countA += 3
    displayCountA.textContent = countA
}
const reset = () => {
     count = 0
    countA = 0
    displayCount.textContent = count
    displayCountA.textContent =countA
}