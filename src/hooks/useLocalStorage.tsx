
/* 

   HOOKS
   Controle de itens no carrinho !!
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

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        // Verifica se está no lado do cliente e se o localStorage está disponível
        if (typeof window === 'undefined') return;
        
        const storedValue = localStorage.getItem(item);  // Renomeando para evitar conflito com o estado 'value'
        if (storedValue) {
            setValue(JSON.parse(storedValue)); // Atualiza o estado com o valor do localStorage
        }
    }, []); // Passa a lista de dependências vazia para garantir que o efeito só execute uma vez após o carregamento

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue); // Atualiza o estado
        localStorage.setItem(item, JSON.stringify(newValue)); // Atualiza o localStorage
    };

    return {
        value,
        updateLocalStorage
    };
}
