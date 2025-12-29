
## 🎯 Objetivo da Estrutura

* Facilitar a vida do time.
* Evitar pastas gigantes como `/components` com arquivos demais.
* Organizar as coisas **por funcionalidade (feature)** e não apenas por tipo.
* Permitir que cada parte do projeto fique separada de forma lógica.

---

## 🗂 Estrutura

```files
src/
├── features/                   # Telas organizadas por funcionalidade
│   └── auth/
│       ├── screens/            # Telas dessa funcionalidade
│       │   ├── LoginScreen.tsx
│       │   └── ...
│       ├── components/         # Componentes usados apenas no Auth
│       │   ├── LoginForm.tsx
│       │   └── ...
│       ├── hooks/              # Hooks específicos do Auth
│       │   └── useLogin.ts
│       └── services/           # API / lógica externa dessa feature
│           └── authApi.ts
│
└── shared/                     # Tudo que é reutilizável entre features
    ├── components/
    │   ├── Button.tsx
    │   └── ...
    ├── hooks/
    │   └── useDebounce.ts
    ├── utils/
    │   └── formatDate.ts
    └── constants/
        └── colors.ts
```

---

## 🧠 Princípio principal: **Organização por Feature**

Em vez de colocar tudo em pastas enormes como:

```files
components/
screens/
hooks/
```

Nós agrupamos **tudo que pertence à mesma funcionalidade** em um lugar só.

Exemplo:
Tudo do Login fica em `features/auth`.

* tela (`screens/LoginScreen.tsx`)
* componentes do login (`components/LoginForm.tsx`)
* hooks do login (`hooks/useLogin.ts`)
* serviços da API de login (`services/authApi.ts`)

Assim, não existe “caça ao arquivo”.

---

## 📦 O que vai em cada lugar?

| Onde                         | O que colocar                                      |
| ---------------------------- | -------------------------------------------------- |
| `features/<nome>/screens`    | Telas completas da feature                         |
| `features/<nome>/components` | Componentes usados **apenas** nessa feature        |
| `features/<nome>/hooks`      | Hooks específicos da feature                       |
| `features/<nome>/services`   | Chamadas de API ou serviços daquela feature        |
| `shared/components`          | Componentes reutilizáveis (Button, Input, Card...) |
| `shared/hooks`               | Hooks reutilizáveis (useDebounce, useOnline...)    |
| `shared/utils`               | Funções úteis (formatadores, validadores)          |
| `shared/constants`           | Cores, tamanhos, keys, configs                     |

---

## 🔍 Como decidir onde colocar um arquivo?

Use esta pergunta:

> **Esse arquivo faz sentido fora dessa feature?**

* **Sim →** Ele vai para `shared`
* **Não →** Ele fica dentro de `features/<feature>`

Exemplos:

* Um `Button` → vai para `shared`
* Um `LoginForm` → fica em `features/auth`
