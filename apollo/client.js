import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const uniswapClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const uniswapPolygonClient = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-polygon',
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  })

export const candleClient = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/candleplatforms/candlegovernor',
    }),
    cache: new InMemoryCache(),
    shouldBatch: true,
  })