function getPostData() {
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
    response.json().then((post) => {
      // ...to here.
      // console.log(post);
      let rendered = renderPost(post);
      document.getElementById("main").innerHTML = rendered;
    });
  });
}

function renderPost(postData) {
  let postHeadingHTML = `<h1>${postData.title}</h1>`;
  // let postWithLinebreaksHTML = postData.body.replaceAll("\n", "<br>\n");
  let postBodyHTML = `<p>${postData.body}</p>`;
  return `${postHeadingHTML}${postBodyHTML}`;
}

let post = getPostData();
// Promise fufilled
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Object
// Move the things we need to happen IN THE FUTURE from here...
