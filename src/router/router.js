import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeMain from '../views/HomeMain';
import SubLayout from '../views/SubLayout';
import CategoryList from '../views/CategoryList';
import CategoryDetail from '../views/CategoryDetail';
import OrderCart from '../views/OrderCart';
import OrderForm from '../views/OrderForm';
import OrderComplete from '../views/OrderComplete';
import TempDetail from '../views/TempDetail';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history', 
	routes: [
		{path: '/', component: HomeMain},
		{path: '/main/detail/:id', component: TempDetail,},
		{path: '/prod', component: SubLayout,
			children:[
				{
					path: 'list',
					name: 'categoryList',
					component: CategoryList,
				},
				{
					path: 'detail',
					name: 'categoryDetail',
					component: CategoryDetail,
				}
			]
		},
		{path: '/order/cart', name: 'ordCart', component: OrderCart,},
		{path: '/order/form', name: 'ordForm', component: OrderForm},
		{path: '/order/complete', component: OrderComplete},
	],
});

export default router;