import React from 'react';
import BalancePanel from './BalancePanel';
import BanknotePanel from './BanknotePanel';
import PurchasedProductList from './PurchasedProductList';

const Sidebar = (
	() => (
		<section className="sidebar">
			<BalancePanel />
			<BanknotePanel banknotes={[0.5,1,2,5]} />
			<PurchasedProductList />
		</section>
	)
);

export default Sidebar;
