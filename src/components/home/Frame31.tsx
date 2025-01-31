import { Frame31 } from "./Frame31.styles"; 

export function Frame31Component() {
    return (
        <Frame31>
            <div className="layout">
                {/* Texto "Hi, Andrea" */}
                <span className="greeting-text">Hi, Andrea</span>
                
                {/* Texto "What are you looking for today?" */}
                <span className="question-text">What are you looking for today?</span>
            </div>
        </Frame31>
    );
}

/* Futuras implementações*/ 

import React, { useState, useEffect } from "react";



export function Frame31Component2() {
    const [clientName, setClientName] = useState<string>("Andrea");

    useEffect(() => {
        // Suponha que você tenha uma função que busca o nome do cliente do banco de dados
        const fetchClientName = async () => {
            // Aqui, simula-se uma chamada a um banco de dados.
            const response = await fetch("/api/get-client-name");
            const data = await response.json();
            setClientName(data.name);
        };

        fetchClientName();
    }, []);

    return (
        <Frame31>
            <div className="layout">
                <span className="greeting-text">Hi, {clientName}</span>
                <span className="question-text">What are you looking for today?</span>
            </div>
        </Frame31>
        
    );
    
}
