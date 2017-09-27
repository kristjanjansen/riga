const Sample = {
    template: `
        <div>{{ argument1 }}</div>
    `,
    props: ['slide', 'values', 'argument1'],
    data: () => ({ style }),
    computed: {
    }
}

const style = {
    slide: {
        padding: '3rem',
    }
}

export { Sample }