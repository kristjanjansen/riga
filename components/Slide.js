import { Markdown } from "./Markdown.js";
// 204 - x
// 360 - 100 
const Slide = {
    components: { Markdown },
    template: `
        <div :style="slideStyle()">
            <div v-for="(col, i) in slide" :style="colStyle(i)">
                <markdown :source="col"></markdown>
            </div>
        </div>
    `,
    props: ["slide", "values"],
    methods: {
        slideStyle() {
            return [
                style.slide,
                {
                    background: `hsl(${this.values.color * 3.6}, 90%, 23%)`,
                    fontSize: 0.9 + this.values.size * 0.01 + "rem"
                }
            ]
        },
        colStyle(i) {
            return [
                style.col,
                {
                    marginRight: i < this.slide.length - 1 && '1.5rem',
                }
            ]
        }
    }
}

const style = {
    slide: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: '5vw',
        display: 'flex',
    },
    col: {
        flex: 1,
        overflow: 'hidden'
    }
};

export { Slide };
