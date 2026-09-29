# A casa das máquinas

Jogo para crianças sobre **o que precisa de energia**: em cada cômodo, a criança procura o que funciona com tomada, pilha ou bateria, e quando acha, a máquina liga. Sem pontos e sem competição.

🎮 **Jogar:** https://casa-das-tecnologias.cliick.dev

## Como funciona

- **7 partes e 44 fases:** Dentro de casa (8 cômodos), Fora de casa (6 lugares), Tomada ou pilha? (7 fases de classificar), Sem energia (6 fases ao contrário), Detetive da energia (só uma é diferente), Boa noite, casa (apague o que não precisa ficar ligado) e Quem sou eu? (charadas).
- **Cena ilustrada:** cada cômodo tem parede, janela, prateleira e chão, com as coisas espalhadas para procurar. Ao achar, o ventilador gira, a chaleira solta vapor, a tela brilha, a lâmpada ilumina.
- **Apagão:** nas fases "Sem energia" a cena fica escura e a criança enxerga com uma lanterna que segue o dedo ou o mouse.
- **Boa noite, casa:** hora de dormir, apague o que não precisa. Mas a geladeira, o despertador e a campainha protestam se alguém tenta apagar.
- **Tomada ou pilha?:** arrastar cada coisa até a caixa certa (ou tocar na coisa e depois na caixa), com dica quando erra.
- **Sem pontos:** cada cômodo explorado vira uma figurinha. Tocar numa coisa errada só explica e o jogo segue.
- **Minha casa:** decorar 4 cômodos com as figurinhas ganhas e escolher a cor das paredes, sem certo nem errado.
- Rituais de bom dia e boa noite, leitura em voz alta, animações desligáveis, sons por máquina (desligados por padrão).

## Para o professor

- Em **Ajustes**: **Modo turma (projetor)** com letras e cartas maiores, **Todos os cômodos abertos** para escolher qualquer fase, sons e animações.
- O progresso e a decoração ficam salvos no próprio aparelho.

## Rodar localmente

Site estático. Sirva a pasta com um servidor simples:

```bash
npx serve .
```

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | A página do jogo |
| `estilo.css` | Visual, a cena do cômodo e as animações das máquinas |
| `jogo.js` | Coisas da casa, fases, modos e a lógica do jogo |
| `icones.js` | Ícones em SVG, gerados a partir da IconPark |
| `fontes/` | Fredoka e Nunito |
| `CNAME` | Domínio do GitHub Pages |

As coisas da casa ficam em `O` em `jogo.js`: ícone, cor, nome e energia (`'t'` tomada, `'p'` pilha ou bateria, `0` nenhuma). As fases ficam em `MUNDOS`; o tipo de efeito de cada máquina ligada (giro, vapor, tela, luz, som) fica em `FX`.

## Créditos e licenças

Veja [CREDITOS.md](CREDITOS.md). Ícones da [IconPark](https://github.com/bytedance/IconPark) (Apache 2.0); fontes [Fredoka](https://fonts.google.com/specimen/Fredoka) e [Nunito](https://fonts.google.com/specimen/Nunito) (OFL).

Faz parte de uma coleção de jogos educativos: [Qual vem depois?](https://github.com/MatheusFQueiroz/padroes), [Qual tecnologia resolve?](https://github.com/MatheusFQueiroz/qual-tecnologia), [Invasão das Letras](https://github.com/MatheusFQueiroz/invasao-das-letras) e [Pode ou não pode?](https://github.com/MatheusFQueiroz/pode-ou-nao-pode).
