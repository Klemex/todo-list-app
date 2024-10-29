const routes = {
    "/": "/index.html",
    "/login": "/login.html",
    "/todo": "/todo_list.html",
    "/edit_todo": "/edit_todo.html",
    "/404": "/404.html"
};

function route(event) {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.history.pushState({}, "", path);
    handleLocation();
}

async function handleLocation() {
    const path = window.location.pathname;
    const route = routes[path] || routes["/404"];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("app").innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();


