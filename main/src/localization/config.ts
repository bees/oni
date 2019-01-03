const i18next = require("i18next")
const Backend = require("i18next-node-fs-backend")

// mindlessly based off of https://phraseapp.com/blog/posts/building-an-electron-app-with-internationalization-i18n/

const i18nextOptions = {
    whitelist: ["en"],
    fallbackLng: {
        default: ["en"],
    },
    languages: ["en"],
    namespace: "translation",
    saveMissing: true,
    backend: {
        loadPath: "./locales/{{lng}}/{{ns}}.json",
        addPath: "./locales/{{lng}}/{{ns}}.missing.json",
    },
}

i18next.use(Backend).init(i18nextOptions)

export default i18next
