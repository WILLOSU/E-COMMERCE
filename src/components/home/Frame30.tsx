// Em Frame30Component.tsx
import { Avatar } from "../icons/avatar-icon";
import { MenuVariant } from "../icons/menu-variant-icon";
import { Logo } from "../icons/logo-icon";
import { TextAudio } from "@/utils/TextAudio";  // Importando o novo componente
import { Frame30 } from "./Frame30.styles"; 

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
