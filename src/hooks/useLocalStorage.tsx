// Hook usado para consultar uma propriedade no local storage
// vai salvar essa propriedade em um estado, disponibilizando
// para o componente que quizer utilizálo

import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)

    /* T passado como genérico, controlar elementos*/

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let value = localStorage.getItem(item)
        if(value) setValue(JSON.parse(value))
    }, [window])

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item,JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}