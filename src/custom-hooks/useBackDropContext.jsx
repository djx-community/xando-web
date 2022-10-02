import { useContext } from "react";
import BackDropContext from "../contexts/BackDropContext";
export default function useBackDropContext() {
  return useContext(BackDropContext);
}

/*
1. import the context
   import useBackDropContext from "../../custom-hooks/useBackDropContext";
2. object to be pass into  context provider
   const data = {
    icon: "",//if pass icon as a null string display loading icon other wise pass the icon
    message: "Waiting for opponent",
    open: true,
  };
3. take context into a variable
  const BackDrop = useBackDropContext();
4. Handle open and close like this
  const handleBackdrop = () => {

    //To be open the backdrop call the open function and pass the object as argument
    BackDrop.openBackDrop(data);

    //To be close the backdrop call the close function
    setTimeout(BackDrop.closeBackdrop,3000);
  };
  */
