const API = "http://localhost:8080/wp-json/wp/v2/posts";

function getPosts() {
  return fetch(API).then(function(response) {
    return response.json();
  });
}

getPosts()
  .then(function(posts) {
    posts.forEach(function(post) {
      console.log(post);

      const element = document.createElement("div");
      const target = document.querySelector("[data-target]");

      element.innerHTML =
        "<h2>" +
        post.title.rendered +
        "</h2>" +
        post.content.rendered +
        "<ul>" +
        Object.keys(post.custom)
          .filter(function(name) {
            return !name.match(/^_/);
          })
          .map(function(name) {
            return (
              "<li><strong>" + name + "</strong>:" + post.custom[name] + "</li>"
            );
          })
          .join("") +
        "</ul>";

      target.appendChild(element);
    });
  })
  .catch(function(err) {
    console.error(err);
  });
