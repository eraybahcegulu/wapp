import { Card } from 'antd'

const SelectCityCard = () => {
    return (
        <Card style={{ width: 300 }}>
            <div className='text-center'>
                <p className='text-2xl font-extrabold'>Select a City</p>
                <p className='text-xl'>Search and select a city to see results. Try typing the first letters of the city you want.</p>
            </div>
        </Card>
    )
}

export default SelectCityCard