import { Table } from 'antd';
import { cityTableColumns } from '../columns';
import { useGetCity } from '../api/queries';
import { useCityStore } from '@/zustand/SearchedCityStore';

import CityNotFoundImage from './CityNotFoundImage';
import SelectCityImage from './SelectCityImage';
import LoadingSpinner from '@/components/LoadingSpinner';


const CityTable: React.FC = () => {
    const { cityName } = useCityStore();

    const { data: city, isLoading, isSuccess } = useGetCity({ cityName, apiKey: '8d58ede05e7e4ab4bd91d0d5700b243d' });
    
    if (isSuccess && !cityName) return <SelectCityImage/>
    if (isLoading) return <LoadingSpinner/>
    if (!city || !city.data) return <CityNotFoundImage/>




    return (
        <div>
            <Table
                pagination={false}
                columns={cityTableColumns}
                dataSource={city.data.data}
                rowKey="datetime"
            />

        </div>
    );
};

export default CityTable;
