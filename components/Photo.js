const Photo = {
    template: `
        <div :style="style.wrapper">
            <img :src="argument1" />
        </div>
    `,
    props: ['slide', 'values', 'argument1'],
    data: () => ({ style }),
    computed: {
    }
}

const style = {
    wrapper: {
        padding: '3rem',
    }
}

export { Photo }