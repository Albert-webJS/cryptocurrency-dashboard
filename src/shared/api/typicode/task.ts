import { UseQueryOptions, useQuery } from 'react-query';
import { instance } from './base';
import { ResponseType } from './models';
import { AxiosError } from 'axios';

export const GET_COIN_LIST_QEURY_KEY = 'GET_COIN_LIST_QEURY';
export const useGetCoinListQeury = (
	limit: number = 10,
	tsym: string = 'USD',
	options: UseQueryOptions<ResponseType, AxiosError> = {},
) => {
	return useQuery<ResponseType, AxiosError>(
		[GET_COIN_LIST_QEURY_KEY, limit, tsym],
		async () => {
			const response = await instance.get(`/data/top/totalvolfull?limit=${limit}&tsym=${tsym}`);
			return response.data;
		},
		{
			staleTime: Infinity,
			...options,
		},
	);
};
