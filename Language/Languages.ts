import { HeaderEN, HeaderES, IHeader } from "./HomePage/Header"

//Spanish Version
const ESHome:IHome = {
    Header:HeaderES
};

const Spanish:ILanguage = {
    Home:ESHome
};


//English Version 
const ENHome:IHome = {
    Header:HeaderEN
};
const English:ILanguage = {
    Home:ENHome
};

//Interfaces
export interface IHome{
    Header:IHeader;
    Body?:string;
    Footer?:string;
}

export interface ILanguage{
    Home:IHome;
}

export {Spanish, English}
