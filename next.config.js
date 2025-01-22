/** @type {import('next').NextConfig} */

// Indica para o compilador do Next.js que estamos usando Styled Components
// Não é necessário adicionar plugins extras para configurar o Styled Components

const nextConfig = {
  reactStrictMode: true,  // Habilita o modo estrito do React
  compiler: {
    styledComponents: true, 
  },
  
}

module.exports = nextConfig;
