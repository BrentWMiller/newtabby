import Vue from 'vue';
import { cloneDeep } from 'lodash';

const Calendar = {
  events: [],
};

const getDefaultState = () => ({
  events: cloneDeep(Calendar),
});

export const state = getDefaultState;

export const getters = {
  events() {
    return state.events;
  },
};

export const mutations = {
  RESET_EVENTS(state) {
    Object.assign(state.events, []);
  },
  SET_EVENTS(state, events) {
    state.events = cloneDeep(events);
  },
};

export const actions = {
  async getEvents({ commit }) {
    const events = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime',
    });

    commit('SET_EVENTS', events.result.items);
  },
};
