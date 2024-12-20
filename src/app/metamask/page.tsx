'use client';
import Head from 'next/head'
import { ethers } from 'ethers';
import { useState } from 'react';

export default function MetamaskPage() {
  const chainIdHex = "0xAE97B"; 
  const [connected, setConnected] = useState(false); // отслеживает, подключен ли аккаунт

  async function handleClick() {
    if (typeof window === 'undefined' || typeof window.ethereum === 'undefined') {
      alert("MetaMask is not installed!");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);

    // Сначала проверяем, есть ли уже аккаунты
    try {
      const accounts = await provider.listAccounts();
      if (accounts.length === 0) {
        // Нет подключённых аккаунтов, запрашиваем доступ
        await provider.send("eth_requestAccounts", []);
        setConnected(true);
        alert("Wallet connected successfully!");
      } else {
        setConnected(true);
      }

      // Теперь пытаемся добавить и переключиться на сеть Zether
      try {
        await provider.send("wallet_addEthereumChain", [{
          chainId: chainIdHex,
          chainName: "Zether",
          rpcUrls: ["https://rpc.zether.org/"],
          blockExplorerUrls: ["https://zthscan.com/"],
          nativeCurrency: {
            name: "Zether",
            symbol: "ZTH",
            decimals: 18
          }
        }]);

        await provider.send("wallet_switchEthereumChain", [{ chainId: chainIdHex }]);
        alert("Zether network is now added and switched successfully!");
      } catch (networkError) {
        console.error("Error adding/switching network:", networkError);
        alert("Failed to add or switch to Zether network. See console for details.");
      }

    } catch (connectError) {
      if (connectError.code === 4001) {
        // Пользователь отклонил запрос на доступ к аккаунтам
        alert("You must connect your wallet to proceed.");
      } else {
        console.error("Unexpected error:", connectError);
        alert("Unexpected error occurred during wallet connection.");
      }
    }
  }

  return (
    <>
      <Head>
        <title>Add Zether to MetaMask</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/png" href="/img/logo.png"/>
      </Head>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: '100px', textAlign: 'center' }}>
        <img src="/img/text.png" style={{ maxHeight: '70px' }} alt="Zether"/>
        <h1>Add Zether to MetaMask</h1>
        
        <button className="button" onClick={handleClick}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"
            alt="Metamask Icon"
            style={{ verticalAlign: 'middle', height: '24px', width: '24px', marginRight: '8px' }}
          />
          Click to Add Zether
        </button>

        <p>Or use the configuration below to add the network manually:</p>
        <table style={{
          margin: 'auto',
          width: '50%',
          borderCollapse: 'collapse',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
          <tbody>
            <tr>
              <th style={{border: '1px solid #ddd', color: '#000', padding: '16px', textAlign: 'left', backgroundColor: '#5271FF', color: 'white', fontWeight: 'bold'}}>Property</th>
              <th style={{border: '1px solid #ddd', padding: '16px', textAlign: 'left', backgroundColor: '#5271FF', color: 'white', fontWeight: 'bold'}}>Value</th>
            </tr>
            <tr>
              <td style={{border: '1px solid #ddd', color: '#000', padding: '16px', fontSize: '17px'}}>Network name:</td>
              <td style={{border: '1px solid #ddd', padding: '16px', fontSize: '17px'}}>
                <code style={{ backgroundColor: '#5271FF1A', padding: '2px 4px', borderRadius: '3px', fontFamily: '"Courier New", Courier, monospace', color: '#111' }}>
                  Zether
                </code>
              </td>
            </tr>
            <tr>
              <td style={{border: '1px solid #ddd', color: '#000', padding: '16px', fontSize: '17px'}}>New RPC URL:</td>
              <td style={{border: '1px solid #ddd', padding: '16px', fontSize: '17px'}}>
                <code style={{backgroundColor: '#5271FF1A', padding: '2px 4px', borderRadius: '3px', fontFamily: '"Courier New", Courier, monospace', color: '#111'}}>
                  https://rpc.zether.org/
                </code>
              </td>
            </tr>
            <tr>
              <td style={{border: '1px solid #ddd', color: '#000', padding: '16px', fontSize: '17px'}}>Chain ID:</td>
              <td style={{border: '1px solid #ddd', padding: '16px', fontSize: '17px'}}>
                <code style={{backgroundColor: '#5271FF1A', padding: '2px 4px', borderRadius: '3px', fontFamily: '"Courier New", Courier, monospace', color: '#111'}}>
                  715131
                </code>
              </td>
            </tr>
            <tr>
              <td style={{border: '1px solid #ddd', color: '#000', padding: '16px', fontSize: '17px'}}>Currency symbol:</td>
              <td style={{border: '1px solid #ddd', padding: '16px', fontSize: '17px'}}>
                <code style={{backgroundColor: '#5271FF1A', padding: '2px 4px', borderRadius: '3px', fontFamily: '"Courier New", Courier, monospace', color: '#111'}}>
                  ZTH
                </code>
              </td>
            </tr>
            <tr>
              <td style={{border: '1px solid #ddd', color: '#000', padding: '16px', fontSize: '17px'}}>Block explorer URL:</td>
              <td style={{border: '1px solid #ddd', padding: '16px', fontSize: '17px'}}>
                <code style={{backgroundColor: '#5271FF1A', padding: '2px 4px', borderRadius: '3px', fontFamily: '"Courier New", Courier, monospace', color: '#111'}}>
                  https://zthscan.com/
                </code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <style jsx>{`
        .button {
          background-color: #5271FF;
          border-radius: 7px;
          font-weight: bold;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          font-size: 16px;
          margin: 20px;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
