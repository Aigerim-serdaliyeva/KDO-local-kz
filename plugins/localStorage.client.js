import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })

export default ({store}) => {
  window.onNuxtReady(() => {
    createPersistedState()(store)
  })
}
