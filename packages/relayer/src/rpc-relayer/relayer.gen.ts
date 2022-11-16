/* eslint-disable */
// sequence-relayer v0.4.0 dd44f90f38fc726a1f1430cfece544c3316f6b4f
// --
// Code generated by webrpc-gen@v0.7.0 with typescript generator. DO NOT EDIT.
//
// webrpc-gen -schema=relayer.ridl -target=typescript -client -out=./clients/relayer.gen.ts

// WebRPC description and code-gen version
export const WebRPCVersion = "v1"

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = "v0.4.0"

// Schema hash generated from your RIDL schema
export const WebRPCSchemaHash = "dd44f90f38fc726a1f1430cfece544c3316f6b4f"

//
// Types
//
export enum ETHTxnStatus {
  UNKNOWN = 'UNKNOWN',
  DROPPED = 'DROPPED',
  QUEUED = 'QUEUED',
  SENT = 'SENT',
  SUCCEEDED = 'SUCCEEDED',
  PARTIALLY_FAILED = 'PARTIALLY_FAILED',
  FAILED = 'FAILED'
}

export enum TransferType {
  SEND = 'SEND',
  RECEIVE = 'RECEIVE',
  BRIDGE_DEPOSIT = 'BRIDGE_DEPOSIT',
  BRIDGE_WITHDRAW = 'BRIDGE_WITHDRAW',
  BURN = 'BURN',
  UNKNOWN = 'UNKNOWN'
}

export enum FeeTokenType {
  UNKNOWN = 'UNKNOWN',
  ERC20_TOKEN = 'ERC20_TOKEN',
  ERC1155_TOKEN = 'ERC1155_TOKEN'
}

export enum SortOrder {
  DESC = 'DESC',
  ASC = 'ASC'
}

export interface Version {
  webrpcVersion: string
  schemaVersion: string
  schemaHash: string
  appVersion: string
}

export interface RuntimeStatus {
  healthOK: boolean
  startTime: string
  uptime: number
  ver: string
  branch: string
  commitHash: string
  senders: Array<SenderStatus>
  checks: RuntimeChecks
}

export interface SenderStatus {
  index: number
  address: string
  active: boolean
}

export interface RuntimeChecks {
}

export interface SequenceContext {
  factory: string
  mainModule: string
  mainModuleUpgradable: string
  guestModule: string
  utils: string
}

export interface WalletConfig {
  address: string
  signers: Array<WalletSigner>
  threshold: number
  chainId?: number
}

export interface WalletSigner {
  address: string
  weight: number
}

export interface GasSponsor {
  id: number
  address: string
  name: string
  active: boolean
  updatedAt: string
  createdAt: string
}

export interface GasSponsorUsage {
  name: string
  id: number
  totalGasUsed: number
  totalTxnFees: number
  avgGasPrice: number
  totalTxns: number
  startTime: string
  endTime: string
}

export interface MetaTxn {
  walletAddress: string
  contract: string
  input: string
}

export interface MetaTxnLog {
  id: number
  txnHash: string
  txnNonce: string
  metaTxnID?: string
  txnStatus: ETHTxnStatus
  txnRevertReason: string
  requeues: number
  queuedAt: string
  sentAt: string
  minedAt: string
  target: string
  input: string
  txnArgs: {[key: string]: any}
  txnReceipt?: {[key: string]: any}
  walletAddress: string
  metaTxnNonce: string
  gasLimit: number
  gasPrice: string
  gasUsed: number
  isWhitelisted: boolean
  gasSponsor?: number
  updatedAt: string
  createdAt: string
}

export interface MetaTxnEntry {
  id: number
  metaTxnID: string
  txnStatus: ETHTxnStatus
  txnRevertReason: string
  index: number
  logs?: Array<any>
  updatedAt: string
  createdAt: string
}

export interface MetaTxnReceipt {
  id: string
  status: string
  revertReason?: string
  index: number
  logs: Array<MetaTxnReceiptLog>
  receipts: Array<MetaTxnReceipt>
  txnReceipt: string
}

export interface MetaTxnReceiptLog {
  address: string
  topics: Array<string>
  data: string
}

export interface Transaction {
  txnHash?: string
  blockNumber: number
  chainId: number
  metaTxnID?: string
  transfers?: Array<TxnLogTransfer>
  users?: {[key: string]: TxnLogUser}
  timestamp: string
}

export interface TxnLogUser {
  username: string
}

export interface TxnLogTransfer {
  transferType: TransferType
  contractAddress: string
  from: string
  to: string
  ids: Array<string>
  amounts: Array<string>
}

export interface SentTransactionsFilter {
  pending?: boolean
  failed?: boolean
}

export interface SimulateResult {
  executed: boolean
  succeeded: boolean
  result?: string
  reason?: string
  gasUsed: number
  gasLimit: number
}

export interface FeeOption {
  token: FeeToken
  to: string
  value: string
  gasLimit: number
}

export interface FeeToken {
  chainId: number
  name: string
  symbol: string
  type: FeeTokenType
  decimals?: number
  logoURL: string
  contractAddress?: string
  originAddress?: string
  tokenID?: string
}

export interface Page {
  pageSize?: number
  page?: number
  totalRecords?: number
  column?: string
  before?: any
  after?: any
  sort?: Array<SortBy>
}

export interface SortBy {
  column: string
  order: SortOrder
}

export interface Relayer {
  ping(headers?: object): Promise<PingReturn>
  version(headers?: object): Promise<VersionReturn>
  runtimeStatus(headers?: object): Promise<RuntimeStatusReturn>
  getSequenceContext(headers?: object): Promise<GetSequenceContextReturn>
  getChainID(headers?: object): Promise<GetChainIDReturn>
  sendMetaTxn(args: SendMetaTxnArgs, headers?: object): Promise<SendMetaTxnReturn>
  getMetaTxnNonce(args: GetMetaTxnNonceArgs, headers?: object): Promise<GetMetaTxnNonceReturn>
  getMetaTxnReceipt(args: GetMetaTxnReceiptArgs, headers?: object): Promise<GetMetaTxnReceiptReturn>
  simulate(args: SimulateArgs, headers?: object): Promise<SimulateReturn>
  updateMetaTxnGasLimits(args: UpdateMetaTxnGasLimitsArgs, headers?: object): Promise<UpdateMetaTxnGasLimitsReturn>
  feeTokens(headers?: object): Promise<FeeTokensReturn>
  feeOptions(args: FeeOptionsArgs, headers?: object): Promise<FeeOptionsReturn>
  getMetaTxnNetworkFeeOptions(args: GetMetaTxnNetworkFeeOptionsArgs, headers?: object): Promise<GetMetaTxnNetworkFeeOptionsReturn>
  sentTransactions(args: SentTransactionsArgs, headers?: object): Promise<SentTransactionsReturn>
  pendingTransactions(args: PendingTransactionsArgs, headers?: object): Promise<PendingTransactionsReturn>
  listGasSponsors(args: ListGasSponsorsArgs, headers?: object): Promise<ListGasSponsorsReturn>
  addGasSponsor(args: AddGasSponsorArgs, headers?: object): Promise<AddGasSponsorReturn>
  updateGasSponsor(args: UpdateGasSponsorArgs, headers?: object): Promise<UpdateGasSponsorReturn>
  reportGasSponsorUsage(args: ReportGasSponsorUsageArgs, headers?: object): Promise<ReportGasSponsorUsageReturn>
}

export interface PingArgs {
}

export interface PingReturn {
  status: boolean  
}
export interface VersionArgs {
}

export interface VersionReturn {
  version: Version  
}
export interface RuntimeStatusArgs {
}

export interface RuntimeStatusReturn {
  status: RuntimeStatus  
}
export interface GetSequenceContextArgs {
}

export interface GetSequenceContextReturn {
  data: SequenceContext  
}
export interface GetChainIDArgs {
}

export interface GetChainIDReturn {
  chainID: number  
}
export interface SendMetaTxnArgs {
  call: MetaTxn
  quote?: string
}

export interface SendMetaTxnReturn {
  status: boolean
  txnHash: string  
}
export interface GetMetaTxnNonceArgs {
  walletContractAddress: string
  space?: string
}

export interface GetMetaTxnNonceReturn {
  nonce: string  
}
export interface GetMetaTxnReceiptArgs {
  metaTxID: string
}

export interface GetMetaTxnReceiptReturn {
  receipt: MetaTxnReceipt  
}
export interface SimulateArgs {
  wallet: string
  transactions: string
}

export interface SimulateReturn {
  results: Array<SimulateResult>  
}
export interface UpdateMetaTxnGasLimitsArgs {
  walletAddress: string
  walletConfig: WalletConfig
  payload: string
}

export interface UpdateMetaTxnGasLimitsReturn {
  payload: string  
}
export interface FeeTokensArgs {
}

export interface FeeTokensReturn {
  isFeeRequired: boolean
  tokens: Array<FeeToken>  
}
export interface FeeOptionsArgs {
  wallet: string
  to: string
  data: string
}

export interface FeeOptionsReturn {
  options: Array<FeeOption>
  quote?: string  
}
export interface GetMetaTxnNetworkFeeOptionsArgs {
  walletConfig: WalletConfig
  payload: string
}

export interface GetMetaTxnNetworkFeeOptionsReturn {
  options: Array<FeeOption>  
}
export interface SentTransactionsArgs {
  filter?: SentTransactionsFilter
  page?: Page
}

export interface SentTransactionsReturn {
  page: Page
  transactions: Array<Transaction>  
}
export interface PendingTransactionsArgs {
  page?: Page
}

export interface PendingTransactionsReturn {
  page: Page
  transactions: Array<Transaction>  
}
export interface ListGasSponsorsArgs {
  page?: Page
}

export interface ListGasSponsorsReturn {
  page: Page
  gasSponsors: Array<GasSponsor>  
}
export interface AddGasSponsorArgs {
  address: string
  name?: string
  active?: boolean
}

export interface AddGasSponsorReturn {
  status: boolean
  gasSponsor: GasSponsor  
}
export interface UpdateGasSponsorArgs {
  address: string
  name?: string
  active?: boolean
}

export interface UpdateGasSponsorReturn {
  status: boolean
  gasSponsor: GasSponsor  
}
export interface ReportGasSponsorUsageArgs {
  startTime?: string
  endTime?: string
}

export interface ReportGasSponsorUsageReturn {
  gasSponsorUsage: Array<GasSponsorUsage>  
}


  
//
// Client
//
export class Relayer implements Relayer {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Relayer/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init)
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }
  
  ping = (headers?: object): Promise<PingReturn> => {
    return this.fetch(
      this.url('Ping'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status)
        }
      })
    })
  }
  
  version = (headers?: object): Promise<VersionReturn> => {
    return this.fetch(
      this.url('Version'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          version: <Version>(_data.version)
        }
      })
    })
  }
  
  runtimeStatus = (headers?: object): Promise<RuntimeStatusReturn> => {
    return this.fetch(
      this.url('RuntimeStatus'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <RuntimeStatus>(_data.status)
        }
      })
    })
  }
  
  getSequenceContext = (headers?: object): Promise<GetSequenceContextReturn> => {
    return this.fetch(
      this.url('GetSequenceContext'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          data: <SequenceContext>(_data.data)
        }
      })
    })
  }
  
  getChainID = (headers?: object): Promise<GetChainIDReturn> => {
    return this.fetch(
      this.url('GetChainID'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          chainID: <number>(_data.chainID)
        }
      })
    })
  }
  
  sendMetaTxn = (args: SendMetaTxnArgs, headers?: object): Promise<SendMetaTxnReturn> => {
    return this.fetch(
      this.url('SendMetaTxn'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          txnHash: <string>(_data.txnHash)
        }
      })
    })
  }
  
  getMetaTxnNonce = (args: GetMetaTxnNonceArgs, headers?: object): Promise<GetMetaTxnNonceReturn> => {
    return this.fetch(
      this.url('GetMetaTxnNonce'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          nonce: <string>(_data.nonce)
        }
      })
    })
  }
  
  getMetaTxnReceipt = (args: GetMetaTxnReceiptArgs, headers?: object): Promise<GetMetaTxnReceiptReturn> => {
    return this.fetch(
      this.url('GetMetaTxnReceipt'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          receipt: <MetaTxnReceipt>(_data.receipt)
        }
      })
    })
  }
  
  simulate = (args: SimulateArgs, headers?: object): Promise<SimulateReturn> => {
    return this.fetch(
      this.url('Simulate'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          results: <Array<SimulateResult>>(_data.results)
        }
      })
    })
  }
  
  updateMetaTxnGasLimits = (args: UpdateMetaTxnGasLimitsArgs, headers?: object): Promise<UpdateMetaTxnGasLimitsReturn> => {
    return this.fetch(
      this.url('UpdateMetaTxnGasLimits'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          payload: <string>(_data.payload)
        }
      })
    })
  }
  
  feeTokens = (headers?: object): Promise<FeeTokensReturn> => {
    return this.fetch(
      this.url('FeeTokens'),
      createHTTPRequest({}, headers)
      ).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          isFeeRequired: <boolean>(_data.isFeeRequired), 
          tokens: <Array<FeeToken>>(_data.tokens)
        }
      })
    })
  }
  
  feeOptions = (args: FeeOptionsArgs, headers?: object): Promise<FeeOptionsReturn> => {
    return this.fetch(
      this.url('FeeOptions'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          options: <Array<FeeOption>>(_data.options), 
          quote: <string>(_data.quote)
        }
      })
    })
  }
  
  getMetaTxnNetworkFeeOptions = (args: GetMetaTxnNetworkFeeOptionsArgs, headers?: object): Promise<GetMetaTxnNetworkFeeOptionsReturn> => {
    return this.fetch(
      this.url('GetMetaTxnNetworkFeeOptions'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          options: <Array<FeeOption>>(_data.options)
        }
      })
    })
  }
  
  sentTransactions = (args: SentTransactionsArgs, headers?: object): Promise<SentTransactionsReturn> => {
    return this.fetch(
      this.url('SentTransactions'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page), 
          transactions: <Array<Transaction>>(_data.transactions)
        }
      })
    })
  }
  
  pendingTransactions = (args: PendingTransactionsArgs, headers?: object): Promise<PendingTransactionsReturn> => {
    return this.fetch(
      this.url('PendingTransactions'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page), 
          transactions: <Array<Transaction>>(_data.transactions)
        }
      })
    })
  }
  
  listGasSponsors = (args: ListGasSponsorsArgs, headers?: object): Promise<ListGasSponsorsReturn> => {
    return this.fetch(
      this.url('ListGasSponsors'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>(_data.page), 
          gasSponsors: <Array<GasSponsor>>(_data.gasSponsors)
        }
      })
    })
  }
  
  addGasSponsor = (args: AddGasSponsorArgs, headers?: object): Promise<AddGasSponsorReturn> => {
    return this.fetch(
      this.url('AddGasSponsor'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          gasSponsor: <GasSponsor>(_data.gasSponsor)
        }
      })
    })
  }
  
  updateGasSponsor = (args: UpdateGasSponsorArgs, headers?: object): Promise<UpdateGasSponsorReturn> => {
    return this.fetch(
      this.url('UpdateGasSponsor'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          status: <boolean>(_data.status), 
          gasSponsor: <GasSponsor>(_data.gasSponsor)
        }
      })
    })
  }
  
  reportGasSponsorUsage = (args: ReportGasSponsorUsageArgs, headers?: object): Promise<ReportGasSponsorUsageReturn> => {
    return this.fetch(
      this.url('ReportGasSponsorUsage'),
      createHTTPRequest(args, headers)).then((res) => {
      return buildResponse(res).then(_data => {
        return {
          gasSponsorUsage: <Array<GasSponsorUsage>>(_data.gasSponsorUsage)
        }
      })
    })
  }
  
}

  
export interface WebRPCError extends Error {
  code: string
  msg: string
	status: number
}

const createHTTPRequest = (body: object = {}, headers: object = {}): object => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {})
  }
}

const buildResponse = (res: Response): Promise<any> => {
  return res.text().then(text => {
    let data
    try {
      data = JSON.parse(text)
    } catch(err) {
      throw { code: 'unknown', msg: `expecting JSON, got: ${text}`, status: res.status } as WebRPCError
    }
    if (!res.ok) {
      throw data // webrpc error response
    }
    return data
  })
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
