import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";

import { ResponseData, getCoinList } from "src/shared/api";
import { Loader } from "src/shared";

import { CoinCard } from "../CoinCard/CoinCard";

import cn from 'classnames';
import styles from './CoinGrid.module.css';

interface CoinGridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    favorites?: boolean
}

export const CoinGrid = ({ className, favorites, ...props }: CoinGridProps): JSX.Element => {
    const [coinList, setCoinList] = useState<ResponseData[] | null>(null);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const result = await getCoinList(100);
                setCoinList(result.Data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    const display = (coinList: ResponseData[] | null, section?: boolean) => {
        if (!coinList) return

        return Object.entries(coinList).map(([, coin]) => coin).slice(0, section ? 10 : 100)
    }

    return (
        <main className={cn(styles.grid, className)} {...props}>
            {coinList ? (display(coinList, favorites)?.map(coin => (
                    <CoinCard className={cn({
                        [styles.favorites]: favorites
                    })} key={coin.CoinInfo.Id} coin={coin}/>
                ))) : (<Loader size="large"/>)
             }
        </main>
    )
 }