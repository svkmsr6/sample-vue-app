import API from "@/apis/api"

export default {
  setLoader({ commit }, loading){
    commit("SET_LOADER", loading);
  },
  async fetchPosts({ commit }){
    commit("SET_LOADER", true);
    const posts = await API.fetchAllPosts();    
    commit("SET_POSTS", posts);
    commit("SET_LOADER", false);
  },
  updateAppName({ commit }, name){
    commit("SET_APP_NAME", name)
  } 
}