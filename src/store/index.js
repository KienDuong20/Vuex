import Vue from "vue";
import Vuex from 'vuex'
// import {v4 as uuidv4} from 'uuid'

// import axios from 'axios'

//Import Modules
import auth from './modules/auth'
import todo from './modules/todo'
Vue.use(Vuex)

const storeData = {
    modules: {
        auth,
        todo
    },
    
    
}

const store = new Vuex.Store(storeData)

export default store