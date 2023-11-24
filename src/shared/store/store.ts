import { action, makeObservable, observable } from 'mobx';
import { ResponseData } from '../api';

class Store {
    coinList: ResponseData[] = []

    constructor () {
       makeObservable(this, {
           coinList: observable,
           addCoinList: action,
           removeCoin: action

       })
    }

    addCoinList(list: ResponseData[]) {
       this.coinList.push(...list)
    }

    removeCoin(id: string) {
        this.coinList = this.coinList.filter(list => list.CoinInfo.Id !== id)
    }

}

export const store = new Store()