import { Slide } from './components/Slide.js'
import { Settings } from './components/Settings.js'

import { settings } from '../settings.js'

hljs.initHighlightingOnLoad();

new Vue({
    el: '#app',
    components: { Slide, Settings },
    template: `
        <div>
            <settings></settings>
            <slide
                v-for="(slide, index) in slides"
                :key="index"
                v-show="currentSlide === index"
                :values="settings.values"
                :slide="slide"
            >
            </slide>
        </div>
    `,
    data: { slides: [], currentSlide: 0, settings },
    methods: {
        parseSlides(slides) {
            return slides.split('\n---\n')
        }
    },
    mounted() {
        axios.get('./slides.md').then(res => {
            this.slides = this.parseSlides(res.data)
        })
        document.addEventListener('keydown', e => {
            if (e.keyCode == 37) { this.currentSlide-- }
            if (e.keyCode == 39) { this.currentSlide++ }
        })
        hljs.initHighlightingOnLoad();
    }
})
