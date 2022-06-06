import { useEffect, useState } from "react"
import {English, ILanguage, Spanish} from '../Language/Languages';

const configLanguageOptions = {
    Spanish:"Spanish",
    English:"English"
}

export const useLanguage = () =>{
    const [Language, setLanguage] = useState<ILanguage>(English);
    const [configLanguage, setConfigLanguage] = useState(configLanguageOptions.Spanish);

    useEffect(() => {
      const changeLanguage = () => {
        if(configLanguage === configLanguageOptions.Spanish){
            setLanguage(Spanish)
        }
      }
    }, [configLanguage])

    
}