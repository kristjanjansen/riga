const Markdown = {
    template: `
        <div
            v-html="target">
        </div>
    `,
    props: ['source'],
    computed: {
        target() {
            return marked(this.source, {
                breaks: true,
                highlight: code => hljs.highlightAuto(code).value
            })
        }
    }
}

export { Markdown }