import { useEffect} from "react"
import Main from "./page/Main"

function App() {
  useEffect(()=>{
    if (localStorage.themes === 'dark' || (!('themes' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.setItem('themes','dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('themes','light')
      document.documentElement.classList.remove('dark')
    }
  },[])

  return (
    <div className=' overflow-y-auto relative min-h-[100dvh] dark:bg-dark-theme-very-dark-blue bg-light-theme-very-light-grayish-blue grid grid-rows-[38%_1fr]'>
      <div className=" dark:bg-dark-theme-very-dark-blue bg-light-theme-very-light-grayish-blue bg-mobile-light dark:bg-mobile-dark md:dark:bg-desktop-dark md:bg-desktop-light bg-cover bg-center bg-no-repeat">
      </div>
      <Main/>
      <div className=" flex items-end justify-center dark:bg-dark-theme-very-dark-blue bg-light-theme-very-light-grayish-blue ">
      </div>
    </div>
  )
}

export default App
