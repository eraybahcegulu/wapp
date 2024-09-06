import { Card } from 'antd'

const CityNotFoundCard = () => {
    return (
        <Card style={{ width: 300 }}>
         

                <p>Does not Exist</p>
                <p>Type a valid city name to get weekly forecast data</p>
           
        </Card>
    )
}

export default CityNotFoundCard