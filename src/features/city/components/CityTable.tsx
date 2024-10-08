import { Table } from 'antd';
import { cityTableColumns } from '../columns';
import { useGetCity } from '../api/queries';
import { useSearchedCityStore } from '@/zustand/SearchedCityStore';
import { useSelectedCityStore } from '@/zustand/SelectedCityStore';

import CityNotFoundImage from './CityNotFoundImage';
import SelectCityImage from './SelectCityImage';
import LoadingSpinner from '@/components/LoadingSpinner';
import { API_KEY } from '@/config';


const CityTable: React.FC = () => {
    const { cityName } = useSearchedCityStore();
    const { setSelectedDay } = useSelectedCityStore();

    const { data: city, isLoading, isSuccess } = useGetCity({ cityName, apiKey: API_KEY});

    if (isSuccess && !cityName) return <SelectCityImage />
    if (isLoading) return <LoadingSpinner />
    if (!city || !city.data) return <CityNotFoundImage />




    return (
        <div className="flex flex-col border-1 p-4 gap-4">
        <div>
            <span className="font-extrabold">Weather Forecaster for {city.data.city_name}</span>
        </div>
        <Table
            pagination={false}
            columns={cityTableColumns}
            dataSource={city.data.data}
            rowKey="datetime"
            onRow={(_, index) => {
                return {
                    onClick: () => {
                        if (index !== undefined) {
                            setSelectedDay(index);
                        }
                    },
                };
            }}
        />
    </div>
    );
};

export default CityTable;
