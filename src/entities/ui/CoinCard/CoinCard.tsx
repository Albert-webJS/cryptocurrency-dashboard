import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import { CoinImage } from "src/shared";
import { ResponseData, srcImage } from "src/shared/api";

import cn from 'classnames';
import styles from './CoinCard.module.css';

interface CoinCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    coin: ResponseData
}

export const CoinCard: FC<CoinCardProps> = ({ className, coin, ...props}): JSX.Element => {
    const { CoinInfo, DISPLAY } = coin;

    return (
        <div className={cn(styles.card, className)} {...props}>
                <div className={styles.coinHeader}>
                    <span className={styles.coinName}>
                        {DISPLAY?.USD.FROMSYMBOL || CoinInfo.Name}
                    </span>
                    <span className={styles.price}>
                        {DISPLAY?.USD.PRICE || '#'}
                    </span>
                </div>
                <CoinImage className={styles.coinImage} coin={CoinInfo} src={srcImage}/>
        </div>
    )
}