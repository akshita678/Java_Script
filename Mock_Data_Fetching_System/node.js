// Asynch and synch is js ----> importance of sequence 
setTimeout(()=>{
console.log('hello')
},2000)  // this prints hello after 2 sec pass the time always in mili second





function getDataCallback(dataId, callback) {
  setTimeout(() => {
    console.log("data", dataId);
    if (callback) callback();
  }, 2000);
}

getDataCallback(1, () => {
  console.log("getting data2 ....");
  getDataCallback(2, () => {
    console.log("getting data3....");
    getDataCallback(3, () => {
      console.log("getting data4 ....");
      getDataCallback(4, () => {
        console.log("getting data5 ....");
        getDataCallback(5);
      });
    });
  }); 
});    // example of callback hell 


// to avoid this we have promises in js 

// Function that returns a Promise
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");  // its one of the handlers of promise that is responsible for resolving status of promise 
      
    }, 20);
  });
}

getData(12);