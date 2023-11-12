I am doing this for a hackathon, which will end in about 10 hours, give me a detailed plan and tasks that will make me most likely to win the project. I have an existing project from the aptos block explorer, which I plan to for the zk scan, Suggest what can be modified. Also the scroll have a bounty for the hackathon, is ther a way that I can incorporate some of the elements into the project? It's fine if the answer is no too, I don't want to force fit my solution into it, but will be good if there are any too.

More info about the bounty:

Build a ZK dapp: $1,000

http://localhost:3000/account/0x8d2d7bcde13b2513617df3f98cdd5d0e4b9f714c6308b9204fe18ad900d92609/modules/code/payer?network=mainnet

2 PRIZES

Scroll is an EVM compatible, L2, zk rollup. The dev ex is the similar on Scroll as it is on Ethereum. Deploy your verifier smart contract, zk-usecases or anything related to zk on Scroll. It can be super-nerdy or super-useful.

Requirements:
Project contracts must be deployed on Scroll Sepolia and verified on the Scroll Etherscan.
Project must have a working flow
Project that excite us, include some of the following:
Solve a tangible problem or build a relevant use usecase
Provide value to developers/community in terms of public good
“super-nerdy” not necessarily product-market fit, but a cool geeky project

Judging criteria:
contracts must be deployed on Scroll Sepolia and verified on the Scroll Etherscan.

- UI done
  - display contract code
  - display contraints and metadata in simple way
  - show the zkeys
  - show the actual proof
  - have a verification button for reverifying it
  - have a disabled button for creating proof manually
  - search and query features based on address (need to figure this part out)
  - add beautiful graphs for the history
  - integrate with goerli
  - change images logos
- deploy contract on mantle (1 hr)
  - store the hash of zkeys, contract address, circom code for the verifier
- deploy to subdomain on zkHub (15 mins)
- Push code to github (15 mins)
- Write good docs (15 mins)
- Submit application for zkHack (45 mins)
  - Record video (15 mins)
  - make images (10 mins)
  - write text (10 mins)

Analytics
  - Number of proofs
  - Contraints
  - Error rate
  - Benchmarks/Cost

Circuits
  - Code
  - Info
    - zkeys
    - contraints
  - Prove
  - Verify
  - Contribute to Power of Tau
  - Static Analysis (coming soon)