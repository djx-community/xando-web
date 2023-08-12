import { useContext } from 'react'
import ToastContext from '../contexts/ToastContext'

export default function useToastContext () {
  return useContext(ToastContext)
}

/* Using
1. import useToastContext from "../../custom-hooks/useToastContext";
2. const Toast = useToastContext();
3. const state = {
    request: true/false,
    message: "Requested",
    name: "John doe",
  };
  Toast(state);
  */
