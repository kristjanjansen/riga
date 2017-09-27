// https://stackoverflow.com/questions/37133282/how-to-use-components-in-v-html

const Dynamic = {
    props: ['slide'],
    data: () => ({ renderedSlide: null }),
    render(h) {
        return this.renderedSlide ? this.renderedSlide() : h()
    },
    watch: {
        slide: {
            immediate: true,
            handler() {
                var res = Vue.compile(this.slide)
                this.renderedSlide = res.render
                this.$options.staticRenderFns = []
                this._staticTrees = []
                for (var i in res.staticRenderFns) {
                    this.$options.staticRenderFns.push(res.staticRenderFns[i])
                }
            }
        }
    }
}

export { Dynamic }
