const { EtherscanProvider } = require("@ethersproject/providers")

require("@nomiclabs/hardhat-waffle")
require("dotenv").config() //sirve para usar el fichero .env
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number") //tarea hecha por nosotros
require("hardhat-gas-reporter") //mira cuanto gas cuesta cada funcion de nuestro contrato
require("solidity-coverage") //permite ver que partes de nuestro contrato estan cuviertas por test

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby" //el or que estamos poniendo es para evitar errores de hardhat
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
        },
        localhost: {
            //ejecuta yarn hardhat node para ver los parametros alli
            url: "http://127.0.0.1:8545/",
            //accounts: las pone hardhat directamente
            chainId: 31337,
        },
    },
    solidity: "0.8.8",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true, //si quieres que deje de ejecutarse lo pones en false
        outputFile: "gas-report.txt",
        noColors: true, //por que al exportarlo a un fichero los colores pueden dar problemas
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC", //si quieres ver cuanto costaria en la red de matic
    },
}
