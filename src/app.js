import m from "mithril"

import HomeView from "./pages/home"
import LoginView from "./pages/login"

console.log("启动 MTB WeChat Tool")

const root = document.body

m.route(root, "/", {
    "/": HomeView,
    "/login": LoginView
})