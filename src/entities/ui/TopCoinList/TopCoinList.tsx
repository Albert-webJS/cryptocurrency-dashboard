import { observer } from 'mobx-react-lite';

import { store } from 'src/shared/store';

import { CoinCard } from '../CoinCard/CoinCard';

import styles from './TopCoinList.module.css';

export const TopCoinList = observer((): JSX.Element => {
	const handleClick = (id: string) => {
		const coin = store.topCoinCollection.find((coin) => coin.CoinInfo.Id === id);
		store.removeCoin(id, true);
		store.appendCoin(coin);
		console.log(store.coinCollection.length);
	};

	return (
		<div className={styles.toCoinGrid}>
			{store.topCoinCollection.length > 0 &&
				store.topCoinCollection.map((coin, index) => (
					<CoinCard
						favorites
						key={`${coin.CoinInfo.Id}${index}`}
						coin={coin}
						onClick={() => handleClick(coin.CoinInfo.Id)}
					/>
				))}
		</div>
	);
});
