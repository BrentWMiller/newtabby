import Vue from 'vue';
import { cloneDeep } from 'lodash';
import * as firebase from 'firebase';

import NT_CONFIG from '../nt.config.js';

const User = {
  uid: '',
  email: '',
  displayName: '',
  photoURL: '',
};

const getDefaultState = () => ({
  token: '',
  user: cloneDeep(User),
});

export const state = getDefaultState;

export const getters = {
  isLoggedIn: (state) => {
    try {
      return state.user.uid !== '';
    } catch {
      return false;
    }
  },
  uid: (state) => {
    return state.user.uid;
  },
  user: (state) => {
    return state.user;
  },
};

export const mutations = {
  RESET_USER(state) {
    Object.assign(state, getDefaultState());
  },
  SET_USER(state, user) {
    Object.assign(state.user, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

export const actions = {
  async onAuthStateChangedAction({ dispatch, commit }, { authUser }) {
    if (!authUser) {
      return;
    }

    try {
      await dispatch('getUserToken');
      commit('SET_USER', authUser);
    } catch (error) {
      throw error;
    }
  },
  async getUserToken({ commit }) {
    try {
      const token = await this.$fireAuth.currentUser.getIdToken();
      commit('SET_TOKEN', token);
    } catch (error) {
      throw error;
    }
  },

  async signInWithGoogle() {
    try {
      const googleAuth = gapi.auth2.getAuthInstance();
      const googleUser = await googleAuth.signIn();

      const token = googleUser.getAuthResponse().id_token;
      const credential = firebase.auth.GoogleAuthProvider.credential(token);

      await this.$fireAuth.signInWithCredential(credential);
    } catch (error) {
      console.error(error);
    }
  },

  async logout({ commit, dispatch }) {
    const user = this.$fireAuth.currentUser;

    try {
      await this.$fireAuth.signOut();
    } catch (error) {
      throw error;
    } finally {
      commit('RESET_USER');
    }
  },

  async initClient() {
    try {
      await new Promise((resolve, reject) => {
        gapi.load('client', () => {
          gapi.client.init({
            apiKey: NT_CONFIG.gapi.apiKey,
            clientId: NT_CONFIG.gapi.clientId,
            discoveryDocs: NT_CONFIG.gapi.discoveryDocs,
            scope: NT_CONFIG.gapi.scope,
          });

          gapi.client.load('calendar', 'v3');

          resolve();
        });
      });
    } catch (error) {
      console.error(error);
    }
  },
};
