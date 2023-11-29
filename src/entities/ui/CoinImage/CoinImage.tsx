import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { CoinInfo } from 'src/shared/api';

import cn from 'classnames';
import styles from './CoinImage.module.css';

interface CoinImageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	coin: CoinInfo;
	src: string;
}

export const CoinImage = ({ className, coin, src, ...props }: CoinImageProps) => {
	return (
		<img
			className={cn(styles.image, className)}
			alt={coin.Name}
			src={`${src}${coin.ImageUrl}`}
			{...props}
			loading="lazy"
		/>
	);
};
