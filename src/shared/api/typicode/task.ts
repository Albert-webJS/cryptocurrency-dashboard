import { instance } from "./base";
import { ResponseType } from './models';

export const getCoinList = async (limit: number = 10, tsym: string = 'USD' ): Promise<ResponseType> => {
    const response = await instance.get<ResponseType>(`/data/top/totalvolfull?limit=${limit}&tsym=${tsym}`);
  
    return response.data;
}