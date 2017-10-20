import { settings } from '../settings.js'

const Settings = {
    template: `
        <div
            v-show="show"
            :style="style.wrapper"
        >
            <div
                v-for="(value, key) in values"
                :style="style.value"
            >   
                {{ key }}: {{ values[key] }}
                <input
                    :style="style.range"
                    v-model="values[key]"
                    type="range"
                />
            </div>
        </div>
    `,
    data: () => ({ show: false, values: settings.values, style }),
    watch: {
        values(values) {
            settings.update(values)
        }
    },
    mounted() {
        document.addEventListener('keydown', e => {
            if (e.keyCode == 83) { this.show = !this.show }
        })
    }
}

const style = {
    wrapper: {
        zIndex: 10,
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '10rem',
        background: 'white',
        padding: '1.5rem',
        color: '#444'
    },
    value: {
        marginBottom: '1rem',
        fontFamily: 'sans-serif',
        fontSize: '0.8rem',
        opacity: 0.7
    },
    range: {
        width: '95%'
    }
}

export { Settings }