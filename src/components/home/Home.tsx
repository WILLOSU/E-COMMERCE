"use client"

import { Avatar } from "../icons/avatar-icon";
import { MenuVariant } from "../icons/menu-variant-icon";
import { Logo } from "../icons/logo-icon";
import { TextAudio } from "@/utils/TextAudio";  // Importando o novo componente
import { Frame30 } from "./HomeStyles"; 
import React, { useState, useEffect } from "react";
import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons/search-icon";
import { useFilter } from "@/hooks/useFilter";
import { TagHome, PrimaryInput, InputContainer } from "./HomeStyles";
import { InputTextContainer } from "./HomeStyles"


export function Frame30Component() {
  return (
      <Frame30>
          <div>
              <MenuVariant />
              <Logo />
              <TextAudio />  {/* Adicionando o novo componente */}
              <Avatar />
          </div>       
      </Frame30>
  );
}


import { Frame31 } from "./HomeStyles"; 

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



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  $handleChange: (value: string) => void;
}

export function PrimaryInputWSearchIcon({ $handleChange, ...props }: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => $handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}

interface HomeProps {}

export function Header(props: HomeProps) {
  const { setSearch, search } = useFilter();

  return (
    <TagHome>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          $handleChange={setSearch}
          placeholder="Search headphone"
        />
      </div>
    </TagHome>
  );
}


interface ListProps {}

export function List(props: ListProps) {
    const { setSearch, search } = useFilter();

    return (
        <InputTextContainer>
            <div>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="Search headphone"
                />
            </div>
        </InputTextContainer>
    )
}