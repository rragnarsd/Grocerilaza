
import { createContext, useState } from "react";

export const UserFormContext = createContext();

function FormDataContextProvider({ children }) {
  const [formData, setFormData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [radio, setRadio] = useState();

  function submitForm() {
    setFinalData(finalData => [...finalData, formData, radio]);
    setFormData("");
  }

  return (
    <UserFormContext.Provider value={{ formData, setFormData, finalData, setFinalData, submitForm, radio, setRadio }}>
      {children}
    </UserFormContext.Provider>
  );
}

export default FormDataContextProvider;

