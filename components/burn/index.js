import { useState } from 'react'
import { ethers } from 'ethers'
import { ERC20, burnerPolygon, CNDL } from '../../contracts'
import {
    Button,
    Heading,
    Input,
    Stack,
    Text,
    Textarea
  } from '@chakra-ui/react'
  import { web3 } from '../../utils/ethers'
  import { useWeb3 } from '../../contexts/useWeb3'
  
  export default function Burn() {
    const { chainId } = useWeb3()
    const [cndlAmount, setCndlAmount] = useState('')
    const [burnMessage, setburnMessage] = useState('')


    async function onApprove() {
        if (cndlAmount > 0) {
            const signer = web3.getSigner()
            const cndlContract = new ethers.Contract(CNDL[chainId].address, ERC20.abi, signer)
          await cndlContract.approve(burnerPolygon[chainId].address, ethers.utils.parseUnits(cndlAmount, 18))
        }
      }
    
    async function onBurn() {
        if (cndlAmount > 0) {
            const signer = web3.getSigner()
            const burnerContract = new ethers.Contract(burnerPolygon[chainId].address, burnerPolygon.abi, signer)
            await burnerContract.burnWithMessage(
            ethers.utils.parseUnits(cndlAmount, 18),
            burnMessage
            )
        }
    }


    return (
      <>
        <Heading ml="4" mt="16" mb="4" size="md">
          Burn your CNDL
        </Heading>
        <Text>CNDL Amount:</Text>
        <Input
            value={cndlAmount}
            onChange={e => setCndlAmount(e.target.value)}
            placeholder="CNDL amount"
        />
        <Text>Message:</Text>
        <Textarea
            value={burnMessage}
            onChange={e => setburnMessage(e.target.value)}
            placeholder="Note down your message"
        />

        <Stack direction='row' spaceing={4}>
            <Button onClick={onApprove} colorScheme='blue'>Approve</Button>
            <Button onClick={onBurn} colorScheme='blue'>Burn</Button>
        </Stack>
      </>
    )
  }
  