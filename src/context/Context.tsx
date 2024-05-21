import { createContext, useEffect, useReducer } from 'react';
import type { AppContext, State, Props } from '../type/type';
import { items } from './data';
import { reducer } from './reducer';

export const initialState:State = {
  themes: localStorage.getItem('themes') || 'dark',
  items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')!) : items,
  allItems: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')!) : items,
};

export const Context = createContext<AppContext>({
  ...initialState,
  dispatch: () => {}
});

export function ContextProvider({ children }: Props) {

  const [{ items,themes,allItems }, dispatch] = useReducer( reducer
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
      allItems,
      themes,
      dispatch,
    }}>
      {children}
    </Context.Provider>
  );
}



