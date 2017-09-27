// https://stackoverflow.com/questions/37133282/how-to-use-components-in-v-html

const res = Vue.compile('<div><span>{{ msg }}</span></div>')

const Dynamic = {
    render: res.render,
    staticRenderFns: res.staticRenderFns,
    props: ['slide', 'values'],
    data: () => ({ style, msg: 'Hey', res: null }),
    mounted() {
    }
}

const style = {
    slide: {
        padding: '3rem',
    }
}

export { Dynamic }