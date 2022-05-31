export const HeaderES:IHeader = {
    Header:{
        PageTitle:"Projekto Neisa",
    },
    Navigation:{
        NavTitle:"Projekto Neisa",
        News:"Noticias",
        AboutPage:"Conose a Neisa",
        Support:"Apoya",
        Documentation:"Documentacion"
    }
}

export const HeaderEN:IHeader = {
    Header:{
        PageTitle:"Project Neisa",
    },
    Navigation:{
        NavTitle:"Project Neisa",
        News:"News",
        AboutPage:"About",
        Support:"Support",
        Documentation:"Documentation"
    }
}

export interface IHeader{
    Header:{
        PageTitle:string,
    },
    Navigation:{
        NavTitle:string,
        News:string,
        AboutPage:string,
        Support:string,
        Documentation:string,

    }
}