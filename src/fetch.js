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

export function fetchFixturesLeague() {
  return axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2', params);
}

export function fetchFixturesLive() {
  return axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/live', params);
}

export function fetchFixturesLivePrLeague() {
  return axios.get('https://api-football-v1.p.rapidapi.com/v2/fixtures/live/2', params);
}

export function fetchEvents(id) {
  return axios.get(`https://api-football-v1.p.rapidapi.com/v2/events/${id}`, params);
}

export function fetchStanding() {
  return axios.get(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/2`, params);
}

export function fetchBookmakerInfo(id) {
  return axios.get(`https://api-football-v1.p.rapidapi.com/v2/odds/league/${id}/bookmaker/6`, params);
}

export function fetchBookmakers() {
  return axios.get(`https://api-football-v1.p.rapidapi.com/v2/odds/bookmakers/`, params);
}