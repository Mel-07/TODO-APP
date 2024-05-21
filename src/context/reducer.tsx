import { Action, State } from "../type/type";


export function reducer (state:State,action:Action):State{

switch (action.type) {
    case 'themes':
        if (action.check) {
            localStorage.setItem('themes', 'dark');
            document.documentElement.classList.add('dark');
            return {
                ...state,
                themes: localStorage.getItem('themes') || 'dark'
            };
        } else if (action.check === false) {  
            localStorage.setItem('themes', 'light');
            document.documentElement.classList.remove('dark');
            return {
                ...state,
                themes: localStorage.getItem('themes') || 'light'
            };
        }
        break;
    case "check":
    if(state.items[action.tick]){
        return {
            ...state,items:state.items.map((v)=>{
                if(state.items[action.tick]=== v){
                    return{
                        ...v,done:!v.done
                    }
                }
                return v
            })
        }
    }
        break;

    case "new todo":
        return {
                ...state,items:[...state.items,action.item]
            }
        break;
    case 'filter':
        return{
                ...state,completed:action.completed
            } 
    case 'delete':
        return{
            ...state,items:state.items.filter((v,i)=>{
                if(i !== action.index){
                    return{
                        ...v
                    }
                }
            })
        }

    case 'clear':
    return{
        ...state,items:state.items.filter((v)=>{
            if(!v.done){
                return{
                    ...v
                }
            }
        })
    }
    
    case 'drag-end':{
        const {destination,source} = action.result
        if(!destination) return state
        const items = [...state.items]
        const [movedItem] = items.splice(source.index,1)
        items.splice(destination.index,0,movedItem)
        localStorage.setItem('items',JSON.stringify(items))
        {
            return {...state,items:JSON.parse(localStorage.getItem('items')!)|| items}
        }
    }

    default: return state
}
return  state
}