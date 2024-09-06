import { TiWeatherSnow } from 'react-icons/ti'
import { LOGO_TEXT } from '../constants/staticInfos'

const Header = () => {
    return (
        <div className='bg-[#296573]'>
            <div className='container mx-auto flex flex-row justify-between py-4 text-white text-xl items-center'>
                <div>
                    <span>{LOGO_TEXT}</span>
                </div>

                <div>
                    <TiWeatherSnow className='text-5xl' />
                </div>
            </div>


        </div>
    )
}

export default Header