import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useGetCoinListQeury } from 'src/shared/api';
import { AppLink, Loader } from 'src/shared';
import { store } from 'src/shared/store';

import { TopCoinList } from '../TopCoinList/TopCoinList';
import { CoinList } from '../CoinList/CoinList';

import cn from 'classnames';
import styles from './CoinGrid.module.css';

interface CoinGridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CoinGrid = observer(({ className, ...props }: CoinGridProps): JSX.Element => {
	const { data, error, isLoading } = useGetCoinListQeury(100);

	useEffect(() => {
		if (data && store.coinCollection.length === 0) {
			store.appendCoinCollection(data.Data);
		}
	}, [data]);

	return (
		<main className={cn(styles.container, className)} {...props}>
			{isLoading && <Loader size="large" />}
			{error && <div>"Failed to fetch data"</div>}
			<TopCoinList />
			<div className={styles.navigation}>
				<AppLink
					className={cn(styles.confirm, {
						[styles.active]: store.isTopCollectionFull,
					})}
					to="/dashboard"
				>
					confirm favorites
				</AppLink>
				<input className={styles.searchInput} type="text" placeholder="search coin" />
			</div>
			<div className={styles.grid}>
				{data && !isLoading && !error && <CoinList coinList={store.coinCollection} />}
			</div>
		</main>
	);
});
