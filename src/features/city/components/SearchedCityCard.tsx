import { Card, CardBody, } from "@nextui-org/react";
import { useGetCity } from '../api/queries';
import { useCityStore } from '@/zustand/SearchedCityStore';

import LoadingSpinner from '@/components/LoadingSpinner';
import CityNotFoundCard from './CityNotFoundCard';
import SelectCityCard from './SelectCityCard';


const SearchedCityCard = () => {
    const { cityName } = useCityStore();


    const { data: city, isLoading, isSuccess } = useGetCity({ cityName, apiKey: '8d58ede05e7e4ab4bd91d0d5700b243d' });
    if (isSuccess && !cityName) return < SelectCityCard />
    if (isLoading) return <LoadingSpinner />
    if (!city || !city.data) return <CityNotFoundCard />

    console.log(city)
    return (

        <Card className="py-4">
            <CardBody className="overflow-visible py-2">
                <div className='flex flex-col items-center gap-10 justify-center text-center'>
                    <div>
                        <p className='text-5xl text-blue-700'>{city.data.data[0].temp} °C</p>

                    </div>

                    <div>
                        <p className="text-2xl font-extrabold">{city.data.city_name}</p>
                        <p>
                            {new Date(city.data.data[0].datetime).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                            })}, {new Date(city.data.data[0].datetime).toLocaleDateString('en-US', {
                                weekday: 'long',
                            })}
                        </p>
                    </div>

                    <div className='flex flex-row justify-center items-center gap-2'>

                        <img className='w-8' src={`https://www.weatherbit.io/static/img/icons/${city.data.data[0].weather.icon}.png`} alt={city.data.data[0].weather.description} />
                        <p className="text-green-800">{city.data.data[0].weather.description}</p>
                    </div>
                </div>
            </CardBody>
        </Card>


    )
}

export default SearchedCityCard