const stock = ({ stock }) => (
   <div className='bg-background-gray flex'>
      <div className='flex flex-column'>
         <h2>{stock.symbol}</h2>
         <p>{stock.name}</p>
      </div>
      <div>
         <ul>
            {stock.lastWeekData.map((day) => {
               return <li>{day.price}</li>;
            })}
         </ul>
      </div>
      <div className='flex'>
         <div>{stock.price}</div>
         <div>{stock.lastWeekProfit}</div>
      </div>
   </div>
);

export default stock;
