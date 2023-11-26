import { observer } from "mobx-react-lite"
import { CoinCard } from "src/entities/ui/CoinCard/CoinCard"
import { store } from "src/shared/store"

export const Dashboard = observer((): JSX.Element => {
    return (
        <div>{store.topCoinList.map(coin => (<CoinCard key={coin.CoinInfo.Id} coin={coin} />))}</div>
    )
})