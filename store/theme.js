const CHANGE_THEME = 'CHANGE_THEME';

export const state = () => ({
    isThemeDark: false
});

export const mutations = {
    [CHANGE_THEME](state, bool) {
        state.isThemeDark = bool;
    }
};

export const actions = {
    changeTheme({ commit }, payload) {
        commit(CHANGE_THEME, payload);
    }
};
