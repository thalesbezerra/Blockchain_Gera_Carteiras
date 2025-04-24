/*
//Importando as depedencias
const bip39 = require('bip39')
const bip32 = require('bip32')
const bitcoin = require('bitcoinjs-lib')

//Vamos definir a rede
//bitcoin - rede principal - mainnet
//testnet - rede de teste - testnet
const network = bitcoin.networks.testnet

//Vamos criar nosso caminho de derivação
//Vamos trabalhar com uma carteira HD deterministica
//derivaçãõ de carteira HD
const path = `m/44'/1'/0'/0`

//Criando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

//criando uma conta - par de chave pvt-pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

//Gerando um endereço
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Carteira gerada")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ", node.toWIF())
console.log("Seed", mnemonic)
*/

const bip39 = require('bip39')
const bip32 = require('bip32')
const bitcoin = require('bitcoinjs-lib')

const network = bitcoin.networks.testnet
const path = `m/44'/1'/0'/0/0`

const mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)
const root = bip32.fromSeed(seed, network)
const node = root.derivePath(path)

const { address } = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,
})

console.log("Endereço:", address)
console.log("PrivKey:", node.toWIF())
console.log("Mnemonic:", mnemonic)

