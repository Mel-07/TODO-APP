import { Action, Item, State } from "../type/type";


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
        const updatedItems = state.items.map((v)=>{
            if(state.items[action.tick]=== v){
                return{
                    ...v,done:!v.done
                }
            }
            return v
        })

        localStorage.setItem('items', JSON.stringify(updatedItems))
        return {
            ...state,items:updatedItems,
            allItems:updatedItems
        }
    }
        break;

    case "new todo":{
        const newItems = [...state.allItems, action.item];
        localStorage.setItem('items', JSON.stringify(newItems));
        return {
                ...state,items:newItems,allItems:newItems
            }
    }
            case 'filter': {
                const { completed } = action;
                console.log(completed);
            
                let filteredItems;
                
                if (completed === 'all') {
                    filteredItems = state.allItems;
                } else if (completed === 'active') {
                    console.log(localStorage.items)
                    filteredItems = state.allItems.filter((v:Item) => !v.done);
                } else if (completed === 'completed') {
                    filteredItems =state.allItems.filter((v:Item) => v.done);
                } else {
                    return state;
                }
            
                return {
                    ...state,
                    items:  filteredItems,
                };
            }
            
    case 'delete':{
        const deletedItems = state.allItems.filter((v,i)=>{
            if(i !== action.index){
                return{
                    ...v
                }
            }
        })
        localStorage.setItem('items',JSON.stringify(deletedItems))
        return{
            ...state,items:deletedItems,
            allItems:deletedItems
        }
    }

    case 'clear':{
        const clearedState = state.allItems.filter((v)=>{
            if(!v.done){
                return{
                    ...v
                }
            }
        })
        localStorage.setItem('items',JSON.stringify(clearedState))
    return{
        ...state,items:clearedState,
        allItems:clearedState
    }
    }
    
    case 'drag-end':{
        const {destination,source} = action.result
        if(!destination) return state
        const items = [...state.items]
        const [movedItem] = items.splice(source.index,1)
        items.splice(destination.index,0,movedItem)
        localStorage.setItem('items',JSON.stringify(items))
        {
            return {...state,items:items}
        }
    }

    default: return state
}
return  state
}