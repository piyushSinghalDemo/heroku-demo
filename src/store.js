import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
    state: {
        bussinessObjects: [],
        cacheData: {},
        errorList: {},
        boActivityData:[],
        selectiveRestoreData:[],
        createJobParams:{},
        modeValue:true
    },
    mutations: {
        setBussinessObjects(state, list) {
            state.bussinessObjects = list;
        },
        setCacheData(state, obj) {
            state.cacheData[obj.key] = obj.value;
        },
        setBOActivityData(state, list){
            state.boActivityData = list;
        },
        setSelectiveRestoreData(state, list){
            state.selectiveRestoreData = list
        }
    },
    actions: {
        setBussinessObjects: (context, list) => {
            context.commit('setBussinessObjects', list);
        },
        setCacheData: (context, obj) => {
            context.commit('setCacheData', obj);
        },
        setBOActivityData:(context,obj) =>{
            context.commit('setBOActivityData',obj)
        },
        setSelectiveRestoreData(context, list){
            context.commit('setSelectiveRestoreData',list)
        }
    }
})
=======
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
