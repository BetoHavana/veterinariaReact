import React, { Fragment, useState } from "react";
import SnD from './Show&Delete';
const Page2 = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const catname = {name};
      const catage = {age};
      const response = await fetch("http://localhost:5000/gatos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({catname,catage})
        
      });
      window.location = "/path2";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Gatos Registrados</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <label htmlFor="exampleFormControlInput1">Nombre </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="exampleFormControlInput1">Edad</label>
        <input
          type="text"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button className="btn btn-success"> Insertar</button>
      </form>
      <SnD/>
    </Fragment>
  );
};
export default Page2;
