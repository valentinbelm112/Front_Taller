const BASE_URL = 'http://localhost:8000';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
  
}

const api = {
  badges: {
    list() {
      return callApi('/core/horario');
    },
    create(badge) {
      return callApi(`/core/horario`, {
        method: 'POST',
        body: JSON.stringify(badge),
      });
    },
    read(badgeId) {
      return callApi(`/badges/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/core/aula/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    update1(badgeId, updates) {
      return callApi(`/core/curso/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/core/curso/${badgeId}`, {
        method: 'DELETE',
      });
      
    },
    remove1(badgeId) {
      return callApi(`/core/aula/${badgeId}`, {
        method: 'DELETE',
      });
      
    },
    remove2(badgeId) {
      return callApi(`/core/horario/${badgeId}`, {
        method: 'DELETE',
      });
      
    },  
  },
};

export default api;
