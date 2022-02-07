//https://eth-ropsten.alchemyapi.io/v2/555SrG-MqC4r3rIg2EJn9vx-LiOMyoXt

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/555SrG-MqC4r3rIg2EJn9vx-LiOMyoXt",
      accounts: [
        "0c973b6491bd290104cdf84c336307d85578c8daa9dd7191b65522b21acd0bb5",
      ],
    },
  },
};
