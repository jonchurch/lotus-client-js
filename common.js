module.exports = makeRequest => {
  // async function authVerify() {
  //   return makeRequest({ method: 'FileCoin.AuthVerify' });
  // }

  // async function authNew() {
  //   return makeRequest({
  //     method: 'FileCoin.AuthNew',
  //     params: [],
  //   });
  // }

  async function netConnectedness(address) {
    return makeRequest({
      method: 'Filecoin.NetConnectedness',
      params: [address],
    });
  }
  async function netPeers() {
    return makeRequest({ method: 'Filecoin.NetPeers' });
  }
  async function netConnect(address) {
    return makeRequest({
      method: 'Filecoin.NetConnect',
      params: [address],
    });
  }

  async function netAddrsListen() {
    return makeRequest({ method: 'Filecoin.NetAddrsListen', params: [] });
  }

  async function netDisconnect(address) {
    return makeRequest({
      method: 'Filecoin.NetDisconnect',
      params: [address],
    });
  }

  async function id() {
    return makeRequest({ method: 'Filecoin.ID' });
  }
  async function version() {
    return makeRequest({ method: 'Filecoin.Version' });
  }

  async function syncState() {
    return makeRequest({ method: 'Filecoin.SyncState' });
  }
  async function chainHead() {
    return makeRequest({ method: 'Filecoin.ChainHead' });
  }
  return {
    // authVerify,
    // authNew,
    netConnectedness,
    netPeers,
		netAddrsListen,
		netDisconnect,
		id,
		version,
		syncState,
		chainHead
  };
};
