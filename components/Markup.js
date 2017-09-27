const Markup = {
    template: `
        <div
            :style="style.slide"
            v-html="slideHtml">
        </div>
    `,
    props: ['slide', 'values'],
    data: () => ({ style }),
    computed: {
        slideHtml() {
            return marked(this.slide, {
                breaks: true,
                highlight: code => hljs.highlightAuto(code).value
            })
        }
    }
}

const style = {
    slide: {
        padding: '3rem',
    }
}

export { Markup }