// Fetch API

/* fetch('todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
}); 

/// Mock

const fetchData = (callback) => {
    setTimeout(() => {
        let results = 'mock data';
        callback(results);
    }, 3000);
}

fetchData(data => console.log(data))
*/

// Async & Await

const getTodos = async () => {
  const response = await fetch("todos/luigi.json");
  if (response.status !== 200) {
    throw new Error("cant fetch the data");
  } else {
    const data = await response.json();
    return data;
  }
};
getTodos()
  .then((data) => console.log("resolved: ", data))
  .catch((error) => console.log("error: ", error.message));
