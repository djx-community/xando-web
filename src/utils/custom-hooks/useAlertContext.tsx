import { useContext } from 'react'
import AlertContext from '../contexts/AlertContext'
export default function useAlertContext () {
  return useContext(AlertContext)
}
/* Using
1.import useAlertContext from "../../custom-hooks/useAlertContext";
2. const Alert = useAlertContext();
3. const data = {
    open: true,
    message: "You win",
    accept: "Re-match",
    denied: "Exit",
    action: () => console.log("rematch-done"),
    exit: () => console.log("Quit"),
  };
  Alert(data);
  */
