import i18next from "i18next"
import * as i18nextBackend from "i18next-node-fs-backend"

// mindlessly based off of https://phraseapp.com/blog/posts/building-an-electron-app-with-internationalization-i18n/

const i18nextOptions: i18next.InitOptions = {
    whitelist: ["en"],
    fallbackLng: {
        default: ["en"],
    },
    backend: {
        loadPath: "./locales/{{lng}}/{{ns}}.json",
        addPath: "./locales/{{lng}}/{{ns}}.missing.json",
    },
}

i18next.use(i18nextBackend)

if (!i18next.isInitialized) {
    i18next.init(i18nextOptions)
}

export default i18next
