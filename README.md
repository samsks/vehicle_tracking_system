# Sistema de Gerenciamento de Rotas de Veículos

Este documento oferece uma visão completa do sistema de gerenciamento de rotas de veículos, apresentando detalhes das tecnologias utilizadas no front-end e no back-end. O sistema foi desenvolvido para possibilitar o rastreamento eficiente de rotas de veículos, com recursos para pesquisa, criação e gerenciamento de rotas, além de interfaces para motoristas e administradores.

Este projeto tem como base a imersão FullCycle 14

## Tecnologias Utilizadas

### Front-end

#### Next.js
- **Versão**: 0.1.0
- **Descrição**: Framework React que simplifica a construção de aplicações web, fornecendo renderização do lado do servidor, roteamento e gerenciamento de estado.

#### Emotion
- **Versão**: ^11.11.0
- **Descrição**: Biblioteca de estilização com CSS-in-JS, permitindo a criação de estilos encapsulados em componentes React.

#### Material-UI
- **Versão**: ^5.14.6
- **Descrição**: Biblioteca de componentes visuais que segue as diretrizes do Material Design, oferecendo uma experiência de usuário moderna e coesa.

#### Google Maps API Loader
- **Versão**: ^1.16.2
- **Descrição**: Biblioteca para carregamento assíncrono da API do Google Maps, possibilitando a integração de mapas interativos.

#### Socket.IO Client
- **Versão**: ^4.7.2
- **Descrição**: Biblioteca que permite comunicação em tempo real via websockets, viabilizando recursos como rastreamento em tempo real.

#### SWR
- **Versão**: ^2.2.1
- **Descrição**: Biblioteca para gerenciamento de cache e revalidação de dados, otimizando a exibição de informações atualizadas.

#### Lodash
- **Versão**: ^4.17.21
- **Descrição**: Utilitário que oferece funções para manipulação de arrays, objetos e strings, simplificando tarefas comuns.

#### TypeScript
- **Versão**: 5.1.6
- **Descrição**: Linguagem que adiciona tipagem estática ao JavaScript, aumentando a robustez do código e facilitando a manutenção.

#### @mui/icons-material e @mui/material
- **Versões**: ^5.14.6
- **Descrição**: Bibliotecas do Material-UI que fornecem ícones e componentes visuais estilizados, seguindo as diretrizes do Material Design.

#### @googlemaps/js-api-loader
- **Versão**: ^1.16.2
- **Descrição**: Biblioteca que simplifica o carregamento da API do Google Maps, permitindo a incorporação de mapas interativos na aplicação.

#### socket.io-client
- **Versão**: ^4.7.2
- **Descrição**: Biblioteca que facilita a comunicação bidirecional em tempo real entre clientes (navegadores) e servidor, crucial para recursos como rastreamento de rotas.

#### swr
- **Versão**: ^2.2.1
- **Descrição**: Biblioteca para gerenciamento de cache e revalidação de dados, melhorando o desempenho da aplicação ao tratar requisições e atualizações de forma otimizada.

#### lodash
- **Versão**: ^4.17.21
- **Descrição**: Utilitário de JavaScript que oferece funções para manipulação de arrays, objetos e strings, agilizando a implementação de lógica complexa.

### Back-end

#### Nest.js
- **Versão**: ^10.0.0
- **Descrição**: Framework Node.js que permite a construção de aplicações escaláveis, seguindo princípios de modularidade e injeção de dependências.

#### @nestjs/bull
- **Versão**: ^10.0.1
- **Descrição**: Módulo do Nest.js que facilita a integração com a biblioteca Bull para criação de filas e tarefas assíncronas.

#### @nestjs/common, @nestjs/config, @nestjs/core
- **Versão**: ^10.0.0
- **Descrição**: Módulos fundamentais do Nest.js para criação de controladores, serviços e gerenciamento de configurações.

#### @nestjs/mapped-types
- **Versão**: *
- **Descrição**: Pacote que oferece tipos mapeados úteis para a criação de objetos de entrada e DTOs (Data Transfer Objects) no Nest.js.

#### @nestjs/microservices
- **Versão**: ^10.2.1
- **Descrição**: Módulo que possibilita a criação de microserviços no Nest.js, com suporte a protocolos como TCP, HTTP e WebSockets.

#### @nestjs/platform-express, @nestjs/platform-socket.io, @nestjs/websockets
- **Versão**: ^10.0.0, ^10.2.1
- **Descrição**: Módulos para integração do Nest.js com o Express, Socket.IO e WebSockets, facilitando a implementação de comunicação em tempo real.

#### @prisma/client
- **Versão**: ^5.1.1
- **Descrição**: Cliente ORM (Object-Relational Mapping) para o Prisma, simplificando a interação com o banco de dados e a modelagem de dados com TypeScript.

#### bull
- **Versão**: ^4.11.3
- **Descrição**: Biblioteca para criação de filas e gerenciamento de tarefas assíncronas, útil para processamentos que não requerem resposta imediata.

#### kafkajs
- **Versão**: ^2.2.4
- **Descrição**: Biblioteca que permite a interação com o protocolo Apache Kafka, amplamente utilizado para processamento de eventos em tempo real.

#### reflect-metadata
- **Versão**: ^0.1.13
- **Descrição**: Biblioteca que permite a adição de metadados a classes e propriedades em tempo de execução, essencial para algumas funcionalidades do Nest.js.

#### rxjs
- **Versão**: ^7.8.1
- **Descrição**: Biblioteca de programação reativa que simplifica o tratamento de fluxos assíncronos e eventos complexos, amplamente utilizada no desenvolvimento assíncrono.

## Instruções de Execução

### Front-end

- [Documentação do Front-end (Next.js)](./nextjs/README.md)


### Back-end

- [Documentação do Back-end (Nest.js)](./nestjs/README.md)


## Considerações Finais

Este projeto demonstra a integração de tecnologias modernas no desenvolvimento de um sistema de gerenciamento de rotas de veículos. As tecnologias utilizadas foram cuidadosamente escolhidas para proporcionar uma experiência eficiente e confiável, tanto para os usuários quanto para os desenvolvedores. Recomendamos consultar a documentação oficial das bibliotecas e frameworks para mais informações detalhadas.
