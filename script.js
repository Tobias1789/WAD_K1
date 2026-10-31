const ENDPOINT = "https://api.jsonbin.io/v3/b/6ae5f8bfffd5d160539b5702";
const feed = document.getElementById("feed");

fetch(ENDPOINT)
  .then(res => res.json())
  .then(data => data.record.forEach(addPost))
  .catch(err => console.error("Failed to load posts:", err));

function addPost(post) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC"
  });

  const article = document.createElement("article");
  article.innerHTML = `
    <div class="post-info"><div class="author-info"><span class="avatar"></span><span>${post.author}</span></div><time datetime="${post.date}">${date}</time></div>
    ${post.image ? `<img src="${post.image}" alt="Post image">` : ""}
    <p>${post.text}</p>
    <button class="like" type="button">Like</button>`;
    feed.appendChild(article);
}
