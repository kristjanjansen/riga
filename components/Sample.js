const Sample = {
    template: `
        <div :style="style.sample" ref="sample"><slot></slot></div>
    `,
    props: [],
    data: () => ({ style }),
    mounted() {
        hljs.highlightBlock(this.$refs.sample);
    }
}

const style = {
    sample: {
        fontFamily: 'monospace',
        fontSize: '1.5rem',
        padding: '1.5rem'
    }
}

export { Sample }