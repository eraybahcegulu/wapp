export type ICity = {
    city_name: string;
    country_code: string;
    data: IData[];
};

export type IData = {
    max_temp: number;
    min_temp: number;
    datetime: string;
    temp: number;
    weather: IWeather;
};

export type IWeather = {
    code: number;
    icon: string;
    description: string;
};

export type IGetCityService = {
    cityName: string;
    apiKey: string;
}