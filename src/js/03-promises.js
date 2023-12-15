const formContainer = document.querySelector('.form');
let numbOfPromise = 0;
let waitingTime = 0;

formContainer.addEventListener('submit', submittedForm => {
  submittedForm.preventDefault();
  console.dir(submittedForm);
  const typedStartWaitingTime = submittedForm.target[0].valueAsNumber;
  const typedWaitingTime = submittedForm.target[1].valueAsNumber;
  const typedTimes = submittedForm.target[2].valueAsNumber;
  console.log(typedStartWaitingTime, typedWaitingTime, typedTimes);
  for (let i = 1; i <= typedTimes; i++) {
    // debugger;
    numbOfPromise = i;
    waitingTime = waitingTime + typedWaitingTime;
    if (numbOfPromise === 1) {
      waitingTime = typedStartWaitingTime;
    }
    new Promise(resolve => {
      resolve(createPromise(numbOfPromise, waitingTime));
    })
      .then(() => {
        console.log('The promise was made');
      })
      .catch(() => {
        console.log("The promise couldn't be made");
      });
  }
});

function createPromise(position, delay, resolve, reject) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    setTimeout(() => {
      window.alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }, delay);
  } else {
    setTimeout(() => {
      window.alert(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  }
}
