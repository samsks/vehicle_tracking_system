# Sistema de Gerenciamento de Rotas de Veículos

Este documento oferece uma visão completa do sistema de gerenciamento de rotas de veículos, apresentando detalhes das tecnologias utilizadas no front-end e no back-end. O sistema foi desenvolvido para possibilitar o rastreamento eficiente de rotas de veículos, com recursos para pesquisa, criação e gerenciamento de rotas, além de interfaces para motoristas e administradores.

Este projeto tem como base a imersão FullCycle 14

## Tecnologias Utilizadas

### Front-end

- **Next.js**: Framework React que simplifica a construção de aplicações web, fornecendo renderização do lado do servidor, roteamento e gerenciamento de estado.
- **Emotion**: Biblioteca de estilização com CSS-in-JS, permitindo a criação de estilos encapsulados em componentes React.
- **Material-UI**: Biblioteca de componentes visuais que segue as diretrizes do Material Design, oferecendo uma experiência de usuário moderna e coesa.
- **Google Maps API Loader**: Biblioteca para carregamento assíncrono da API do Google Maps, possibilitando a integração de mapas interativos.
- **Socket.IO Client**: Biblioteca que permite comunicação em tempo real via websockets, viabilizando recursos como rastreamento em tempo real.
- **SWR**: Biblioteca para gerenciamento de cache e revalidação de dados, otimizando a exibição de informações atualizadas.
- **Lodash**: Utilitário que oferece funções para manipulação de arrays, objetos e strings, simplificando tarefas comuns.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, aumentando a robustez do código e facilitando a manutenção.
- **@mui/icons-material e @mui/material**: Bibliotecas do Material-UI que fornecem ícones e componentes visuais estilizados, seguindo as diretrizes do Material Design.
- **@googlemaps/js-api-loader**: Biblioteca que simplifica o carregamento da API do Google Maps, permitindo a incorporação de mapas interativos na aplicação.
- **socket.io-client**: Biblioteca que facilita a comunicação bidirecional em tempo real entre clientes (navegadores) e servidor, crucial para recursos como rastreamento de rotas.
- **swr**: Biblioteca para gerenciamento de cache e revalidação de dados, melhorando o desempenho da aplicação ao tratar requisições e atualizações de forma otimizada.
- **lodash**: Utilitário de JavaScript que oferece funções para manipulação de arrays, objetos e strings, agilizando a implementação de lógica complexa.

### Back-end

- **Nest.js**: Framework Node.js que permite a construção de aplicações escaláveis, seguindo princípios de modularidade e injeção de dependências.
- **@nestjs/bull**: Módulo do Nest.js que facilita a integração com a biblioteca Bull para criação de filas e tarefas assíncronas.
- **@nestjs/common, @nestjs/config, @nestjs/core**: Módulos fundamentais do Nest.js para criação de controladores, serviços e gerenciamento de configurações.
- **@nestjs/mapped-types**: Pacote que oferece tipos mapeados úteis para a criação de objetos de entrada e DTOs (Data Transfer Objects).
- **@nestjs/microservices**: Módulo para criação de microserviços e comunicação assíncrona entre diferentes partes da aplicação.
- **@nestjs/platform-express**: Módulo que permite a integração do Nest.js com o framework Express, facilitando a criação de APIs REST.
- **@nestjs/platform-socket.io**: Módulo para integração do Nest.js com o Socket.IO, possibilitando comunicação em tempo real via websockets.
- **rxjs**: Biblioteca reativa para JavaScript que simplifica a manipulação de fluxos de dados assíncronos.
- **@prisma/client**: Cliente ORM (Object-Relational Mapping) para acesso e manipulação de banco de dados, facilitando a interação com o banco de dados.
- **kafkajs**: Biblioteca para interação com o Apache Kafka, uma plataforma de streaming de dados distribuída.
- **bull**: Biblioteca para criação de filas de tarefas assíncronas, ideal para processamento de tarefas em segundo plano.
- **reflect-metadata**: Biblioteca que permite adicionar metadados a classes, propriedades e métodos em TypeScript.
- **@nestjs/testing**: Módulo que fornece utilitários para testar aplicações Nest.js de forma simplificada.

## Instruções de Execução

### Front-end

- [Documentação do Front-end (Next.js)](./nextjs/README.md)


### Back-end

- [Documentação do Back-end (Nest.js)](./nestjs/README.md)


## Considerações Finais

Este projeto demonstra a integração de tecnologias modernas no desenvolvimento de um sistema de gerenciamento de rotas de veículos. As tecnologias utilizadas foram cuidadosamente escolhidas para proporcionar uma experiência eficiente e confiável, tanto para os usuários quanto para os desenvolvedores. Recomendamos consultar a documentação oficial das bibliotecas e frameworks para mais informações detalhadas.
