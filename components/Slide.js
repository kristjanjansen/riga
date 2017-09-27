import { Markup } from "./Markup.js";
import { Photo } from "./Photo.js";
import { Sample } from "./Sample.js";

const Slide = {
    components: { Markup, Photo, Sample },
    template: `
        <div :style="slideStyle">
            <component
                :is="component.is"
                :argument1="component.argument1"
                :slide="slide"
            ></component>
        </div>
    `,
    props: ["slide", "values"],
    data: () => ({ style }),
    computed: {
        component() {
            var customComponent = this.slide.match(/\[\[(.*)\]\]/m);
            console.log(customComponent)
            if (customComponent) {
                var parts = customComponent[1].split('|');
                return { is: parts[0], argument1: parts[1] ? parts[1] : null };
            }
            return { is: 'markup', 'argument1': null };
        },
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
        fontFamily: "sans-serif"
    }
};

export { Slide };
