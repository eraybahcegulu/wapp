import { ColumnsType } from 'antd/es/table';
import { IData } from '../types';

export const cityTableColumns: ColumnsType<IData> = [
    {
        title: 'Day',
        key: 'day',
        render: (record: IData) => {
            const date = new Date(record.datetime);
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return days[date.getDay()];
        },
    },
    {
        title: 'Date',
        dataIndex: 'datetime',
        key: 'datetime',
        render: (datetime) => new Date(datetime).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }),
    },
    {
        title: 'Max Temperature (°C)',
        dataIndex: 'max_temp',
        key: 'max_temp',
    },
    {
        title: 'Min Temperature (°C)',
        dataIndex: 'min_temp',
        key: 'min_temp',
    },
];
