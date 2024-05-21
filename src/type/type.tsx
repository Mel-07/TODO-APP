import { ReactNode } from "react"
import { DropResult } from "react-beautiful-dnd"

export type Item = {
    id:number,
    done:boolean,
    todo:string
}

export type Items<T> = T[]

export type State = {
    themes:string,
    items:Items<Item>,
    allItems:Items<Item>,
}
export type Action =
{
    type:'themes',
    check:boolean
} |
{
    type:"check"
    tick: number
} |
{
    type:'new todo',
    item:Item
} |
{
    type:'filter',
    completed:string
} |
{
    type:'delete',
    index:number
}|
{
    type:'clear'
 }
|{
    type:'drag-end',
    result:DropResult
}

export type AppContext = State & {
    dispatch:React.Dispatch<Action>
}

export type Props = {
    children:ReactNode
} 
export type Listings = {
    done:boolean,
    todo:string,
    i:number
}