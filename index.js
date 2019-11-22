const fetch = require('node-fetch');
const uuidv4 = require('uuid/v4');

const common = require('./common');
const full = require('./full');

function createClient({ url }) {
  const API_BASE = url;
  // let _fetch = fetch;
  // if (global.window && window.fetch) {
  //   _fetch = window.fetch;
  // }
  if (!url) {
    // API_BASE = '127.0.0.0.1:1234/rpc/v0';
    throw new Error('Url is required by lotus client');
  }
  async function makeRequest(payload) {
    try {
      const res = await fetch(`${API_BASE}`, {
        method: 'post',
        body: JSON.stringify({ id: uuidv4(), ...payload }),
      });
      const { result, error } = await res.json();
      if (error) {
        throw new Error(error.message);
      }
      return result;
    } catch (err) {
      throw err;
    }
  }
  return {
    common: common(makeRequest),
    full: full(makeRequest),
  };
}

module.exports = createClient;
