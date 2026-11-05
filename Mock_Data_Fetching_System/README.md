# Mini Project: Mock Data Fetching System

A simple project exploring how JavaScript handles asynchronous operations, sequential data loading, and the transition from callbacks to Promises.

---

## Project Overview
This project simulates fetching data from a database or server API sequentially. Because server requests take time, it uses timers to demonstrate the importance of execution sequence in JavaScript.

The project is split into three phases to show how asynchronous code has evolved:
1. Basic asynchronous timing using `setTimeout`
2. Sequential loading via nested callbacks (Callback Hell simulation)
3. Refactoring the data fetcher using modern Promises

---

## Implementation Details

### Phase 1: Basic Timing
A standard layout showing how JavaScript handles background timers. 
*Note: Delays are always specified in milliseconds (e.g., 2000ms = 2 seconds).*

```javascript
setTimeout(() => {
  console.log('hello');
}, 2000); // Prints 'hello' after a 2-second delay
```

### Phase 2: Sequential Loading (Callback Method)
This implementation simulates fetching user data items 1 through 5 in a strict sequence. To guarantee the correct order, each subsequent fetch function is nested as a callback. 

While functional, this approach leads to a deep, hard-to-maintain nesting structure known as "Callback Hell".

```javascript
function getDataCallback(dataId, callback) {
  setTimeout(() => {
    console.log("data", dataId);
    if (callback) callback();
  }, 2000);
}

// Fetching multiple data entries in order using callbacks
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
});
```

### Phase 3: Optimized Fetching (Promise Method)
To clean up the nested structure, the data-fetching logic was refactored to use Promises. Instead of taking a callback function, the API returns a Promise object.

The `resolve` handler is called within the timer to successfully change the status of the promise once the data retrieval simulation is complete.

```javascript
// Optimized function that returns a Promise object
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");  // Handler responsible for resolving the promise status
    }, 20);
  });
}

// Running a single promise data fetch
getData(12);
```

---

## Future Scope
* **Promise Chaining:** Implement `.then()` logic to link the modern `getData` calls sequentially without nesting.
* **Async/Await Implementation:** Refactor the workflow into an `async` function to make the asynchronous code read like synchronous code.
