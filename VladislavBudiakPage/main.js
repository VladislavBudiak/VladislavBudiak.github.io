
// Special case for index.html
if (window.location.pathname === "/index.html") {
    window.history.replaceState(null, null, "/");
}
// Redirect /projects.html to /projects
else if (window.location.pathname.endsWith(".html")) {
    window.history.replaceState(null, null, window.location.pathname.replace(".html", ""));
}
