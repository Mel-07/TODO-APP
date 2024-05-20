import { useContext} from "react";
import {Context} from './Context'

export const useContextProvider = ()=> useContext(Context)