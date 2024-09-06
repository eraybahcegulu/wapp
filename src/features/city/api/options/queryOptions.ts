import { getCityService } from "../services.ts";
import { QueryConfig } from "@/lib/react-query";

export type GetCityQuery = typeof getCityService;

export type IGetCityQueryOptions = {
    cityName: string;
    apiKey: string;
    config?: QueryConfig<GetCityQuery>;

};