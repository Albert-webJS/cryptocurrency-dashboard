import { DetailedHTMLProps, HTMLAttributes } from "react";

import { ResponseData, useGetCoinListQeury } from "src/shared/api";
import { Loader } from "src/shared";

import { CoinCard } from "../CoinCard/CoinCard";

import cn from 'classnames';
import styles from './CoinGrid.module.css';
import { observer } from "mobx-react-lite";

interface CoinGridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    favorites?: boolean
}

export const CoinGrid = observer(({ className, favorites, ...props }: CoinGridProps): JSX.Element => {
    const { data } = useGetCoinListQeury() 

    const display = (coinList: ResponseData[] | null, section?: boolean) => {
        if (!coinList) return

        return Object.entries(coinList).map(([, coin]) => coin).slice(0, section ? 10 : 100)
    }

    console.log(data)

    return (
        <main className={cn(styles.grid, className)} {...props}>
            {data ? (display(data.Data, favorites)?.map(coin => (
                    <CoinCard className={cn({
                        [styles.favorites]: favorites
                    })} key={coin.CoinInfo.Id} coin={coin}/>
                ))) : (<Loader size="large"/>)
             }
        </main>
    )
 })