module.exports = makeRequest => {
  async function chainNotify() {
    return makeRequest({ method: 'Filecoin.ChainNotify' });
  }
  async function chainHead() {
    return makeRequest({ method: 'Filecoin.ChainHead' });
  }
  async function chainGetRandomness() {
    return makeRequest({ method: 'Filecoin.ChainGetRandomnes' });
  }

  async function chainGetBlock(cid) {
    return makeRequest({ method: 'Filecoin.ChainGetBlock', params: [cid] });
  }
  async function chainGetTipSet(tipSetKey) {
    return makeRequest({
      method: 'Filecoin.ChainGetTipSet',
      params: [tipSetKey],
    });
  }

  return {
    chainNotify,
    chainHead,
    chainGetRandomness,
    chainGetBlock,
    chainGetTipSet,
  };
  //	ChainGetBlock(context.Context, cid.Cid) (*types.BlockHeader, error)
  //	ChainGetTipSet(context.Context, types.TipSetKey) (*types.TipSet, error)
  //	ChainGetBlockMessages(context.Context, cid.Cid) (*BlockMessages, error)
  //	ChainGetParentReceipts(context.Context, cid.Cid) ([]*types.MessageReceipt, error)
  //	ChainGetParentMessages(context.Context, cid.Cid) ([]Message, error)
  //	ChainGetTipSetByHeight(context.Context, uint64, *types.TipSet) (*types.TipSet, error)
  //	ChainReadObj(context.Context, cid.Cid) ([]byte, error)
  //	ChainSetHead(context.Context, *types.TipSet) error
  //	ChainGetGenesis(context.Context) (*types.TipSet, error)
  //	ChainTipSetWeight(context.Context, *types.TipSet) (types.BigInt, error)

  //	// syncer
  //	SyncState(context.Context) (*SyncState, error)
  //	SyncSubmitBlock(ctx context.Context, blk *types.BlockMsg) error
  //	SyncIncomingBlocks(ctx context.Context) (<-chan *types.BlockHeader, error)

  //	// messages
  //	MpoolPending(context.Context, *types.TipSet) ([]*types.SignedMessage, error)
  //	MpoolPush(context.Context, *types.SignedMessage) error                          // TODO: remove
  //	MpoolPushMessage(context.Context, *types.Message) (*types.SignedMessage, error) // get nonce, sign, push
  //	MpoolGetNonce(context.Context, address.Address) (uint64, error)
  //	MpoolSub(context.Context) (<-chan MpoolUpdate, error)

  //	// FullNodeStruct

  //	// miner

  //	MinerRegister(context.Context, address.Address) error
  //	MinerUnregister(context.Context, address.Address) error
  //	MinerAddresses(context.Context) ([]address.Address, error)
  //	MinerCreateBlock(context.Context, address.Address, *types.TipSet, []*types.Ticket, types.ElectionProof, []*types.SignedMessage, uint64) (*types.BlockMsg, error)

  //	// // UX ?

  //	// wallet

  //	WalletNew(context.Context, string) (address.Address, error)
  //	WalletHas(context.Context, address.Address) (bool, error)
  //	WalletList(context.Context) ([]address.Address, error)
  //	WalletBalance(context.Context, address.Address) (types.BigInt, error)
  //	WalletSign(context.Context, address.Address, []byte) (*types.Signature, error)
  //	WalletSignMessage(context.Context, address.Address, *types.Message) (*types.SignedMessage, error)
  //	WalletDefaultAddress(context.Context) (address.Address, error)
  //	WalletSetDefault(context.Context, address.Address) error
  //	WalletExport(context.Context, address.Address) (*types.KeyInfo, error)
  //	WalletImport(context.Context, *types.KeyInfo) (address.Address, error)

  //	// Other

  //	// ClientImport imports file under the specified path into filestore
  //	ClientImport(ctx context.Context, path string) (cid.Cid, error)
  //	ClientStartDeal(ctx context.Context, data cid.Cid, miner address.Address, epochPrice types.BigInt, blocksDuration uint64) (*cid.Cid, error)
  //	ClientGetDealInfo(context.Context, cid.Cid) (*DealInfo, error)
  //	ClientListDeals(ctx context.Context) ([]DealInfo, error)
  //	ClientHasLocal(ctx context.Context, root cid.Cid) (bool, error)
  //	ClientFindData(ctx context.Context, root cid.Cid) ([]QueryOffer, error)
  //	ClientRetrieve(ctx context.Context, order RetrievalOrder, path string) error
  //	ClientQueryAsk(ctx context.Context, p peer.ID, miner address.Address) (*types.SignedStorageAsk, error)

  //	// ClientUnimport removes references to the specified file from filestore
  //	//ClientUnimport(path string)

  //	// ClientListImports lists imported files and their root CIDs
  //	ClientListImports(ctx context.Context) ([]Import, error)

  //	//ClientListAsks() []Ask

  //	// if tipset is nil, we'll use heaviest
  //	StateCall(context.Context, *types.Message, *types.TipSet) (*types.MessageReceipt, error)
  //	StateReplay(context.Context, *types.TipSet, cid.Cid) (*ReplayResults, error)
  //	StateGetActor(ctx context.Context, actor address.Address, ts *types.TipSet) (*types.Actor, error)
  //	StateReadState(ctx context.Context, act *types.Actor, ts *types.TipSet) (*ActorState, error)

  //	StateMinerSectors(context.Context, address.Address, *types.TipSet) ([]*ChainSectorInfo, error)
  //	StateMinerProvingSet(context.Context, address.Address, *types.TipSet) ([]*ChainSectorInfo, error)
  //	StateMinerPower(context.Context, address.Address, *types.TipSet) (MinerPower, error)
  //	StateMinerWorker(context.Context, address.Address, *types.TipSet) (address.Address, error)
  //	StateMinerPeerID(ctx context.Context, m address.Address, ts *types.TipSet) (peer.ID, error)
  //	StateMinerProvingPeriodEnd(ctx context.Context, actor address.Address, ts *types.TipSet) (uint64, error)
  //	StateMinerSectorSize(context.Context, address.Address, *types.TipSet) (uint64, error)
  //	StatePledgeCollateral(context.Context, *types.TipSet) (types.BigInt, error)
  //	StateWaitMsg(context.Context, cid.Cid) (*MsgWait, error)
  //	StateListMiners(context.Context, *types.TipSet) ([]address.Address, error)
  //	StateListActors(context.Context, *types.TipSet) ([]address.Address, error)
  //	StateMarketBalance(context.Context, address.Address, *types.TipSet) (actors.StorageParticipantBalance, error)
  //	StateMarketParticipants(context.Context, *types.TipSet) (map[string]actors.StorageParticipantBalance, error)
  //	StateMarketDeals(context.Context, *types.TipSet) (map[string]actors.OnChainDeal, error)
  //	StateMarketStorageDeal(context.Context, uint64, *types.TipSet) (*actors.OnChainDeal, error)
  //	StateLookupID(context.Context, address.Address, *types.TipSet) (address.Address, error)
  //	StateChangedActors(context.Context, cid.Cid, cid.Cid) (map[string]types.Actor, error)
  //	StateGetReceipt(context.Context, cid.Cid, *types.TipSet) (*types.MessageReceipt, error)

  //	MarketEnsureAvailable(context.Context, address.Address, types.BigInt) error
  //	// MarketFreeBalance

  //	PaychGet(ctx context.Context, from, to address.Address, ensureFunds types.BigInt) (*ChannelInfo, error)
  //	PaychList(context.Context) ([]address.Address, error)
  //	PaychStatus(context.Context, address.Address) (*PaychStatus, error)
  //	PaychClose(context.Context, address.Address) (cid.Cid, error)
  //	PaychAllocateLane(ctx context.Context, ch address.Address) (uint64, error)
  //	PaychNewPayment(ctx context.Context, from, to address.Address, vouchers []VoucherSpec) (*PaymentInfo, error)
  //	PaychVoucherCheckValid(context.Context, address.Address, *types.SignedVoucher) error
  //	PaychVoucherCheckSpendable(context.Context, address.Address, *types.SignedVoucher, []byte, []byte) (bool, error)
  //	PaychVoucherCreate(context.Context, address.Address, types.BigInt, uint64) (*types.SignedVoucher, error)
  //	PaychVoucherAdd(context.Context, address.Address, *types.SignedVoucher, []byte, types.BigInt) (types.BigInt, error)
  //	PaychVoucherList(context.Context, address.Address) ([]*types.SignedVoucher, error)
  //	PaychVoucherSubmit(context.Context, address.Address, *types.SignedVoucher) (cid.Cid, error)
};
