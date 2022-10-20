// !JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli 
//! farklar da mevcut elbette.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına
//! uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre 
//! onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute ü JSX'de htmlFor olarak 
//! tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX de  javascript ifadeleri {} içinde çalıştırılabilir. 
//! Buna map, && gibi yapılarda dahil.

import React, { useState } from "react";

const Form = () => {

    const [ad, setAd ] = useState("")
    const [password, setPassword ] = useState("")
    const [country, setCountry ] = useState("")

    const formAlindi = () => {
        alert(
            `Username: ${ad}
            Password:${password}
            Country:${country}`
        )
    }

  return (
    <div className="container text-center mt-4">
      <h1>*********************************************************</h1>
      <h1>FORMS(EVENTS)</h1>
      <form onSubmit={formAlindi}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger fw-bold"> {ad} </span>
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setAd(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(a) => setPassword(a.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country">
            {" "}
            Country: <span className="text-danger fw-bold">{country}</span>{" "}
          </label>
          <select
            className="form-select"
            name="country"
            id="country"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option selected="">Country</option>
            <option value="Turkey">Turkey</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          GÖNDER(SUBMIT)
        </button>
      </form>
    </div>
  );
};

export default Form;
