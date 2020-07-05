import Head from 'next/head';
import Stock from '../components/browse/stock';
import Graph from '../components/browse/graph';
import PieChart from '../components/browse/pieChart';
import StockGraph from '../components/browse/stockGraph';

import BrowsePopup from '../components/browse/browsePopup';

class Browse extends React.Component {
   state = {
      stocks: [
         {
            id: 1,
            symbol: 'AAPL',
            name: 'Apple Inc.',
            price: 206.13,
            lastWeekProfit: 0.25,
            lastWeekData: [
               { price: 100 },
               { price: 102.4 },
               { price: 94 },
               { price: 92 },
               { price: 56 },
               { price: 30 },
               { price: 30 },
               { price: 30 },
            ],
         },
      ],
   };

   static async getInitialProps() {
      // ALPACA DATA ENDPOINTS
      // LAST TRADE https://data.alpaca.markets/v1/last/stocks/AAPL
      // LIST OF BARS https://data.alpaca.markets/v1/bars/5Min
      // ALPACA API CONFIG FOR BACKEND, NOT HERE
      // headers: {
      //    'APCA-API-KEY-ID': 'PK3L0HI0AC2RAPI0MBUM',
      //    'APCA-API-SECRET-KEY': 'Hck54PoG5nztDxjcSM/ELY3OucAf5sOdA2Mt9YKL',
      // },
      const symbols = 'AAPL',
         dateRange = 'day';
      const endpoint = `https://data.alpaca.markets/v1/bars/${dateRange}?symbols=${symbols}`;

      try {
         const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
               'APCA-API-KEY-ID': 'PK3L0HI0AC2RAPI0MBUM',
               'APCA-API-SECRET-KEY': 'Hck54PoG5nztDxjcSM/ELY3OucAf5sOdA2Mt9YKL',
            },
         });
         const data = await response.json();
         console.log('data', data);
         return {
            data,
         };
      } catch (error) {}
   }

   render() {
      return (
         <div>
            <Head>
               <meta property='type' content='app' />
               <meta property='title' content='Load Up Today' />
               <meta property='description' content='Browse Stocks Today' />
               <title>Browse Stocks</title>
            </Head>
            <div className='title'>
               <h3>Browse Trending Stocks</h3>
               <div className='max-w-full md:max-w-md md:flex'>
                  {' '}
                  <PieChart />
                  <Graph />
                  <StockGraph />
               </div>

               {this.state.stocks.map((stock) => {
                  return <Stock key={stock.id} stock={stock} />;
               })}
               <BrowsePopup />
            </div>
         </div>
      );
   }
}

export default Browse;
