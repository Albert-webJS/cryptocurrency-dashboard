import { observer } from "mobx-react-lite";

import { store } from "src/shared/store";

import { CoinCard } from "../CoinCard/CoinCard";

import styles from './TopCoinList.module.css';

export const TopCoinList = observer((): JSX.Element => {
       return (
            <div className={styles.toCoinGrid}>
                {store.topCoinList.length > 0 &&
                    store.topCoinList.map((coin, index) => (
                        <CoinCard favorites key={`${coin.CoinInfo.Id}${index}`} coin={coin} />
                    ))
                }
            </div>
       )
})