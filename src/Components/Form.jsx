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
      <form className="text-md text-left text-gray-500 dark:text-gray-400 container px-4">
        <div className="relative z-0 w-full mb-10 group">
          <input
            id="fullName"
            type="text"
            name="fullName"
            className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleNameChange}
            required
            aria-required="true"
          />
          <label
            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
            htmlFor="fullName"
          >
            Nombre completo:
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            id="email"
            type="email"
            name="email"
            className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleEmailChange}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
            aria-required="true"
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
          >
            Email
          </label>
        </div>
        <button
          type="submit"
          onClick={handlerForm}
          className="bg-blue-500 hover:bg-blue-400 text-white hover:text-white text-center px-8 py-2 w-80 inline-block mt-10 rounded font-medium uppercase"
        >
          Enviar
        </button>
      </form>
      <div className="text-2xl mt-10">
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
      </div>
    </>
  );
};

export default Form;
