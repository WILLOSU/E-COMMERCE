import { styled } from "styled-components";
import { BackIcon } from "./back-icon";
import { useRouter } from "next/navigation";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--secondary-text);
`

interface BtnProps {
    navigate: string; // navegação de página
}

// funcionalidade do botão de voltar
export function BackBtn({ navigate }: BtnProps){
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate) // push para o props
    }

    return (
        <Button onClick={handleNavigate}>
            <BackIcon/>
            
        </Button>
    )
}

