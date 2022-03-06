import { useState } from 'react'
import LogRocket from 'logrocket';
import { ethers } from 'ethers'
import { ERC20, BPNUR, BNUR, CNDL } from '../../contracts'
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

LogRocket.init('tkw33l/cndl');

  export default function onBurn() {
    const { chainId } = useWeb3([])
    const [cndlAmount, setCndlAmount] = useState([''])
    const [burnMessage, setburnMessage] = useState([''])
    const [loading, setLoading] = useState(false);


    async function onApprove() {
        if (cndlAmount > 0) {
            const signer = web3.getSigner()
            const cndlContract = new ethers.Contract(CNDL[chainId].address, ERC20.abi, signer)
          await cndlContract.approve(BNUR[chainId].address, ethers.utils.parseUnits(cndlAmount, 18))
        }
      }

    async function onBurn() {
        if (cndlAmount > 0) {
            setLoading(true);
            fetch(burnMessage)
            fetch(cndlAmount)
              .then((res) => res.json())
              .then((burnMessage) => {
                setData(setburnMessage);
              })
              .then((cndlAmount) => {
                setData(setCndlAmount);
              })
              .catch((err) => {
                console.log(err);
              })
              .finally(() => {
                setLoading(false);
              });
            const signer = web3.getSigner()
            const burnerContract = new ethers.Contract(BNUR[chainId].address, BPNUR.abi, signer)
            await burnerContract.burnWithMessage(ethers.utils.parseUnits(cndlAmount, 18), burnMessage)
        }
    }

    if (loading) {
      return <p>Burning your CNDL and storing your confession, regret, or message into the blockchain forever...</p>;
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
