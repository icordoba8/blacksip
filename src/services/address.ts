
import axios from "axios";
import { api_rest } from '../../package.json';
const searchCode = async (code: any) => {
  try {
        const response = await axios.get(`${api_rest}/postalCodes/${code}`);
        return response;
    } catch (err) {
        console.log("Error url Tiempo de respuesta agotado");
        return {
            error: {
                message: "Tiempo de respuesta agotado intente nuevamente",
            },
        };
    }
};
const create = async (address: any) => {
  try {
        const response = await axios.post(`${api_rest}/contact/`,address);
        return response;
    } catch (err) {
        console.log("Error url Tiempo de respuesta agotado");
        return {
            error: {
                message: "Tiempo de respuesta agotado intente nuevamente",
            },
        };
    }
};
const AddressService: any = {
    searchCode,
    create
};
export { AddressService };