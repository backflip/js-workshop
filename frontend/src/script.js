const API = "http://localhost:8080/wp-json/wp/v2/posts";

async function getPosts() {
  const response = await fetch(API);
  const posts = await response.json();

  return posts;
}

getPosts()
  .then(posts => {
    posts.forEach(post => {
      console.log(post);

      const element = document.createElement("div");
      const target = document.querySelector("[data-target]");

      element.innerHTML = `
<h2>${post.title.rendered}</h2>
${post.content.rendered}
<ul>
${Object.entries(post.custom)
  .filter(([name]) => !name.startsWith("_"))
  .map(([name, value]) => `<li><strong>${name}</strong>: ${value}</li>`)
  .join("")}
</ul>
`;

      target.appendChild(element);
    });
  })
  .catch(err => console.error(err));
