import { TiWeatherSnow } from 'react-icons/ti'
import { LOGO_TEXT } from '../constants/staticInfos'

const Header = () => {
    return (
        <div className='bg-slate-400'>
            <div className='container mx-auto flex flex-row justify-between p-[2%] text-white text-xl items-center'>
                <div>
                    <span>{LOGO_TEXT}</span>
                </div>

                <div>
                    <TiWeatherSnow />
                </div>
            </div>


        </div>
    )
}

export default Header