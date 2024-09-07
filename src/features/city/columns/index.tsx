import { ColumnsType } from 'antd/es/table';
import { IData } from '../types';

export const cityTableColumns: ColumnsType<IData> = [
    {
        title: 'Days',
        key: 'day',
        render: (record: IData) => {
            const date = new Date(record.datetime);
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return days[date.getDay()];
        },
    },
    {
        title: 'Dates',
        dataIndex: 'datetime',
        key: 'datetime',
        render: (datetime) => new Date(datetime).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }),
    },
    {
        title: 'Lowest Temp.',
        dataIndex: 'min_temp',
        key: 'min_temp',
        render: (value: number) => `${value} °C`,
    },
    {
        title: 'Highest Temp.',
        dataIndex: 'max_temp',
        key: 'max_temp',
        render: (value: number) => `${value} °C`,
    },

];
