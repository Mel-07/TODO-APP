import { createContext, useEffect, useReducer } from 'react';
import type { AppContext, State, Props } from '../type/type';
import { items } from './data';
import { reducer } from './reducer';

export const initialState: State = {
  themes: typeof localStorage.getItem('themes') === 'string' ? localStorage.themes: 'dark'  ,
  items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')!) : items, 
  completed:'all'
};

export const Context = createContext<AppContext>({
  ...initialState,
  dispatch: () => {}
});

export function ContextProvider({ children }: Props) {

  const [{ items,completed,themes }, dispatch] = useReducer( reducer
, initialState);

  useEffect(() => {
    function local() {
      localStorage.setItem('items', JSON.stringify(items));
    }
    local();
    window.onload = local;
  }, [items]);


  return (
    <Context.Provider value={{
      items,
      themes,
      completed,
      dispatch,
    }}>
      {children}
    </Context.Provider>
  );
}



