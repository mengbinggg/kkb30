import lazyLoad from './lazyLoad'

const directives = {
    lazyLoad,
}

export default {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key])
        })
    },
}
