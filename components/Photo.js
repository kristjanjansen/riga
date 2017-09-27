const Photo = {
    template: `
        <div :style="style.wrapper">
            <img :width="values.bla" :src="src" />
        </div>
    `,
    props: ['src', 'values'],
    data: () => ({ style }),
}

const style = {
    wrapper: {
        padding: '3rem',
    }
}

export { Photo }