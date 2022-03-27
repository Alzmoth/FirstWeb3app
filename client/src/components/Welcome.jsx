/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import Game from "./GameMine/game";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const [amounti, setAmount] = useState(0);

  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  useEffect(() => {
    setAmount((formData.amount * 10000000).toFixed(1));
  }, [formData.amount]);

  const handleSubmit = (e) => {
    const {
      addressTo = "0x5F33517625852dadA2ec96169EBb8EaE699BC972",
      amount,
      keyword = "game",
      message = "forgame",
    } = formData;
    e.preventDefault();

    if (!addressTo || !amount) return;

    sendTransaction();
  };

  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              This Application is created just for FUN.
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Made by M.Ali Nayir to find out web3. Running on ropsten testnet.
            </p>
            <p className="text-left mt-6 text-white font-light md:w-9/12 w-11/12 text-base">
              If you want to play with crypto money, follow the steps below.
            </p>
            <p className="text-left mt-6 text-white  md:w-9/12 w-11/12 font-semibold ">
              1) Connect to Metamask with the button below.
            </p>
            <p className="text-left mt-3 text-white  md:w-9/12 w-11/12 font-semibold ">
              2) Select to Ropsten Network on Metamask.
            </p>
            <p className="text-left mt-3 text-white  md:w-9/12 w-11/12 font-semibold ">
              3) If you dont have Eth on Ropsten Network, you can get free eth
              from this link {"=> "}
              <a href="https://faucet.egorfine.com">
                https://faucet.egorfine.com{" "}
              </a>{" "}
              .
            </p>
            <p className="text-left mt-3 text-white  md:w-9/12 w-11/12 font-semibold ">
              4) Finally, you can deposit any amount of eth from the form on the
              right or below.
            </p>
            {!currentAccount && (
              <button
                type="button"
                onClick={connectWallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-white text-base font-semibold">
                  Connect Wallet
                </p>
              </button>
            )}
          </div>
          <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <SiEthereum fontSize={21} color="#fff" />
                  </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                  <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <Input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                handleChange={handleChange}
              />
              <Input
                placeholder="ETM(ETH*1.000.000)"
                type="amount"
                value={amounti}
                name="keyword"
                handleChange={handleChange}
              />
              <Input
                placeholder="Enter Message"
                name="message"
                type="text"
                handleChange={handleChange}
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
            </div>
               </div>
        </div>
   
      </div>
      <div className="flex w-full justify-center items-center">
     
        <Game></Game>
      </div>
    </>
  );
};

export default Welcome;
