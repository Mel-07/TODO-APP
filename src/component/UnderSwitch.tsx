import { useContextProvider } from "../context/useAppContextProvider"

function UnderSwitch() {
  const {dispatch} = useContextProvider()
  return (
<div className=" dark:text-dark-theme-very-dark-grayish-blue  md:hidden justify-center flex rounded-md items-center px-[1.1rem] py-[.9rem] min-w-[100%] dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray mt-4 font-josefinSans-Bold text-[.8rem] ">
    <button onClick={()=>dispatch({type:'filter',completed:'all'})} className="dark:hover:text-dark-theme-light-grayish-blue-hover" type="button">All</button>
    <button onClick={()=>dispatch({type:'filter',completed:'active'})} className="dark:hover:text-dark-theme-light-grayish-blue-hover mx-[.8rem]" type="button">Active</button>
    <button onClick={()=>dispatch({type:'filter',completed:'completed'})} className="dark:hover:text-dark-theme-light-grayish-blue-hover" type="button">Completed</button>
</div>
  )
}

export default UnderSwitch
