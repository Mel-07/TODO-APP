
import { useContextProvider } from "../context/useAppContextProvider"
import { KeyboardEvent } from "react"

function Search() {
  const {dispatch,items} = useContextProvider()
  const handleKeyEvent = (e:KeyboardEvent<HTMLInputElement>) =>{
    const eventTarget = e.currentTarget 
    if((e.key == 'Enter'|| e.code == 'Enter')){
      if( (eventTarget.value) !== ''){
        dispatch({type:'new todo',item:{
          id:items.length + 1,
          done:false,
          todo: eventTarget.value
        }})
      }
      eventTarget.value =''
    }
    return

  }
  return (
    <div className=" bg-light-theme-very-light-gray dark:bg-dark-theme-very-dark-desaturated-blue mb-4 mt-[2rem] rounded-md">
      <div className=" flex items-center px-[1.1rem] py-[.9rem]">
        <div className=" flex place-content-center"><button className=" w-[1.1rem] mr-[1.1rem] border-[.001rem] border-[#9394a5] dark:border-[#393a4c] h-[1.1rem] rounded-full "></button></div>
        <input  onKeyDown={handleKeyEvent} placeholder="Create a new todo..." type="text" className=" placeholder:font-josefinSans-Regular dark:bg-dark-theme-very-dark-desaturated-blue placeholder:text-light-theme-dark-grayish-blue dark:text-dark-theme-light-grayish-blue-hover text-light-theme-very-dark-grayish-blue w-full caret-[#3a7bfd] bg-light-theme-very-light-gray outline-none "/>
      </div>
    </div>
  )
}

export default Search
