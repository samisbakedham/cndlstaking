import v3PoolABI from './univ3Pool.json'
import v3PositionsABI from './univ3Positions.json'
import v3StakerABI from './univ3Staker.json'
import batcherABI from './nftBatcher.json'
import erc20ABI from './erc20.json'
import bpABI from './burner.json'

export const v3Staker = {
  abi: v3StakerABI,
  address: '0x1f98407aaB862CdDeF78Ed252D6f557aA5b0f00d'
}
export const v3Positions = {
  abi: v3PositionsABI,
  address: '0xc36442b4a4522e871399cd717abdd847ab11fe88'
}
export const v3Pool = { abi: v3PoolABI }

export const ETH_USDC = {
  1: {
    abi: v3PoolABI,
    address: '0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8'
  },
  137: {
    abi: v3PoolABI,
    address: '0x45dda9cb7c25131df268515131f647d726f50608'
  }
}

export const BATCHER = {
  1: {
    abi: batcherABI,
    address: '0xF83eEE39E723526605d784917b6e38ebCF0f0207'
  },
  137: {
    abi: batcherABI,
    address: '0x43676E467781dC838C8F81C671c571179E38Aeed'
  }
}

export const ERC20 = {
  abi: erc20ABI
}

export const BPNUR = {
  abi: bpABI
}

export const BNUR = {
  1: {
    abi: bpABI,
    address: '0xf05DA838BCE31AA32F776b11a2De1B65AF15DbB6'
  },
  137: {
    abi: bpABI,
    address: '0xAb1eeDf9283760940b8c15256983E98C42A3E356'
  }
}

export const CNDL = {
  1: {
    abi: erc20ABI,
    address: '0xbc138bD20C98186CC0342C8e380953aF0cb48BA8'
  },
  137: {
    abi: erc20ABI,
    address: '0x5423063af146F5abF88Eb490486E6B53FA135eC9'
  }
}

export const WETH = {
  1: {
    abi: erc20ABI,
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  },
  137: {
    abi: erc20ABI,
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
  }
}
