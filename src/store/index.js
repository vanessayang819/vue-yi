import Vue from 'vue'
import Vuex from 'vuex'
import { getGuaDes } from '../api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guaList:[
      [false,false,false],
      [true,true,true],
      [false,true,true],
      [true,false,true],
      [false,false,true],
      [true,true,false],
      [false,true,false],
      [true,false,false],
      
    ],
    gua:[],
    bianYao:Number,
    guaIndex:[],
    guaInfo:{},
  },
  mutations: {
    GET_GUA(state,{gua,guaIndex}){
      state.gua=gua
      state.guaIndex=guaIndex
    },
    RECORD_GUA_INFO(state,guaInfo){
      state.guaInfo=guaInfo
    },
    RECORD_BIAN_YAO(state,num){
      state.bianYao=num
    }

  },
  actions: {
    getGua ({commit, state},num){
      var gua=[],guaIndex=[]
      gua.push(state.guaList[num[0]%8],state.guaList[num[1]%8])
      guaIndex.push(num[1]%8,num[0]%8)
      commit('GET_GUA', {gua,guaIndex})
      commit('RECORD_BIAN_YAO',num[2]%6)
      return this.dispatch('getGuaDes')
    },
    getGuaDes({commit,state}){
      let para=state.guaIndex
      getGuaDes(para).then((res)=>{
        let data=res.data
        // console.log(data,data[0])
        let guaInfo=data[0]
        commit('RECORD_GUA_INFO',guaInfo)
      })      
    }
  },
  getters:{

  },
  modules: {
  }
})
