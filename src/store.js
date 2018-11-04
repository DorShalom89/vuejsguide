import Vue from 'vue'
import VueX from 'vuex'


Vue.use(VueX)


export const store = new VueX.Store({
    state: {
        posts: [
            {
                userId: 1,
                id: 1,
                title: "title",
                body: "body"
            },
            {
                userId: 2,
                id: 2,
                title: "vuex",
                body: "body from vuex"
            }
        ],
        message: "message from vuex store"
    },
    getters: {
        getMessageExtra : store => {
            return store.message + " Extra details"
        }
    },
    mutations: {
        
    },
    actions: {

    }

})