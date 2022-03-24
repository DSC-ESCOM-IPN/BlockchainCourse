# Basic smart contract in the NEAR Protocol

## Pre-work 📋

- [Create a testent Wallet account](https://wallet.testnet.near.org/)
- [Instalar e inciar la NEAR CLI](https://docs.near.org/docs/tools/near-cli#installation)

## Starting 🚀

_You should clone the code to deploy the contract:_

```
git clone https://github.com/DSC-ESCOM-IPN/BlockchainCourse.git
```

_Now, go to this folder:_

```
cd helloworld
```

_After that, you should install the dependencies:_

```
yarn install
```

_Now you are ready to deploy your smart contract, first get the binary with:_

```
yarn build:debug
```

_Finally upload you contract to the blockchain:_

```
near dev-deploy build/debug/helloworld.wasm
```

## Test your contract 🔧

_To test your contract you need the account id given by the near dev-deploy command, this will be mentioned as CONTRACT_ID._

_To test the hello function:_

```
near view CONTRACT_ID hello
```

_To test the foreingGreet function:_

```
near view CONTRACT_ID foreingGreet '{"message":"Hola","person":"Paul"}'
```
