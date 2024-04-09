import {Web3} from "web3"

export default async function configAndConnectWeb3(req,res) {
    const {walletId}=req.params
    console.log(walletId)
  const network = process.env.ETHEREUM_NETWORK;
   const web3 = new Web3(
    new Web3.providers.HttpProvider(
      `https://${process.env.ETHEREUM_NETWORK}.infura.io/v3/${process.env.INFURA_API_KEY}`,
    ),
  );
  
  const signer = web3.eth.accounts.privateKeyToAccount(
    process.env.METAMASK_PRIVATE_KEY
    // ,{
    //   ignoreLength: true,
    // }
  );
  web3.eth.accounts.wallet.add(signer);
//   console.log(await web3.eth.getAccounts())
 let balance=await web3.eth.getBalance(walletId)
  balance=web3.utils.fromWei(balance, 'ether')
//   console.log(re)
  res.status(201).json({
    "msg":"Successfully Retrived Balance",
    "balance":balance
  })
}
