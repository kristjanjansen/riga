import { Markup } from './Markup.js'

const Slide = {
    components: { Markup },
    template: `
        <div :style="slideStyle">
            <component :is="component" :slide="slide"></component>
        </div>
    `,
    props: ['slide','values'],
    data: () => ({ style }),
    computed: {
        component() {
            return 'markup'
        },
        slideStyle() {
            return [
                style.slide,
                {
                    background: `hsl(${this.values.color * 3.6}, 50%, 35%)`,
                    fontSize: 1 + (this.values.size * 0.01) + 'rem'
                }
            ]
        }
    }
}

const style = {
    slide: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        color: 'rgba(255,255,255,0.8)',
        fontFamily: 'sans-serif'
    }
}

export { Slide }