import m from "mithril"

const LoginView  = {
    oninit() {},
    oncreate() {},
    onupdate() {},
    onbeforeupdate() { return true },
    onbeforeremove() {},
    onremove() {},
    view({ attrs }) {
        return m("div", {class: "flex flex-col"}, [
            m("div", {class: "my-2"}, [
                m("h1", {class: "text-2xl font-bold text-green-500"}, "大集市"),
            ]),
            m("div", {class: ""}, [
                m("div", {class: ""}, [
                    m("label", "用户名")
                ])
            ])
        ])
    }
}

export default LoginView