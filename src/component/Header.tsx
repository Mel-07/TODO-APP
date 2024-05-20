import sun_icon from '../assets/images/icon-sun.svg'
import moon_icon from '../assets/images/icon-moon.svg'
import { useContextProvider } from '../context/useAppContextProvider'

function Header() {
    const {themes,dispatch} = useContextProvider()
  return (
    <header className=' min-w-[100%]'>
        <nav className=' min-w-[100%] flex items-center  justify-between'>
        <div className=' font-josefinSans-Bold text-[2.5rem] text-light-theme-light-gray'><span>TODO</span></div>
        {
            themes === "light" ?  <button onClick={()=>{dispatch({type:'themes',check:true})}} type='button' className=' grid place-content-center'><img src={moon_icon} alt="theme switch" /></button>:<button onClick={()=>{dispatch({type:'themes',check:false})}} type='button' className=' grid place-content-center'><img src={sun_icon} alt="theme switch" /></button>
        }
        </nav>
    </header>
  )
}

export default Header
