import { Markup } from "./Markup.js";

const Slide = {
    components: { Markup },
    template: `
        <markup
            :style="slideStyle"
            :slide="slide"
            :values="values"
        >
        </markup>
    `,
    props: ["slide", "values"],
    data: () => ({ style }),
    computed: {
        slideStyle() {
            return [
                style.slide,
                {
                    background: `hsl(${this.values.color * 3.6}, 50%, 35%)`,
                    fontSize: 1 + this.values.size * 0.01 + "rem"
                }
            ];
        }
    }
};

const style = {
    slide: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        color: "rgba(255,255,255,0.8)",
        fontFamily: "sans-serif",
        padding: '2rem'
    }
};

export { Slide };
