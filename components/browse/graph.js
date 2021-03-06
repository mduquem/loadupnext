import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import Layout from './layout';
import theme from './theme';

const data = [
   { quarter: 1, earnings: 13000 },
   { quarter: 2, earnings: 16500 },
   { quarter: 3, earnings: 14250 },
   { quarter: 4, earnings: 19000 },
];

class Graph extends React.Component {
   render() {
      return (
         <Layout>
            <VictoryChart
               // adding the material theme provided with Victory
               theme={theme}
               domainPadding={20}
            >
               <VictoryAxis
                  tickValues={[1, 2, 3, 4]}
                  tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
               />
               <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
               <VictoryBar data={data} x='quarter' y='earnings' />
            </VictoryChart>
         </Layout>
      );
   }
}

export default Graph;
