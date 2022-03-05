import { useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useWeb3 } from '../../contexts/useWeb3'

export default function ChainMenu() {

    const [chainID, setChainID] = useState('0x1')
    const { ethereum } = useWeb3()

    const changeNetwork = async(chainID) => {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: chainID }]
        }).then(res => { setChainID(chainID) })
    }

    useEffect(() => {
        if(ethereum == undefined) return
        setChainID(ethereum.chainId)
    }, [ethereum])

    return (
        <>
            {ethereum != undefined &&
                <Menu>
                    <MenuButton
                        px={3}
                        py={2}
                        transition='all 0.2s'
                        borderRadius='md'
                        borderWidth='1px'
                        _hover={{ bg: 'gray.400' }}
                        _expanded={{ bg: 'blue.400' }}
                        _focus={{ boxShadow: 'outline' }}
                    >
                        {chainID==='0x1' ? 'Ethereum' : chainID==='0x89' ? 'Polygon' : 'Chain is not Supported'} <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => changeNetwork('0x1')}>Ethereum</MenuItem>
                        <MenuItem onClick={() => changeNetwork('0x89')}>Polygon</MenuItem>
                    </MenuList>
                </Menu>
            }
        </>
    )
}