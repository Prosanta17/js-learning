const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Async task is complete");
    resolve();
  }, 2000);
});

promiseOne.then(() => {
  //   console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Async task 2");
    resolve();
  }, 2000);
}).then(() => {
  //   console.log("Async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Prosanta", email: "pk@gmail.com" });
  }, 2000);
});
promiseThree.then((user) => {
  //   console.log(user);
  //   console.log(user.username);
  //   console.log(user.email);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Prosanta", password: "123" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    // console.log(user);
    return user.username;
  })
  .then((username) => {
    // console.log(username);
  })
  .catch((error) => {
    // console.log(error);
  });
//   .finally(() => console.log("Promise resolve or rejected finally"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Prosanta", password: "12345" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    // console.log(error);
  }
}
// consumePromiseFive();

async function getAllUsers() {
  try {
    const resposne = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resposne.json();
    // console.log(data);
  } catch (error) {
    // console.log("Error: ", error);
  }
}
getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    // console.log(error);
  });
