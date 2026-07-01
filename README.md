# 🦁 Gasparotti Contabilidade — Site Institucional

Site institucional desenvolvido para a **Gasparotti Contabilidade**, com foco em captação de clientes via WhatsApp, apresentação de serviços e planos contábeis. Projeto construído **100% em HTML, CSS e JavaScript puros**, sem frameworks ou dependências de build.

---

## 📖 Sobre o projeto

O site tem como objetivo comunicar autoridade e confiança no segmento contábil, com uma identidade visual **dark premium** (fundo escuro + detalhes em dourado), guiando o visitante até o contato direto via WhatsApp — canal principal de conversão do negócio.

---

## 🗂️ Estrutura do projeto

```
├── index.html      → Página inicial (hero, serviços, diferenciais, contato)
├── planos.html     → Página de planos e preços (serviço e comércio)
├── blog.html       → Blog institucional (dicas contábeis)
├── style.css       → Estilos globais (variáveis, layout, responsividade)
├── script.js       → Interações: menu, carrossel, animações, formulário
└── imagens/        → Imagens do site (ex: leao.png)
```

> ⚠️ A pasta `imagens/` precisa existir na raiz do projeto com o arquivo `leao.png` (referenciado no hero da `index.html`). Sem ela, a imagem do leão não aparece.

---

## ✨ Funcionalidades

- **Header responsivo** com submenu dropdown (desktop) e menu mobile em overlay (hamburger)
- **Carrossel** com suporte a swipe/touch, navegação por setas, dots e autoplay
- **Contador animado** de estatísticas (números que sobem ao entrar na viewport)
- **Animações de entrada** (`fade-up`) via `IntersectionObserver`
- **Formulário de contato** com feedback visual (toast) — atualmente simulado no front-end (sem envio real, ver seção de pendências)
- **Botão flutuante do WhatsApp** + botões de contato com ícone SVG nativo (não depende de imagem externa)
- **SEO on-page**: meta description, keywords, Open Graph e atributo `lang="pt-br"`
- **Mobile first**, com breakpoint principal em `769px` para desktop/tablet

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Variáveis (custom properties), Flexbox, animações |
| JavaScript (ES6+) | Interações, carrossel, menu, formulário |
| Google Fonts | `Playfair Display` (títulos) + `DM Sans` (texto) |

Nenhuma biblioteca externa é utilizada — tudo é código nativo.

---

## 🎨 Paleta de cores

Definida em `:root` no `style.css`, facilita a manutenção da identidade visual:

| Variável | Cor | Uso |
|---|---|---|
| `--primary` | `#FFD700` | Dourado — CTAs, destaques, títulos em ênfase |
| `--dark` | `#090b14` | Fundo principal |
| `--dark-2` | `#0d1020` | Fundo de seções (contato) |
| `--dark-3` | `#111426` | Fundo de seções (números, diferenciais) |
| `--card` | `#13172a` | Fundo de cards |
| `--text` | `#f0f2ff` | Texto principal |
| `--text-muted` | `#8b90aa` | Texto secundário |
| `--green` | `#25D366` | Botão flutuante do WhatsApp |

---

## 🚀 Como rodar localmente

Como o projeto é 100% estático, não há build nem instalação de dependências. Duas formas de rodar:

**1. Direto no navegador**
Basta abrir o `index.html` com duplo clique.

**2. Com um servidor local (recomendado)**
Evita problemas de cache e caminhos relativos:

```bash
# Python 3
python -m http.server 5500

# ou com Node (npx)
npx serve .
```

Depois acesse `http://localhost:5500`.

---

## 📱 Configuração do WhatsApp

O número de contato está fixo em todos os arquivos HTML no formato:

```
https://wa.me/5516988296452
```

Para trocar o número, procure e substitua `5516988296452` por outro nas 3 páginas (`index.html`, `planos.html`, `blog.html` se aplicável).

---

## 📌 Pendências conhecidas

- [ ] Adicionar a imagem `imagens/leao.png` (referenciada mas não incluída no repositório)
- [ ] Conectar o formulário de contato a um serviço real de envio (ex: Formspree, EmailJS ou back-end próprio) — hoje ele apenas simula o envio no front-end
- [ ] Substituir os links `#` do menu (Serviços, Sobre, Contato) pelas páginas/seções finais
- [ ] Revisar textos e imagens do `blog.html` antes da publicação

---

## 👨‍💻 Desenvolvido por

**DK Web Code** — desenvolvimento front-end sob medida.
🔗 [dkwebcode.com.br](https://dkwebcode.com.br)
📺 [@dkwebcode](https://youtube.com/@dkwebcode)

---

© 2026 Gasparotti Contabilidade — Todos os direitos reservados.
