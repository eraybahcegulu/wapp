
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd'
const NotFoundPage = () => {

    const navigate = useNavigate();
    return (
        <div className='h-full flex justify-center items-center'>

            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button onClick={() => navigate('/home')} color='primary'>Home</Button>}
            />



        </div>
    )
}

export default NotFoundPage