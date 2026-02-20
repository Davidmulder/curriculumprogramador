# 🐾 PetCare - Sistema de Agendamento para Pet Shop

![Angular](https://img.shields.io/badge/Angular-17-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Responsive](https://img.shields.io/badge/Responsive-Yes-green)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black)

Aplicação desenvolvida em **Angular** para agendamento de serviços de pet shop (cães e gatos), utilizando **JSON como simulação de API** e persistência com **localStorage**.

Projeto focado em organização de arquitetura, componentização e boas práticas no Frontend.

---

## 🚀 Demo Online

🔗 Acesse aqui:  
👉 https://petcare-sigma-two.vercel.app/

---

## 📌 Sobre o Projeto

O **PetCare** é uma aplicação SPA (Single Page Application) onde o usuário pode:

- Visualizar serviços disponíveis
- Filtrar por tipo de pet (cão ou gato)
- Realizar agendamentos
- Consultar seus agendamentos
- Cancelar atendimentos

A aplicação simula o comportamento de uma API real utilizando arquivos JSON locais.

---

## ✨ Funcionalidades

### 🐶 Página de Serviços
- Listagem dinâmica de serviços
- Filtro por tipo de pet
- Busca por nome ou descrição
- Imagens associadas via JSON

### 📅 Página de Agendamento
- Formulário com Reactive Forms
- Validação de campos obrigatórios
- Seleção de data e horário
- Resumo lateral do serviço selecionado
- Persistência no localStorage

### 📋 Página de Consultas
- Listagem de agendamentos
- Filtro por status
- Cancelamento de agendamento
- Estado vazio amigável

---

## 🧱 Tecnologias Utilizadas

- Angular
- TypeScript
- Reactive Forms
- Angular Router
- HttpClient
- JSON (API simulada)
- LocalStorage
- CSS Responsivo

---

## 📂 Estrutura do Projeto
```bash
src/
├── app/
│ ├── core/
│ │ └── services/
│ │ ├── servicos.service.ts
│ │ └── agendamentos.service.ts
│ ├── pages/
│ │ ├── servicos/
│ │ ├── agendar/
│ │ └── consultas/
│ ├── shared/
│ │ └── components/
│ │ ├── header/
│ │ └── footer/
└── assets/
├── brand/
└── data/
└── servicos.json

```

---

## 🧠 Conceitos Aplicados

- Arquitetura modular
- Separação de responsabilidades
- Componentização
- Persistência local
- Simulação de backend
- Manipulação de datas em formato ISO
- Filtro dinâmico com getters
- Design responsivo (mobile + desktop)

---

## ▶️ Como Rodar Localmente

```bash
# Clonar o repositório
git clone https://github.com/Davidmulder/Petcare.git

# Entrar na pasta
cd petcare-angular

# Instalar dependências
npm install

# Rodar o projeto
ng serve

version
@angular/cli                    14.2.13
@schematics/angular             14.2.13
rxjs                            7.5.7
typescript                      4.7.4
```

📷 Prints do Projeto
Página de Serviços
<img src="/assets/projetos/17/img/01.png" width="800"/>
Página de Agendamento
<img src="/assets/projetos/17/img/02.png" width="800"/>
Página de Consultas
<img src="/assets/projetos/17/img/03.png" width="800"/>




## 📧 Contato
Caso tenha alguma dúvida, entre em contato:

E-mail: david.foxmulder@gmail.com
LinkedIn: david orion