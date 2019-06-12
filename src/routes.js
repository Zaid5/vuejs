import Home from './components/Home.vue';
import portfolio from './components/portfolio/portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
  {path: '/',component: Home},
  {path: '/portfolio',component: portfolio},
  {path: '/stocks',component: Stocks},
]

