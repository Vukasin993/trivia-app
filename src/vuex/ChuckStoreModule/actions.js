import {client} from '../services/Movies'

export const actions= {
    async fetchJokes(state) {
        const data = await client.getRandomJoke();
        state.commit('setJoke', data);
    },

}