import { useEffect, useState } from "react";

import { ResponseData, getCoinList } from "src/shared/api";
import { Loader } from "src/shared";

import { CoinCard } from "../CoinCard/CoinCard";

import styles from './CoinGrid.module.css';

export const CoinGrid = (): JSX.Element => {
    const [data, setData] = useState<ResponseData[] | null>(null);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const result = await getCoinList(100);
                setData(result.Data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return (
        <main className={styles.grid}>
            {data ? (data?.map(coin => (
                    <CoinCard key={coin.CoinInfo.Id} coin={coin}/>
                ))) : (<Loader size="small"/>)
             }
        </main>
    )
 }