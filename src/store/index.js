import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        car_info: {
            brand: 'Toyota',
            model: 'Land Cruiser',
            image_url: '/img/suv.jpg',
            introduction: 'Toyota Land Cruiser',
            history: 'The 2020 Toyota Land Cruiser has earned a loyal following from around the world. The product of over 60 years of global adventures, it’s a sophisticated blend of off-road prowess, 59 on-road comfort and unparalleled refinement. It also offers seating for up to eight passengers; after all, adventures are best shared. And paying homage to the legends that came before is Land Cruiser Heritage Edition. 55 As the latest extension of the iconic badge, it celebrates where it’s been and is ready for what’s next.',
            spec: {
                engine: 'Petrol',
                gearbox: 'Automatic',
                accelaration: 7.2,
                displacement: 5.5,
                turbo: 'no'
            }
            
        }
    },
    mutations: {

    },
    actions: {

    }
})