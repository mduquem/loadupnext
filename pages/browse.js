import Stock from '../components/browse/stock';

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

   render() {
      return (
         <div>
            <div className='title'>
               <h3>Browse Trending Stocks</h3>
               {this.state.stocks.map((stock) => {
                  return <Stock key={stock.id} stock={stock} />;
               })}
            </div>
         </div>
      );
   }
}

export default Browse;
