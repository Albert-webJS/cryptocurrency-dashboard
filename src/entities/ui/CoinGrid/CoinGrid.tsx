import { useEffect, useState } from "react";

import { ResponseData, getCoinList } from "src/shared/api";

import styles from './CoinGrid.module.css';
import { CoinCard } from "src/shared";

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
        <main className={styles.grid}>{data?.map(({ CoinInfo }) => (<CoinCard key={CoinInfo.Id}>{CoinInfo.Name}</CoinCard>))}</main>
    )
}