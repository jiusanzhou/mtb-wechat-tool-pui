import m from "mithril"

const HomeView  = {
    view () {
        return m("div", [
            m("h1", {class: ""}, "首页"),
            m("a", {href: "#!/login"}, "登录")
        ])
    }
}

export default HomeView