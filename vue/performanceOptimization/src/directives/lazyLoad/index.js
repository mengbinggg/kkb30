import loading from './loading'

const lazyLoad = {
    bind(el) {
        // 如果浏览器不支持IntersectionObserver，则不使用懒加载
        if (window.IntersectionObserver) {
            el.src = loading
        } else {
            el.src = el.dataset.url
        }
    },
    inserted(el, binding) {
        let parentEl = document.querySelector(binding.value)
        if (window.IntersectionObserver) {
            checkDomVisibleByObserver(el, parentEl)
        }
    },
}

// 通过intersectionObserver的方式判断元素是否在可视区
function checkDomVisibleByObserver(el, parentEl) {
    const observer = new IntersectionObserver(
        function (entry) {
            entry.forEach((item) => {
                if (item.isIntersecting) {
                    el.src = el.dataset.url
                    observer.unobserve(el)
                }
            })
        },
        {
            root: parentEl,
        }
    )
    observer.observe(el)
}

export default lazyLoad
