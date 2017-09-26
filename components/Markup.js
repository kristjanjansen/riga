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
            return marked(this.slide, { breaks: true })
        }
    }
}

const style = {
    slide: {
        fontFamily: 'sans-serif'
    }
}

export { Markup }