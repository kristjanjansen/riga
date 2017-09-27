const Sample = {
    template: `
        <div :style="style.sample" ref="sample">console.log()</div>
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
        fontSize: '1.5rem'
    }
}

export { Sample }