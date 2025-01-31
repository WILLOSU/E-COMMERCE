"use client";

import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons/search-icon";
import { useFilter } from "@/hooks/useFilter";
import { TagHeader, PrimaryInput, InputContainer } from "./InputText.styles";

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

interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          $handleChange={setSearch}
          placeholder="Search headphone"
        />
      </div>
    </TagHeader>
  );
}