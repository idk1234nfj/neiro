'use client';
import Head from 'next/head'
import { useEffect } from 'react'
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function Emission() {
  useEffect(() => {
    const blockRanges = [
      '100,000', '200,000', '300,000', '400,000', '500,000', 
      '600,000', '700,000', '800,000', '900,000', '1,000,000', 
      '1,100,000', '1,200,000', '1,300,000', '1,400,000', '1,500,000', 
      '1,600,000', '1,700,000', '1,800,000', '1,900,000', '2,000,000', 
      '2,100,000', '2,200,000', '2,300,000', '2,400,000', '2,500,000', 
      '2,600,000', '2,700,000', '2,800,000'
    ];
    
    const totalCoinsEmitted = [
      1000000000, 1900000000, 2700000000, 3400000000, 4000000000,
      4500000000, 4900000000, 5200000000, 5400000000, 5500000000,
      5590000000, 5670000000, 5740000000, 5800000000, 5850000000,
      5890000000, 5920000000, 5940000000, 5950000000, 5960000000,
      5967000000, 5973000000, 5978000000, 5983000000, 5987000000,
      5990000000, 5992000000, 5993000000
    ];

    const rewardPerBlock = [
      10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000,
      900, 800, 700, 600, 500, 400, 300, 200, 100, 90,
      80, 70, 60, 50, 40, 30, 20, 10
    ];

    const ctxSupply = document.getElementById('supplyChart').getContext('2d');
    new Chart(ctxSupply, {
      type: 'line',
      data: {
        labels: blockRanges,
        datasets: [{
          label: 'Total Coins Emitted (Miners)',
          data: totalCoinsEmitted,
          borderColor: '#5271FF',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Block Range'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Total Coins Emitted'
            }
          }
        }
      }
    });

    const ctxReward = document.getElementById('rewardChart').getContext('2d');
    new Chart(ctxReward, {
      type: 'line',
      data: {
        labels: blockRanges,
        datasets: [{
          label: 'Reward Per Block',
          data: rewardPerBlock,
          borderColor: '#FF7152',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Block Range'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Reward Per Block'
            }
          }
        }
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Zether Block Reward Table</title>
        <link rel="icon" type="image/png" href="/img/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zether" />
        <meta property="og:description" content="Decentralized Layer 1 EVM Blockchain Powered by Proof of Work." />
        <meta property="og:image" content="https://zether.org/img/card.png" />
        <meta property="og:url" content="https://zether.org/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zether" />
        <meta name="twitter:description" content="Zether - Decentralized Layer 1 EVM Blockchain Powered by Proof of Work." />
        <meta name="twitter:image" content="https://zether.org/img/card.png" />
        <meta name="twitter:site" content="@ZetherOrg" />
        <meta name="twitter:creator" content="@ZetherOrg" />
      </Head>
      <section className="block-reward">
        <h1>Zether Block Reward Table</h1>
        <table border="1">
          <tbody>
            <tr>
              <th>Block Range</th>
              <th>Weeks<br/>(Approximate)</th>
              <th>Reward Per Block<br/>(Miners)</th>
              <th>Total Coins Emitted<br/>(Miners)</th>
              <th>Foundation Fee<br/>(5%)</th>
              <th>Total Coins Emitted<br/>(With 5% Fee)</th>
            </tr>
            <tr>
              <td>1 - 100,000</td>
              <td>2</td>
              <td>10,000 coins</td>
              <td>1,000,000,000</td>
              <td>50,000,000</td>
              <td>1,050,000,000</td>
            </tr>
            <tr>
              <td>100,001 - 200,000</td>
              <td>4</td>
              <td>9,000 coins</td>
              <td>900,000,000</td>
              <td>45,000,000</td>
              <td>945,000,000</td>
            </tr>
            <tr>
              <td>200,001 - 300,000</td>
              <td>6</td>
              <td>8,000 coins</td>
              <td>800,000,000</td>
              <td>40,000,000</td>
              <td>840,000,000</td>
            </tr>
            <tr>
              <td>300,001 - 400,000</td>
              <td>8</td>
              <td>7,000 coins</td>
              <td>700,000,000</td>
              <td>35,000,000</td>
              <td>735,000,000</td>
            </tr>
            <tr>
              <td>400,001 - 500,000</td>
              <td>10</td>
              <td>6,000 coins</td>
              <td>600,000,000</td>
              <td>30,000,000</td>
              <td>630,000,000</td>
            </tr>
            <tr>
              <td>500,001 - 600,000</td>
              <td>12</td>
              <td>5,000 coins</td>
              <td>500,000,000</td>
              <td>25,000,000</td>
              <td>525,000,000</td>
            </tr>
            <tr>
              <td>600,001 - 700,000</td>
              <td>14</td>
              <td>4,000 coins</td>
              <td>400,000,000</td>
              <td>20,000,000</td>
              <td>420,000,000</td>
            </tr>
            <tr>
              <td>700,001 - 800,000</td>
              <td>16</td>
              <td>3,000 coins</td>
              <td>300,000,000</td>
              <td>15,000,000</td>
              <td>315,000,000</td>
            </tr>
            <tr>
              <td>800,001 - 900,000</td>
              <td>18</td>
              <td>2,000 coins</td>
              <td>200,000,000</td>
              <td>10,000,000</td>
              <td>210,000,000</td>
            </tr>
            <tr>
              <td>900,001 - 1,000,000</td>
              <td>20</td>
              <td>1,000 coins</td>
              <td>100,000,000</td>
              <td>5,000,000</td>
              <td>105,000,000</td>
            </tr>
            <tr>
              <td>1,000,001 - 1,100,000</td>
              <td>22</td>
              <td>900 coins</td>
              <td>90,000,000</td>
              <td>4,500,000</td>
              <td>94,500,000</td>
            </tr>
            <tr>
              <td>1,100,001 - 1,200,000</td>
              <td>24</td>
              <td>800 coins</td>
              <td>80,000,000</td>
              <td>4,000,000</td>
              <td>84,000,000</td>
            </tr>
            <tr>
              <td>1,200,001 - 1,300,000</td>
              <td>26</td>
              <td>700 coins</td>
              <td>70,000,000</td>
              <td>3,500,000</td>
              <td>73,500,000</td>
            </tr>
            <tr>
              <td>1,300,001 - 1,400,000</td>
              <td>28</td>
              <td>600 coins</td>
              <td>60,000,000</td>
              <td>3,000,000</td>
              <td>63,000,000</td>
            </tr>
            <tr>
              <td>1,400,001 - 1,500,000</td>
              <td>30</td>
              <td>500 coins</td>
              <td>50,000,000</td>
              <td>2,500,000</td>
              <td>52,500,000</td>
            </tr>
            <tr>
              <td>1,500,001 - 1,600,000</td>
              <td>32</td>
              <td>400 coins</td>
              <td>40,000,000</td>
              <td>2,000,000</td>
              <td>42,000,000</td>
            </tr>
            <tr>
              <td>1,600,001 - 1,700,000</td>
              <td>34</td>
              <td>300 coins</td>
              <td>30,000,000</td>
              <td>1,500,000</td>
              <td>31,500,000</td>
            </tr>
            <tr>
              <td>1,700,001 - 1,800,000</td>
              <td>36</td>
              <td>200 coins</td>
              <td>20,000,000</td>
              <td>1,000,000</td>
              <td>21,000,000</td>
            </tr>
            <tr>
              <td>1,800,001 - 1,900,000</td>
              <td>38</td>
              <td>100 coins</td>
              <td>10,000,000</td>
              <td>500,000</td>
              <td>10,500,000</td>
            </tr>
            <tr>
              <td>1,900,001 - 2,000,000</td>
              <td>40</td>
              <td>90 coins</td>
              <td>9,000,000</td>
              <td>450,000</td>
              <td>9,450,000</td>
            </tr>
            <tr>
              <td>2,000,001 - 2,100,000</td>
              <td>42</td>
              <td>80 coins</td>
              <td>8,000,000</td>
              <td>400,000</td>
              <td>8,400,000</td>
            </tr>
            <tr>
              <td>2,100,001 - 2,200,000</td>
              <td>44</td>
              <td>70 coins</td>
              <td>7,000,000</td>
              <td>350,000</td>
              <td>7,350,000</td>
            </tr>
            <tr>
              <td>2,200,001 - 2,300,000</td>
              <td>46</td>
              <td>60 coins</td>
              <td>6,000,000</td>
              <td>300,000</td>
              <td>6,300,000</td>
            </tr>
            <tr>
              <td>2,300,001 - 2,400,000</td>
              <td>48</td>
              <td>50 coins</td>
              <td>5,000,000</td>
              <td>250,000</td>
              <td>5,250,000</td>
            </tr>
            <tr>
              <td>2,400,001 - 2,500,000</td>
              <td>50</td>
              <td>40 coins</td>
              <td>4,000,000</td>
              <td>200,000</td>
              <td>4,200,000</td>
            </tr>
            <tr>
              <td>2,500,001 - 2,600,000</td>
              <td>52</td>
              <td>30 coins</td>
              <td>3,000,000</td>
              <td>150,000</td>
              <td>3,150,000</td>
            </tr>
            <tr>
              <td>2,600,001 - 2,700,000</td>
              <td>54</td>
              <td>20 coins</td>
              <td>2,000,000</td>
              <td>100,000</td>
              <td>2,100,000</td>
            </tr>
            <tr>
              <td>2,700,001 - 2,800,000</td>
              <td>56</td>
              <td>10 coins</td>
              <td>1,000,000</td>
              <td>50,000</td>
              <td>1,050,000</td>
            </tr>
            <tr>
              <th colSpan="3">Supply till 2,800,000 block</th>
              <th>5,995,000,000</th>
              <th>299,750,000</th>
              <th>6,294,750,000</th>
            </tr>
          </tbody>
        </table>

        <div className="chart-container">
          <canvas id="rewardChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="supplyChart"></canvas>
        </div>

        <div className="info">
          Yearly coin emission after block 2.8M is approximately 26M which makes inflation around 0.44%.
        </div>

        <div className="note">
          *This table is based on an average block time of ~12 seconds. The actual timing and coin emission may vary due to changes in block time.<br/><br/>
        </div>
      </section>

      <style jsx>{`
        body {
            font-family: 'Poppins', sans-serif;
            color: #000;
            background-color: #fff;
        }
        .block-reward {
            text-align: center;
            margin: 50px;
            background-color: white;
        }
        .block-reward h1 {
            font-size: 2em;
            font-weight: 700;
            color: #5271FF;
            margin-bottom: 40px;
        }
        .block-reward table {
            margin: auto;
            max-width: 90vw;
            border-collapse: collapse;
            background-color: #1a1a1a;
            border-radius: 10px;
            overflow: hidden;
            color: #fff;
            font-size: 17px;
        }
        .block-reward th, .block-reward td {
            padding: 10px;
            text-align: center;
        }
        .block-reward th {
            background-color: #5271FF;
        }
        .block-reward tr:nth-child(even) {
            background-color: #2a2a2a;
        }
        .block-reward .info {
            margin-top: 30px;
            font-size: 1em;
            color: #4F6BF0;
        }
        .block-reward .note {
            margin-top: 10px;
            font-size: 1em;
            color: #000;
            font-style: italic;
        }
        .chart-container {
            margin-top: 50px;
            max-width: 50vw;
            margin-left: auto;
            margin-right: auto;
            border: 2px solid #5271FF;
            border-radius: 10px;
            padding: 10px;
            background-color: #1a1a1a;
        }
        @media (max-width: 768px) {
            .chart-container {
                max-width: 90vw;
            }
            .block-reward table {
                max-width: 90vw;
            }
        }
      `}</style>
    </>
  )
}
