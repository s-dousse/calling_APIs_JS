function getPostData() {
  // Hardcode the post data for now.
  return {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };
}

function renderPost(postData) {
  let postHeadingHTML = `<h1>${postData.title}</h1>`;
  let postWithLinebreaksHTML = postData.body.replaceAll("\n", "<br>\n");
  let postBodyHTML = `<p>${postWithLinebreaksHTML}</p>`;
  return `${postHeadingHTML}${postBodyHTML}`;
}

let post = getPostData();
let rendered = renderPost(post);
document.getElementById("main").innerHTML = rendered;
