
import axios from "axios";
import { api_rest } from '../../package.json';
const getProducts = async (code: any) => {
  try {
        const response = await axios.get(`${api_rest}/products`);
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

const ProductService: any = {
    getProducts
};
export { ProductService };