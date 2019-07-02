import axios from 'axios';

const params = {
  headers: {
    'X-RapidAPI-Key': '3bc3316c2dmsh8e41b1e957eb5b0p1ba874jsn673415bd6a58',
    'Accept': 'application/json'
  }
}

export function fetchTeams() {
  return axios.get('https://api-football-v1.p.rapidapi.com/v2/teams/league/2', params);
}

export function fetchTeam(id) {
  return axios.get(`https://api-football-v1.p.rapidapi.com/v2/teams/team/${id}`, params);
}