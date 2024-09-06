import { Card } from 'antd'

const CityNotFoundCard = () => {
    return (
        <Card style={{ width: 300 }}>
            <div className='text-center'>
                <p className='text-2xl font-extrabold'>Does not Exist</p>
                <p className='text-xl'>Type a valid city name to get weekly forecast data</p>
            </div>
        </Card>
    )
}

export default CityNotFoundCard