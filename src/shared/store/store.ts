import { action, computed, makeObservable, observable } from 'mobx';
import { ResponseData } from '../api';

class Store {
	coinCollection: ResponseData[] = [];
	topCoinCollection: ResponseData[] = [];

	constructor() {
		makeObservable(this, {
			coinCollection: observable,
			topCoinCollection: observable,
			isTopCollectionFull: computed,
			appendCoinCollection: action,
			appendCoin: action,
			removeCoin: action,
		});
	}

	get isTopCollectionFull(): boolean {
		return this.topCoinCollection.length === 10;
	}

	appendCoinCollection(list: ResponseData[] | undefined): void {
		if (!list) return;

		this.coinCollection.push(...list);
	}

	appendCoin(coin: ResponseData | undefined, isFavorites?: boolean): void {
		if (!coin) return;

		if (!isFavorites) this.coinCollection.push(coin);
		else {
			this.topCoinCollection.push(coin);
		}
	}

	removeCoin(id: string, isFavorites: boolean = false): void {
		if (!isFavorites)
			this.coinCollection = this.coinCollection.filter((coin) => coin.CoinInfo.Id !== id);
		else {
			this.topCoinCollection = this.topCoinCollection.filter((coin) => coin.CoinInfo.Id !== id);
		}
	}
}

export const store = new Store();
