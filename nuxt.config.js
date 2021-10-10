export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "advokat",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css

    css: ["@/assets/styles/style.scss", "@/assets/styles/font.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "@/plugins/clickOut.js",
        "@/plugins/vuelidate.js",
        "@/plugins/pagination.js",
        "@/plugins/v-mask.js"
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    i18n: {
        locales: [
            {
                code: "uz",
                file: "uz.js"
            },
            {
                code: "ru",
                file: "ru.js"
            },
            {
                code: "kr",
                file: "cr.js"
            }
        ],
        lazy: true,
        langDir: "lang/",
        strategy: "prefix_except_default",
        defaultLocale: "kr"
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "nuxt-i18n",
        "@nuxtjs/style-resources"
    ],

    styleResources: {
        scss: ["@/assets/styles/*.scss"]
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: "https://advokatrestr.herokuapp.com/api/"
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};
