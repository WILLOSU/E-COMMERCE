/* eslint-disable react-hooks/exhaustive-deps */
// Hook usado para consultar uma propriedade no local storage
// vai salvar essa propriedade em um estado, disponibilizando
// para o componente que quizer utilizá-lo

import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)

    /* T passado como genérico, controlar elementos*/
    

    // useEffect é chamado toda vez que o objeto window atualizar
    // localStorage são atributos do objeto windown (navegador)
    // enquando este objeto foi undefined havéra retorno.
    // quando for chamado que NÃO for undefined, assim é feito a consulta e salva
    // 

    useEffect(() => {
        if (typeof window === 'undefined') return;
        // eslint-disable-next-line prefer-const
        let value = localStorage.getItem(item) // aqui verifica se é null undefine ou vazia
        if(value) setValue(JSON.parse(value))  // contendo um valor é chamado o setvalue para fazer o parse do valor
    }, [window])                               // caso contrário não atualiza o estado e meu estado continua com o valor
                                               // inicial que foi passado por paramêtro           
    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        if (typeof window !== 'undefined') {
            localStorage.setItem(item, JSON.stringify(newValue));
        }
    };
    return {
        value,
        updateLocalStorage
    }
}