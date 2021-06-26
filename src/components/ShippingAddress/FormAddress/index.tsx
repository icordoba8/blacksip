import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneAlt,
  faStreetView,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import swal from "sweetalert";
import Input from "../../CustomImputs/Input";
import Select from "../../CustomImputs/Select";
import { Address, inicialState } from "../../../models/address";
import { AddressService } from "../../../services/address";
import "./styles.sass";
const FormAddress = () => {
  const [state, setState] = useState<Address>(inicialState);
  const [colonies, setColonies] = useState<any>([]);
  const onChange = (event: Event) => {
    const { name, checked, value }: any = event.target;
    checked
      ? setState({ ...state, [name]: checked })
      : setState({ ...state, [name]: value });
  };
  const onSubmitAddress = async (event: any) => {
    event.preventDefault();
    const { error } = await AddressService.create(state);
    if (error) {
      swal("", error.message, "error");
      return;
    }
    swal("", "Direección creada", "success");
    setState(inicialState);
  };

  const getColonies = async (event: any) => {
    if (!state.code || state.code.length <= 3) {
      clearIunputCode([], {});
      return;
    }

    const { data, error } = await AddressService.searchCode(state.code);
    if (error) {
      swal("", error.message, "error");
      return;
    }

    if (!data.code) {
      clearIunputCode([], data);
      return;
    }

    const { colonies } = data;
    clearIunputCode(colonies, data);
  };
  const clearIunputCode = (colonies: any, data: any) => {
    const { city, stateRegion, street, town } = data;
    setState({
      ...state,
      city: colonies.length > 0 ? city : "",
      state: colonies.length > 0 ? stateRegion : "",
      town: colonies.length > 0 ? town : "",
      suburb: colonies.length === 1 ? colonies[0] : "",
      street: colonies.length === 1 ? street : "",
    });
    setColonies(colonies);
  };

  return (
    <form onSubmit={onSubmitAddress} autoComplete="disabled">
      <div className="content-form-address">
        <div className="content-form-input">
          <Input
            icon={faUser}
            placeholder="Nombre"
            name="name"
            type="text"
            onChange={onChange}
            state={state}
            required
            autoComplete="disabled"
          />
          <Input
            icon={faUser}
            placeholder="Apellidos"
            name="surnames"
            type="text"
            onChange={onChange}
            state={state}
            required
          />
        </div>
        <div className="content-form-input">
          <Input
            icon={faEnvelope}
            placeholder="Correo Electrónico"
            name="email"
            type="email"
            onChange={onChange}
            state={state}
            required
          />
          <Input
            icon={faPhoneAlt}
            placeholder="Número de teléfono"
            name="phone"
            type="text"
            onChange={onChange}
            state={state}
            required
          />
        </div>

        <div className="content-form-input">
          <Input
            icon={faStreetView}
            placeholder="Código postal"
            name="code"
            type="text"
            onChange={onChange}
            onKeyUp={getColonies}
            state={state}
          />

          {colonies.length > 1 ? (
            <Select
              icon={faStreetView}
              placeholder="Colonia"
              name="suburb"
              onChange={onChange}
              state={state}
              setState={setState}
              colonies={colonies}
            />
          ) : (
            <Input
              icon={faStreetView}
              placeholder="Colonia"
              name="suburb"
              type="text"
              onChange={onChange}
              state={state}
            />
          )}
        </div>
        <div className="content-form-input">
          <Input
            icon={faStreetView}
            placeholder="Estado/Región"
            name="state"
            type="text"
            onChange={onChange}
            state={state}
          />
          <Input
            icon={faStreetView}
            placeholder="Ciudad"
            name="city"
            type="text"
            onChange={onChange}
            state={state}
          />
        </div>
        <div className="content-form-input">
          <Input
            icon={faStreetView}
            placeholder="Delegación o municipio"
            name="town"
            type="text"
            onChange={onChange}
            state={state}
          />
          <Input
            icon={faMapMarkedAlt}
            placeholder="Calle"
            name="street"
            type="text"
            onChange={onChange}
            state={state}
          />
        </div>
        <div className="content-form-button">
          <button className="button btn-dark">Libreta de direcciones</button>
          <button className="button btn-dark">Guardar</button>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="billingaddress"
            defaultChecked={state.billingaddress}
            onChange={(e: any) => onChange(e)}
          />
          <label>Utilizar dirección como de facturación</label>
        </div>
      </div>
    </form>
  );
};

export default FormAddress;
