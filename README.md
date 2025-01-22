# Criando o conteúdo do arquivo .md melhorado

# 🚀 Desafio 3 - COMPASS UOL

## 🧠 Objetivo

Avaliar sua capacidade de resolução de problemas, utilizando as ferramentas necessárias e apresentando assertividade frente às demandas solicitadas.

---

## 📋 Instruções

### Implementação de Commerce

O design base do projeto está disponível no Figma:
[Figma Challenge 03](https://www.figma.com/design/V0UGvd2pWq6LNFJ2omOaUP/Challenge-03?node-id=4-1&p=f)

---

### 🛠️ Requisitos Obrigatórios

#### **1. Autenticação de Usuário**
- Implementar autenticação utilizando **Firebase**;
- Permitir login com o **Google**.

#### **2. Tecnologias Utilizadas**
- O projeto deve ser desenvolvido utilizando **React**;
- Utilizar **TypeScript**;
- Adotar um design **mobile-first**.

#### **3. API e Dados**
- Copiar o arquivo JSON fornecido e criar uma API utilizando o **Run Mocky**;
- Utilizar o link gerado no **Run Mocky** para realizar as requisições necessárias.

#### **4. Página Home**
- Ao clicar no campo de busca, o usuário deverá ser redirecionado para a página **Search**;
- Criar carrosséis de produtos utilizando uma biblioteca de sua preferência:
  - **Carrossel 1:** Renderizar produtos com base na **categoria**.
  - **Carrossel 2:** Renderizar produtos à sua escolha.

#### **5. Página Search**
- Criar um campo de busca para filtrar os produtos por nome;
- Exibir os três produtos mais populares da API na seção **Popular Products**.

#### **6. Página Explore Products**
- Renderizar todos os produtos disponíveis na API;
- A tela de filtro deverá ser acionada ao clicar no botão **Filter**;
- A tela de filtro deve ser um **Bottom Sheet** (sugestão: utilizar **Drawer Navigator | React Navigation**);
- Implementar o filtro utilizando os dados da API.

#### **7. Página Product Detail**
- Redirecionar o usuário para a página **Product Detail** ao clicar em qualquer cartão de produto;
- Renderizar todos os reviews disponíveis na API para o produto;
- Adicionar uma seção com um carrossel de produtos à sua escolha;
- Implementar a funcionalidade de adicionar o produto ao carrinho ao clicar no botão **Add To Cart**.

#### **8. Página Shopping Cart**
- Utilizar a **API Context** para gerenciar o estado do carrinho;
- O ícone do carrinho deverá exibir a **quantidade de itens selecionados** (exemplo na página **Explore Products**);
- Permitir adicionar ou remover itens do carrinho, ajustando a quantidade conforme necessário;
- O ícone de lixeira ao lado de **Shopping Cart** deverá limpar o carrinho completamente;
- Calcular e exibir o **valor total** com base nos produtos adicionados.

#### **9. Imagens**
- Usar a mesma imagem para todos os usuários nos reviews, já que a API não fornece imagens de usuário.

---

### 🔗 Requisitos Opcionais
- Substituir a API REST fornecida por uma **API GraphQL**;
- Fazer o **deploy** do projeto em qualquer plataforma;
- Criar um design para **desktop**.

---

## 🔗 Links Importantes
- **Figma:** [Figma Challenge 03](https://www.figma.com/design/V0UGvd2pWq6LNFJ2omOaUP/Challenge-03?node-id=4-1&p=f)

- **JSON Mocky:** [Run Mocky API](https://run.mocky.io/v3/71448aa4-d73a-4213-a87e-fbd7d1758109)

---

## 🚀 Iniciando o Projeto

1. **Instalar o Next.js:**
   ```bash
   npx create-next-app@latest
   npm install next react react-dom
   npm install --save-dev typescript @types/react @types/node

2. **Instalar a Biblioteca Styled Components:** 
npm install styled-components@latest
   
