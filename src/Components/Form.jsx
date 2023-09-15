import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  error: "",
  success: false,
  formSubmitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setError":
      return { ...state, error: action.payload };
    case "setSuccess":
      return { ...state, success: action.payload };
    case "setFormSubmitted":
      return { ...state, formSubmitted: action.payload };
    default:
      throw new Error();
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    if (!state.formSubmitted) {
      dispatch({ type: "setName", payload: e.target.value });
    }
  };

  const handleEmailChange = (e) => {
    if (!state.formSubmitted) {
      dispatch({ type: "setEmail", payload: e.target.value });
    }
  };

  const handlerForm = (e) => {
    e.preventDefault();

    if (
      state.name.trim().length < 6 ||
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(state.email)
    ) {
      dispatch({
        type: "setError",
        payload: "Por favor chequea que la información sea correcta",
      });
    } else {
      dispatch({ type: "setError", payload: "" });
      dispatch({ type: "setSuccess", payload: true });
      dispatch({ type: "setFormSubmitted", payload: true });
    }
  };

  return (
    <>
      <form>
        <div className="input-container">
          <label htmlFor="fullName">Nombre completo:</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            onChange={handleNameChange}
            required
            aria-required="true"
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
            aria-required="true"
          />
        </div>
        <button type="submit" onClick={handlerForm}>
          Enviar
        </button>
      </form>
      {state.error && (
        <p className="error-message">
          Por favor verifique su información nuevamente
        </p>
      )}
      {state.success && (
        <p className="success-message">
          Gracias {state.name}, te contactaremos cuanto antes vía mail
        </p>
      )}
    </>
  );
};

export default Form;
