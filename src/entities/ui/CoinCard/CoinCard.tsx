import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { observer } from 'mobx-react-lite';
import { store } from 'src/shared/store';

import { ResponseData, srcImage } from 'src/shared/api';

import { CoinImage } from '../CoinImage/CoinImage';

import cn from 'classnames';
import styles from './CoinCard.module.css';

interface CoinCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	coin: ResponseData;
	favorites?: boolean;
}

export const CoinCard: FC<CoinCardProps> = observer(
	({ className, coin, favorites, ...props }): JSX.Element => {
		const { CoinInfo, DISPLAY } = coin;

		return (
			<div
				className={cn(styles.card, className, {
					[styles.favorites]: favorites,
					[styles.event]: store.isTopCollectionFull,
				})}
				{...props}
			>
				<div className={styles.coinHeader}>
					<span className={styles.coinName}>{DISPLAY?.USD.FROMSYMBOL || CoinInfo.Name}</span>
					<span className={styles.price}>{DISPLAY?.USD.PRICE || '#'}</span>
				</div>
				<CoinImage className={styles.coinImage} coin={CoinInfo} src={srcImage} />
			</div>
		);
	},
);
