const fetch = require('node-fetch');

const API_BASE = 'http://127.0.0.1:1234/rpc/v0';

async function makeRequest(payload) {
  try {
    const res = await fetch(`${API_BASE}`, {
      method: 'post',
      body: JSON.stringify({ id: 0, ...payload }),
    });
    const { result } = await res.json();
    return result;
  } catch (err) {
    throw err;
  }
}

async function version() {
  const res = await makeRequest({
    method: 'Filecoin.Version',
    params: [],
    id: 0,
  });
  return res.json();
}

async function netPeers() {
  return makeRequest({ method: 'Filecoin.NetPeers' });
}

async function id() {
  return makeRequest({ method: 'Filecoin.ID' });
}
async function syncState() {
  return makeRequest({ method: 'Filecoin.SyncState' });
}
async function chainHead() {
  return makeRequest({ method: 'Filecoin.ChainHead' });
}

// version()
// netPeers()
// id()
// syncState()
chainHead()
  .then(console.log)
  .catch(console.log);
