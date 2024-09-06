
import axiosInstance from "@/lib/axios";
import { IGetCityService } from "../../types";

export const getCityService = async ({ cityName, apiKey }: IGetCityService) => {
    return axiosInstance.get(`forecast/daily?city=${cityName},TR&days=7&key=${apiKey}`);
};
