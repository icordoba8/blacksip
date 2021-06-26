export interface Address {
    name: string;
    surnames: string;
    email: string;
    phone: string;
    code: string;
    suburb: string;
    state: string;
    city: string;
    town: string;
    street: string;
    billingaddress:boolean
}


export const inicialState = {
    name:"",
    surnames:"",
    email:"",
    phone:"",
    code:"",
    suburb:"",
    state:"",
    city:"",
    town:"",
    street: "",
    billingaddress:false
};
  