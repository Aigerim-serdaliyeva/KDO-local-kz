const SET_VAL = 'SET_VAL';

const checkboxes = {
    additionalSolutions: [],
    estimatedSites: [],
    designMaterials: [],
    tasksSite: [],
    additionalServices: [],
    siteAppearance: [],
    designStage: [],
    brandStyle: []
};

export const state = () => ({
    fullName: '',
    email: '',
    phone: null,
    skype: '',
    companyName: '',
    companySphere: '',
    companyData: '',
    existingSite: '',
    companyMainGroup: '',
    companyMainVirtue: '',
    estimatedSiteName: '',
    estimatedMenu: '',
    mainRequirements: '',
    visibleMenu: '',
    exampleSite: '',
    yourWishes: '',
    ...checkboxes
});

export const mutations = {
    [SET_VAL](state, { val, variable }) {
        state[variable] = val;
        // state['email'] = '123123'
        // state.email = '123123'
    }
};

export const actions = {
    setVal({ commit }, payload) {
        commit(SET_VAL, payload);
        // commit(SET_VAL, { '123123123', 'email' });
    }
};
