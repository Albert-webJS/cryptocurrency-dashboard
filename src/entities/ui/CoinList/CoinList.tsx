import { observer } from 'mobx-react-lite';

import { ResponseData } from 'src/shared/api';

import { CoinCard } from '../CoinCard/CoinCard';
import { store } from 'src/shared/store';

interface CoinListProps {
	coinList: ResponseData[];
}

export const CoinList = observer(({ coinList }: CoinListProps): JSX.Element => {
	const handleClick = (id: string) => {
		const coin = store.coinCollection.find((coin) => coin.CoinInfo.Id === id);
		store.removeCoin(id);
		store.appendCoin(coin, true);
	};

	return (
		<>
			{coinList.map((coin, index) => (
				<CoinCard
					onClick={() => handleClick(coin.CoinInfo.Id)}
					key={`${coin.CoinInfo.Id}${index}`}
					coin={coin}
				/>
			))}
		</>
	);
});
