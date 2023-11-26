import { action, makeObservable, observable } from 'mobx';
import { ResponseData } from '../api';

class Store {
    coinList: ResponseData[] = [];
    topCoinList: ResponseData[] = []

    constructor () {
       makeObservable(this, {
           coinList: observable,
           topCoinList: observable,
           addCoinList: action,
           addTopCoinList: action,
           removeCoin: action

       })
    }

    addCoinList(list: ResponseData[] |  undefined) {
       if (!list) return;

       this.coinList.push(...list)
    }

    addTopCoinList(coin: ResponseData | undefined) {
        if (!coin) return;

        this.topCoinList.push(coin)
    }

    removeCoin(id: string) {
        this.coinList = this.coinList.filter(coin => coin.CoinInfo.Id !== id)
    }

}

export const store = new Store()