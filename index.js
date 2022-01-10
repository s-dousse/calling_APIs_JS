function getPostData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => {
      // We have the response! => there's a response before all the data has been received
      response.json().then((json) => {
        // We have the JSON! => second layers of promises to get the data
        // Javascript PROMISES to call this function in the FUTURE
        // when the response has been received and the JSON parsed.
        console.log(json);
        // return json;
      });
    }
  );
}

function renderPost(postData) {
  let postHeadingHTML = `<h1>${postData.title}</h1>`;
  let postWithLinebreaksHTML = postData.body.replaceAll("\n", "<br>\n");
  let postBodyHTML = `<p>${postWithLinebreaksHTML}</p>`;
  return `${postHeadingHTML}${postBodyHTML}`;
}

let post = getPostData();
// console.log(post);
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
let rendered = renderPost(post);
// console.log(rendered);
document.getElementById("main").innerHTML = rendered;
