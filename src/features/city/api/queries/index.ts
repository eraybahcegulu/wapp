import { useQuery } from "react-query";
import {  GetCityQuery, IGetCityQueryOptions } from "../options/queryOptions";
import { getCityService } from "../services.ts";
import { ExtractFnReturnType } from "@/lib/react-query.ts";


export const useGetCity = ({ cityName, apiKey, config }: IGetCityQueryOptions) => {
    return useQuery<ExtractFnReturnType<GetCityQuery>>({
        ...config,
        queryKey: ['city', cityName],
        queryFn: () => getCityService({ cityName, apiKey }),
    });
};