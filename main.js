// Axios Global

axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
async function getTodos() {
  console.log("GET Request");
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 5,
      },
      timeout: 5000,
    });
    console.log(res.data);
    showOutput(res);
  } catch (error) {
    console.log("error:", error);
  }
}

// POST REQUEST
async function addTodo() {
  try {
    let res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      data: {
        title: "Vaidik Patel",
        completed: false,
      },
    });
    console.log(res.data);
    showOutput(res);
  } catch (error) {
    console.log("error:", error);
  }
}

// PUT/PATCH REQUEST
async function updateTodo() {
  console.log("PUT/PATCH Request");
  try {
    let res = await axios.patch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        data: {
          title: "Updated Vaidik Patel",
          completed: true,
        },
      }
    );
    console.log(res.data);
    showOutput(res);
  } catch (error) {
    console.log("error:", error);
  }
}

// DELETE REQUEST
async function removeTodo() {
  console.log("DELETE Request");
  try {
    let res = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(res);
    showOutput(res);
  } catch (error) {
    console.log("error:", error);
  }
}

// SIMULTANEOUS DATA
async function getData() {
  console.log("Simultaneous Request");
  try {
    let res = await axios.all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
    ]);
    console.log(res[0]);
    // console.log(res[1]);
    showOutput(res[1]);
  } catch (error) {
    console.log("error:", error);
  }
}

// CUSTOM HEADERS
async function customHeaders() {
  console.log("Custom Headers");

  const confiq = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "sometoken",
    },
  };

  try {
    let res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      data: {
        title: "Vaidik Patel",
        completed: false,
      },
      confiq,
    });
    console.log(res.data);
    showOutput(res);
  } catch (error) {
    console.log("error:", error);
  }
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log("Transform Response");
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title: "Hello World",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };

  axios(options).then((res) => showOutput(res));
}

// ERROR HANDLING
async function errorHandling() {
  console.log("Error Handling");
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todoss", {
      params: {
        _limit: 5,
      },
    });
    console.log(res.data);
    showOutput(res);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
}

// CANCEL TOKEN
async function cancelToken() {
  console.log("Cancel Token");
  const source = axios.CancelToken.source();
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      cancelToken: source.token,
    });
    console.log(res.data);
    showOutput(res);
  } catch (error) {
    console.log("error:", error);
  }
}

// INTERCEPTING REQUESTS & RESPONSES

axios.interceptors.request.use((confiq) => {
  console.log(
    `${confiq.method.toUpperCase()} request sent to ${
      confiq.url
    } at ${new Date().getTime()}`
  );
  return confiq;
});

// AXIOS INSTANCES
const axiosIn = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

axiosIn.get("/comments").then((res) => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
