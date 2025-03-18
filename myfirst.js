let count = 0;

const timer = () => {
  if (count < 3) {
    console.log('hello', ++count);
    setTimeout(timer, 3000);
  } else {
    console.log('Done');
  }
}

timer();


const updatedTimer = () => {
  let i = 10;
  
  const intervalId = setInterval(() => {
    console.log(i);
    if (i === 0) {
      console.log('Time has gone');
      clearInterval(intervalId);
    }
    i--;
  }, 1000); 
};

updatedTimer();