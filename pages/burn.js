import React, { useEffect, useState } from 'react'
import {
  Stat,
  StatLabel,
  StatNumber,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Image,
  Badge
} from '@chakra-ui/react'
import { Center } from '@chakra-ui/layout'

import Burn from '../components/burn'
import Page from '../components/page'

export default function BurnPage() {
  return (
    <Page title={'Burn a candle'}>
      <Center>
        <Flex
          flexDirection="column"
          w="100%"
          maxW={{ base: '100%', md: 960 }}
          mt={16}
          alignItems="flex-start"
        >
          <Burn />
        </Flex>
      </Center>
    </Page>
  )
}
