import { useQuery } from "react-query";
import {  GetCityQuery, IGetCityQueryOptions } from "../options/queryOptions";
import { getCityService } from "../services.ts";
import { ExtractFnReturnType } from "@/lib/react-query.ts";


export const useGetCity = ({ cityName, apiKey, config }: IGetCityQueryOptions) => {
    return useQuery<ExtractFnReturnType<GetCityQuery>>({
        ...config,
        queryKey: ['city', cityName],
        cacheTime: 60000, // 60 saniye sonra cache'den silinir
        queryFn: () => getCityService({ cityName, apiKey }),
    });
};