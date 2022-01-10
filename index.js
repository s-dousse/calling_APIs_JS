function getPostData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1");
}

function renderPost(postData) {
  let postHeadingHTML = `<h1>${postData.title}</h1>`;
    let postWithLinebreaksHTML = postData.body.replaceAll("\n", "<br>\n");
    let postBodyHTML = `<p>${postWithLinebreaksHTML}</p>`;
    return `${postHeadingHTML}${postBodyHTML}`;
}

let post = getPostData();
// console.log(post);
// // Promise {<pending>}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: Response
let rendered = renderPost(post);
// console.log(rendered);
document.getElementById("main").innerHTML = rendered;
