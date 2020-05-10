export default {
  SET_APP_NAME(state, app){
    state.app = app;
  },
  SET_POSTS(state, posts){
    state.posts = posts;
  },
  SET_LOADER(state, loading){
    state.loading = loading;
  }
}