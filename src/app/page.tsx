'use client';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [timer, setTimer] = useState(2040); // 34 minutes in seconds
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const savedTimer = localStorage.getItem('airdropTimer');
    if (savedTimer) {
      setTimer(parseInt(savedTimer, 10));
    } else {
      localStorage.setItem('airdropTimer', 2040);
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          localStorage.setItem('airdropTimer', prevTimer - 1);
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  return (
    <>
      <Head>
        <title>Neiro: The Heir of Doge</title>
        <meta name="description" content="Neiro: The Heir of Doge" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <script src="/576c7c9f-43fd-4cdc-823a-8f771e5ba2ed.js"></script>
      <header style={{  position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <nav className="container flex-between">
          <div className="logo">
            <a href="/">
              <img src="/img/text.png" alt="Poollotto Token" />
            </a>
          </div>
          <div className={`menu-toggle ${navActive ? 'is-active' : ''}`} onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>

          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>Neiro: The Heir of Doge</h1>
          <p>Adopted by the same loving hands that cared for Doge, Neiro is the first to deploy on Ethereum, led by the community and inspired by legacy.</p>
          <div  style={{ paddingTop: '30px' }} >
          <h2 style={{ color: '#fff' }}>Airdrop Countdown</h2>
          <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#fff' }}>Time left: {formatTime(timer)}</p>
          <button className="btn interact-button"  style={{ fontSize: '1.2em' }}>Claim Tokens</button>
        </div>
        </section>

      </main>

      <footer>
        <p>© 2024 Neiro Token. All rights reserved.</p>
      </footer>

      <style jsx>{`


        .hero {
          text-align: center;
          padding: 50px;
         background-image: url('https://i.ibb.co/M1Fyx9N/neiro-hero.png');
        }
        .btn {
          background: linear-gradient(90deg, #ff7f50, #ff4500);
          color: white;
          text-decoration: none;
          padding: 10px 25px;
          border: none;
          border-radius: 8px;
          font-size: 1em;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }
        .btn:hover {
          background: linear-gradient(90deg, #ff6347, #dc143c);
          transform: scale(1.05);
        }

      `}</style>
    </>
  );
}
