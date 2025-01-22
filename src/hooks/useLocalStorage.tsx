
/*
   HOOKS
    Utilizado para consultar o valor do local storage,
    achei melhor por ser uma lógica de controle de estado,
    mesmo sabendo que não estou controlando um estado do react,
    estou controlando o estado da minha aplicação que está sendo
    salvo dentro do local storage

    vai consultar uma propriedade no local storage
    vai salvar essa propriedade num estado e vai
    disponibilizar este estado para o componente que quiser
    utilizá-lo

*/



import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){ // recebo valor do tipo genérico
    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let value = localStorage.getItem(item)
        if(value) setValue(JSON.parse(value))
    }, [window])

    const updateLocalStorage = (newValue: T) => { // setando o valor do estado
        setValue(newValue);
        localStorage.setItem(item,JSON.stringify(newValue)); // salavando tudo em JSON, 
    }

    return { // retorna o HOOK 
        value,
        updateLocalStorage
    }
}