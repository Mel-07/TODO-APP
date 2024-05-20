import Header from "../component/Header"
import List from "../component/List"
import Search from "../component/Search"

function Main() {
  return (
    <main className="  min-h-[100dvh]  top-0 bottom-0 right-0 left-0  absolute">
        <div className=" mt-[.4rem] md:mt-[2.2rem]  mx-auto md:max-w-[35rem] flex-col px-[1.5rem] md:p-4">
            <Header/>
            <Search/>
            <List/>
        <div className=" flex  mt-7 items-end justify-center min-w-[100%]">
        </div>
        </div>
    </main>
  )
}

export default Main
