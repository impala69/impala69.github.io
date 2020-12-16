export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Iman Shafiei Alavijeh Resume | Blog',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'A self-organized and creative technical person with more than four years of experience, able to create a product with all complexity in technical and management sections.'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@/assets/css/style.css',
        '@/assets/css/resume.css',
        '@/assets/css/navbar.css',
        '@/assets/css/dark.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxt/content'
    ],
    bootstrapVue: {
        bootstrapCSS: true, // Or `css: false`
        bootstrapVueCSS: true, // Or `bvCSS: false`
        icons: false,
        componentPlugins: [
            'LayoutPlugin',
            'ToastPlugin',
            'ModalPlugin',
        ],
        components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BModal', 'BImgLazy', 'BNavbar', 'BNavbarNav', 'BNavbarBrand',
            'BNavItem', 'BNavbarToggle', 'BNav', 'BNavText', 'BCollapse', 'BIconPen', 'BLink'
        ],
        directives: ['VBModal', 'VBToggle'],
    },

    content: {
        liveEdit: false
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
