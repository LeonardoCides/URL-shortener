# URL_shortener

Encurtador de URLs minimalista em **Node.js** e **Express**. Você envia um link longo, recebe um código curto e quem acessa o endereço encurtado é redirecionado automaticamente para o destino original.

---

## O que ele faz

| Ação | Resultado |
|------|-----------|
| `POST /shorten` | Gera um ID de 6 caracteres e guarda o mapeamento |
| `GET /:id` | Redireciona (`302`) para a URL original |

Os dados ficam **apenas em memória** — ao reiniciar o servidor, todos os links encurtados deixam de existir.

---

## Requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado)

---

## Como rodar

Na pasta do projeto:

```bash
npm init -y
npm install express nanoid
node app.js
```

O servidor sobe em **http://localhost:3000** e imprime no terminal:

```text
Server running on port 3000
```

---

## API

### Encurtar URL

**`POST /shorten`**

Corpo JSON:

```json
{
  "longUrl": "https://exemplo.com/pagina/muito/longinha"
}
```

Resposta de exemplo:

```json
{
  "shortUrl": "http://localhost:3000/a1b2c3"
}
```

### Acessar o link curto

Abra no navegador ou faça um `GET`:

```http
GET http://localhost:3000/a1b2c3
```

→ Redirecionamento para a URL original. Se o ID não existir, retorna **404** com a mensagem `URL not found`.

---

## Stack

- [Express](https://expressjs.com/) — servidor HTTP e JSON
- [nanoid](https://github.com/ai/nanoid) — IDs curtos e URL-safe

---

## Fluxo rápido

```mermaid
flowchart LR
    A[Cliente] -->|POST longUrl| B[/shorten]
    B --> C[ID de 6 chars]
    C --> D[Armazena em memória]
    D --> E[Responde shortUrl]
    A -->|GET /id| F[Redireciona 302]
    F --> G[URL original]
```

---

## Licença

Use e adapte como quiser — este repositório é um ponto de partida para experimentos e aprendizado.
