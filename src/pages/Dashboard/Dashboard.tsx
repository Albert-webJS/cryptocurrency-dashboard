import { observer } from 'mobx-react-lite';
import { store } from 'src/shared/store';

import cn from 'classnames';
import styles from './Dashboard.module.css';

export const Dashboard = observer((): JSX.Element => {
	return (
		<div className={cn(styles.container)}>
			{store.topCoinCollection.map((coin) => (
				<div key={coin.CoinInfo.Id}>
					<div>
						<span>{coin.DISPLAY.USD.FROMSYMBOL || coin.CoinInfo.Name}</span>
						<span className={cn(styles.status, {
							[styles.negative]: coin.DISPLAY.USD.CHANGE24HOUR < 0
						})}>{coin.DISPLAY.USD.CHANGE24HOUR}</span>
					</div>
					<div>
						{coin.DISPLAY.USD.PRICE}
					</div>
				</div>
			))}
		</div>
	);
});
