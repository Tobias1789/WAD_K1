// const ENDPOINT = "https://api.jsonbin.io/v3/b/6ae5f8bfffd5d160539b5702";
const feed = document.getElementById("feed");
// Task 4: fetch from online endpoint
// fetch(ENDPOINT)
//  .then(res => res.json())
//  .then(data => data.record.forEach(addPost))
//  .catch(err => console.error("Failed to load posts:", err));
// Task 5: fetch from local JSON file
fetch("posts.json")
  .then(res => res.json())
  .then(data => data.forEach(addPost))
  .catch(err => console.error("Failed to load posts:", err));

function addPost(post) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric", timeZone: "UTC"
  });

  // build the post with textContent (not innerHTML) so user text is never run as HTML
  const article = document.createElement("article");

  const info = document.createElement("div");
  info.className = "post-info";

  const authorInfo = document.createElement("div");
  authorInfo.className = "author-info";
  const avatar = document.createElement("span");
  avatar.className = "avatar";
  const author = document.createElement("span");
  author.textContent = post.author;
  authorInfo.append(avatar, author);

  const time = document.createElement("time");
  time.setAttribute("datetime", post.date);
  time.textContent = date;

  info.append(authorInfo, time);
  article.appendChild(info);

  if (post.image) {
    const img = document.createElement("img");
    img.src = post.image;
    img.alt = "Post image";
    article.appendChild(img);
  }

  const text = document.createElement("p");
  text.textContent = post.text;
  article.appendChild(text);

  const like = document.createElement("button");
  like.className = "like";
  like.type = "button";
  like.textContent = "Like";
  article.appendChild(like);

  feed.appendChild(article);
}
