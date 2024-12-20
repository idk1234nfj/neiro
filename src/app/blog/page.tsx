'use client';

// pages/blog.js
import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Zether Blog</title>
        <link rel="icon" type="image/png" href="/img/logo.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zether Blog" />
        <meta property="og:description" content="Explore insights and updates on Zether - Decentralized Layer 1 EVM Blockchain Powered by Proof of Work." />
        <meta property="og:image" content="https://zether.org/img/card.png" />
        <meta property="og:url" content="https://zether.org/blog" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zether Blog" />
        <meta name="twitter:description" content="Zether - Decentralized Layer 1 EVM Blockchain Powered by Proof of Work." />
        <meta name="twitter:image" content="https://zether.org/img/card.png" />
        <meta name="twitter:site" content="@ZetherOrg" />
        <meta name="twitter:creator" content="@ZetherOrg" />
      </Head>
      <div className="blog-content">
        <img src="/img/text.png" style={{ maxHeight: '70px' }} alt="Zether" />
        <h1>Zether Blog</h1>
        <p>Explore insights, updates, and articles on the Zether blockchain.</p>

        <ul className="blog-list">
          <li>
            <a href="7" target="_blank" rel="noreferrer">November Recap – A Month of Milestones and Growth</a>
            <p className="blog-description">A detailed recap of November 2024, highlighting the mainnet launch, exchange listings, mining pool support, and exciting developments like Z1Swap and the cross-chain bridge.</p>
            <p className="blog-date">Published on: December 1, 2024</p>
          </li>
          <li>
            <a href="6" target="_blank" rel="noreferrer">The Story Behind Zether – A Developer’s Passion for Crypto</a>
            <p className="blog-description">Discover the journey of Zether, created by a single passionate developer with extensive experience in crypto, driven by a vision to make a lasting mark in the blockchain world.</p>
            <p className="blog-date">Published on: November 25, 2024</p>
          </li>
          <li>
            <a href="5" target="_blank" rel="noreferrer">Why Zether Chose Proof of Work (PoW) and Will Always Remain PoW</a>
            <p className="blog-description">An in-depth look at Zether's dedication to Proof of Work, why PoW ensures true decentralization, and how it empowers the mining community sustainably.</p>
            <p className="blog-date">Published on: November 13, 2024</p>
          </li>
          <li>
            <a href="4" target="_blank" rel="noreferrer">Why Zether Has Infinite Supply</a>
            <p className="blog-description">An exploration of Zether's decision to implement an infinite supply model and how it ensures security, liquidity, and miner support in the long term.</p>
            <p className="blog-date">Published on: November 9, 2024</p>
          </li>
          <li>
            <a href="3" target="_blank" rel="noreferrer">Understanding the +5% Foundation Fee in Zether</a>
            <p className="blog-description">A detailed look at the 5% Foundation Fee, explaining its purpose, impact, and why it’s essential for Zether's sustainability without affecting miners’ rewards.</p>
            <p className="blog-date">Published on: November 3, 2024</p>
          </li>
          <li>
            <a href="2" target="_blank" rel="noreferrer">Zether’s Transparent and Fair Launch – A Community-Driven Start!</a>
            <p className="blog-description">An overview of Zether's commitment to a fair and open launch, highlighting transparency and community involvement from the very first block.</p>
            <p className="blog-date">Published on: November 1, 2024</p>
          </li>
          <li>
            <a href="1" target="_blank" rel="noreferrer">Why Proof-of-Work (PoW) Coins Tend to Decline in Value Over Time</a>
            <p className="blog-description">An analysis of traditional PoW coin models and how Zether’s unique emission model aims to prevent price declines.</p>
            <p className="blog-date">Published on: October 31, 2024</p>
          </li>
        </ul>
        <p><Link href="/">← Back to Home</Link></p>
      </div>
      <style jsx>{`
        .blog-content {
          font-family: Arial, sans-serif;
          margin: 50px;
          text-align: center;
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 10px;
        }
        h1 {
          font-size: 2em;
          color: #5271FF;
        }
        .blog-list {
          list-style-type: none;
          padding: 0;
          margin-top: 40px;
        }
        .blog-list li {
          background-color: white;
          margin: 15px 0;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: left;
        }
        .blog-list a {
          text-decoration: none;
          color: #5271FF;
          font-weight: bold;
          font-size: 1.2em;
        }
        .blog-list a:hover {
          text-decoration: underline;
        }
        .blog-description {
          font-size: 0.9em;
          color: #555;
          margin-top: 8px;
        }
        .blog-date {
          font-size: 0.8em;
          color: #888;
          margin-top: 4px;
          font-style: italic;
        }
      `}</style>
    </>
  )
}
