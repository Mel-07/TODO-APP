
import check_icon from '../assets/images/icon-check.svg'
import cross_x from '../assets/images/icon-cross.svg'
import UnderSwitch from "./UnderSwitch"
import BottomText from "./BottomText"
import {
    DragDropContext,
    Droppable,
    Draggable,
  } from "react-beautiful-dnd";
import { useContextProvider } from "../context/useAppContextProvider"


function List() {
    const {items,dispatch,completed} = useContextProvider()
    const itemNumber = items.filter((v)=>(!v.done && items.length))

    // functions
    const handleCheck = (i:number)=>{
        dispatch({type:"check",tick:i})
    }
    console.log(completed)

  return (
    <div className=" ">
        <div className="dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray  rounded-md">
            <DragDropContext onDragEnd={(result)=>{dispatch({type:"drag-end",result})}}>
                <Droppable droppableId='listOFItems'>
                    {
                        (provided)=>(
                        <ul ref={provided.innerRef} {...provided.droppableProps}  className="  font-josefinSans-Regular">
                            {
                        completed === 'all'?items.map((v,i)=>(
                            <Draggable key={v.id}  draggableId={v.id.toString()} index={i}>                                            
                            {(provided)=>(
                                    <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}  className={` border-[#e4e5f1] dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray dark:border-dark-theme-very-dark-grayish-blue-two group border-b-[.001rem] z-[10]`} >
                                    <div className="flex group items-center px-[1.1rem] py-[.9rem]">
                                            {/*check-btn  */}
                                        <div className=" flex place-content-center">
                                            <button onClick={()=>handleCheck(i)} type="button" className={` group grid ${v.done ? 'bg-gradient-to-r from-[#57ddff] to-[#c058f3] ':'border-[#9394a5] dark:border-[#393a4c]'} hover:bg-gradient-to-r from-[#57ddff] to-[#c058f3] hover:border-none place-content-center w-[1.2rem] mr-[1.1rem] border-[.001rem] h-[1.2rem] rounded-full`}>{v.done ? <img src={check_icon} alt="" /> : <span className="  rounded-[50%] dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray w-[1.1rem] h-[1.1rem]"></span>}</button>
                                        </div>
                                        {/* item- text */}
                                        <div className="mr-auto cursor-pointer">
                                        <span className={` text-[.7rem] sm:text-[.95rem] md:text-[1.125rem] ${v.done ? 'line-through dark:text-dark-theme-very-dark-grayish-blue-two text-light-theme-light-grayish-blue ': ' dark:text-dark-theme-light-grayish-blue text-light-theme-very-dark-grayish-blue'}`}>{v.todo}</span>
                                        </div>
                                        {/* remove item */}
                                        <div className=" transition-[visibility] ease-in duration-300 delay-0 lg:invisible lg:group-hover:visible">
                                        <button onClick={()=>dispatch({type:'delete',index:i})} type="button">
                                            <img className=" md:w-[1rem] md:h-[1rem] w-[.8rem] h-[.8rem]" src={cross_x} alt="remove" />
                                        </button>
                                        </div>
                                    </div>
                                </li>
                                )}
                            </Draggable>
                        )) :completed === 'active' ? items.map((v,i)=>(
                          !v.done && <Draggable key={v.id}  draggableId={v.id.toString()} index={i}>                                            
                            {(provided)=>(
                                    <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}  className={` border-[#e4e5f1] dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray dark:border-dark-theme-very-dark-grayish-blue-two group border-b-[.001rem] z-[10]`} >
                                    <div className="flex group items-center px-[1.1rem] py-[.9rem]">
                                            {/*check-btn  */}
                                        <div className=" flex place-content-center">
                                            <button onClick={()=>handleCheck(i)} type="button" className={` group grid ${v.done ? 'bg-gradient-to-r from-[#57ddff] to-[#c058f3] ':'border-[#9394a5] dark:border-[#393a4c]'} hover:bg-gradient-to-r from-[#57ddff] to-[#c058f3] hover:border-none place-content-center w-[1.2rem] mr-[1.1rem] border-[.001rem] h-[1.2rem] rounded-full`}>{v.done ? <img src={check_icon} alt="" /> : <span className="  rounded-[50%] dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray w-[1.1rem] h-[1.1rem]"></span>}</button>
                                        </div>
                                        {/* item- text */}
                                        <div className="mr-auto cursor-pointer">
                                        <span className={` text-[.7rem] sm:text-[.95rem] md:text-[1.125rem] ${v.done ? 'line-through dark:text-dark-theme-very-dark-grayish-blue-two text-light-theme-light-grayish-blue ': ' dark:text-dark-theme-light-grayish-blue text-light-theme-very-dark-grayish-blue'}`}>{v.todo}</span>
                                        </div>
                                        {/* remove item */}
                                        <div className=" transition-[visibility] ease-in duration-300 delay-0 lg:invisible lg:group-hover:visible">
                                        <button onClick={()=>dispatch({type:'delete',index:i})} type="button">
                                            <img className=" md:w-[1rem] md:h-[1rem] w-[.8rem] h-[.8rem]" src={cross_x} alt="remove" />
                                        </button>
                                        </div>
                                    </div>
                                </li>
                                )}
                            </Draggable>
                        )): completed === 'completed' && items.map((v,i)=>(
                            v.done && <Draggable key={v.id}  draggableId={v.id.toString()} index={i}>                                            
                            {(provided)=>(
                                    <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}  className={` border-[#e4e5f1] dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray dark:border-dark-theme-very-dark-grayish-blue-two group border-b-[.001rem] z-[10]`} >
                                    <div className="flex group items-center px-[1.1rem] py-[.9rem]">
                                            {/*check-btn  */}
                                        <div className=" flex place-content-center">
                                            <button onClick={()=>handleCheck(i)} type="button" className={` group grid ${v.done ? 'bg-gradient-to-r from-[#57ddff] to-[#c058f3] ':'border-[#9394a5] dark:border-[#393a4c]'} hover:bg-gradient-to-r from-[#57ddff] to-[#c058f3] hover:border-none place-content-center w-[1.2rem] mr-[1.1rem] border-[.001rem] h-[1.2rem] rounded-full`}>{v.done ? <img src={check_icon} alt="" /> : <span className="  rounded-[50%] dark:bg-dark-theme-very-dark-desaturated-blue bg-light-theme-very-light-gray w-[1.1rem] h-[1.1rem]"></span>}</button>
                                        </div>
                                        {/* item- text */}
                                        <div className="mr-auto cursor-pointer">
                                        <span className={` text-[.7rem] sm:text-[.95rem] md:text-[1.125rem] ${v.done ? 'line-through dark:text-dark-theme-very-dark-grayish-blue-two text-light-theme-light-grayish-blue ': ' dark:text-dark-theme-light-grayish-blue text-light-theme-very-dark-grayish-blue'}`}>{v.todo}</span>
                                        </div>
                                        {/* remove item */}
                                        <div className=" transition-[visibility] ease-in duration-300 delay-0 lg:invisible lg:group-hover:visible">
                                        <button onClick={()=>dispatch({type:'delete',index:i})} type="button">
                                            <img className=" md:w-[1rem] md:h-[1rem] w-[.8rem] h-[.8rem]" src={cross_x} alt="remove" />
                                        </button>
                                        </div>
                                    </div>
                                </li>
                                )}
                            </Draggable>
                        ))
                        
                        }
                            {provided.placeholder}
                        </ul>
                        
                    )}
                </Droppable>
            </DragDropContext>
            {/* clear complete nav */}
            <div>
                <div className=" dark:text-dark-theme-very-dark-grayish-blue flex justify-between items-center text-[.8rem] px-[1.1rem] py-[.6rem]">
                <div className=" font-josefinSans-Regular">
                    <span>{itemNumber.length} items left</span>
                </div>
                <div className=" dark:text-dark-theme-very-dark-grayish-blue hidden md:block font-josefinSans-Bold text-[.8rem] ">
                    <button onClick={()=>dispatch({type:'filter',completed:'all'})} className="dark:hover:text-dark-theme-light-grayish-blue-hover" type="button">All</button>
                    <button onClick={()=>dispatch({type:'filter',completed:'active'})} className="dark:hover:text-dark-theme-light-grayish-blue-hover mx-[.8rem]" type="button">Active</button>
                    <button onClick={()=>dispatch({type:'filter',completed:'completed'})} className="dark:hover:text-dark-theme-light-grayish-blue-hover" type="button">Completed</button>
                </div>
                <div className=" font-josefinSans-Regular">
                    <button onClick={()=>dispatch({type:'clear'})} type="button">Clear Completed</button>
                </div>
                </div>
            </div>
        </div>
        <UnderSwitch/>
        <BottomText/>
    </div>
  )
}

export default List
