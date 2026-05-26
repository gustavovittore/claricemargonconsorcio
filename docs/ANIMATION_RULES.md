# ANIMATION RULES — CLARICE MARGON CONSÓRCIOS

## OBJETIVO DESTE DOCUMENTO

Este arquivo define as regras de animação da landing page de Clarice Margon.

As animações devem reforçar a percepção premium da página.

Elas devem deixar a experiência mais elegante, fluida e profissional.

Não devem parecer exageradas, infantis ou chamativas demais.

--------------------------------------------------

# PRINCÍPIO CENTRAL

Animação premium é sutil.

A animação deve ajudar o usuário a perceber:

- hierarquia;
- fluidez;
- sofisticação;
- organização;
- modernidade.

A animação NÃO deve competir com o conteúdo.

--------------------------------------------------

# BIBLIOTECAS DISPONÍVEIS

O projeto possui:

- motion;
- react-countup;
- recharts.

Usar cada biblioteca de forma estratégica.

## motion

Para:

- scroll reveal;
- entrada de textos;
- entrada de cards;
- microinterações;
- hover elegante;
- transições suaves;
- elementos flutuantes sutis.

## react-countup

Para:

- números animados;
- estatísticas;
- indicadores de confiança;
- resultados institucionais.

## recharts

Para:

- gráficos educativos;
- comparativos visuais;
- evolução patrimonial conceitual;
- visualizações financeiras simples.

--------------------------------------------------

# ESTILO DE ANIMAÇÃO

As animações devem ser:

- suaves;
- elegantes;
- discretas;
- lentas o suficiente para parecer premium;
- rápidas o suficiente para não travar a experiência;
- com delays bem distribuídos;
- com movimento natural.

Evitar:

- bounce exagerado;
- zoom agressivo;
- rotação sem propósito;
- efeitos neon;
- elementos piscando;
- animações infinitas chamativas;
- excesso de parallax;
- movimento demais no mobile.

--------------------------------------------------

# SCROLL REVEAL

Usar scroll reveal nas principais seções.

Padrão recomendado:

- opacity de 0 para 1;
- translateY de 24px para 0;
- duração entre 0.5s e 0.9s;
- easing suave;
- stagger em cards.

Exemplo de comportamento:

- título entra primeiro;
- subtítulo entra depois;
- cards entram em cascata;
- CTA aparece por último.

Isso cria sensação premium e organizada.

--------------------------------------------------

# HERO SECTION

A hero deve ter animação mais refinada.

Sequência recomendada:

1. eyebrow/selo aparece suavemente;
2. título entra com leve movimento vertical;
3. subtítulo aparece depois;
4. CTAs entram em seguida;
5. imagem ou composição visual entra com leve fade e deslocamento;
6. cards flutuantes aparecem com delay.

Evitar:

- animação muito rápida;
- todos os elementos aparecendo ao mesmo tempo;
- efeitos bruscos.

--------------------------------------------------

# CARDS

Cards podem usar:

- fade up;
- stagger;
- hover suave;
- borda levemente destacada no hover;
- sombra um pouco mais evidente no hover;
- pequeno deslocamento vertical no hover.

Evitar:

- card pulando;
- hover exagerado;
- escala grande demais;
- animação pesada em muitos cards ao mesmo tempo.

--------------------------------------------------

# BOTÕES

Botões devem ter microinterações.

Possíveis efeitos:

- leve elevação no hover;
- brilho dourado sutil;
- transição de sombra;
- mudança suave de cor;
- ícone deslocando levemente para a direita.

Evitar:

- botão piscando;
- animação agressiva;
- pulse exagerado;
- tremedeira;
- efeito chamativo demais.

O botão principal pode ter um movimento muito sutil de destaque, mas sem parecer anúncio agressivo.

--------------------------------------------------

# NÚMEROS ANIMADOS

Usar react-countup em números de autoridade.

Exemplos possíveis:

- +300 clientes atendidos;
- 3 anos de experiência;
- 8 instituições parceiras;
- atendimento no Brasil e exterior.

Regras:

- animar apenas quando entrar na tela;
- duração confortável;
- não repetir animação excessivamente;
- manter layout estável;
- não inventar números não confirmados.

Se o número não for confirmado, usar texto sem countup.

--------------------------------------------------

# GRÁFICOS COM RECHARTS

Gráficos devem animar de forma leve.

Usar para exemplos educativos.

Regras:

- animação suave na entrada;
- poucas linhas ou barras;
- legenda clara;
- cores discretas;
- dourado apenas como destaque;
- sem excesso de informações.

Não usar gráficos com dados inventados apresentados como reais.

Quando for conceitual, usar aviso:

"Exemplo visual para fins educativos. A simulação real depende de análise personalizada."

--------------------------------------------------

# SEÇÃO BANCOS

Logos ou nomes de bancos podem aparecer com:

- fade in;
- leve stagger;
- hover sutil;
- pequena mudança de opacidade;
- borda refinada no hover.

Evitar:

- carrossel rápido;
- movimento infinito chamativo;
- logos pulando;
- efeitos coloridos demais.

--------------------------------------------------

# SEÇÃO BRASILEIROS NO EXTERIOR

Essa seção pode ter animação mais emocional e sofisticada.

Ideias:

- mapa abstrato sutil;
- linha visual conectando exterior e Brasil;
- cards entrando suavemente;
- elementos de localização com movimento leve.

Mas não usar react-simple-maps neste momento.

Se quiser representar Brasil/EUA, usar composição visual simples, elegante e estática ou levemente animada com motion.

--------------------------------------------------

# DEPOIMENTOS EM VÍDEO

Se houver vídeos:

- card principal pode entrar em fade up;
- botão play pode ter microinteração;
- mini cards podem aparecer em cascade;
- hover pode elevar levemente o card.

Não autoplay.

Não carregar vídeos pesados diretamente se isso prejudicar performance.

Preferir thumbnail com play e link/emb incorporação controlada.

--------------------------------------------------

# FAQ

FAQ pode usar animação de accordion.

Regras:

- abertura suave;
- altura animada;
- ícone girando levemente;
- sem movimento brusco.

FAQ deve ser funcional, não enfeitado demais.

--------------------------------------------------

# MENU / NAVBAR

Se houver navbar fixa ou flutuante:

- pode usar blur sutil;
- mudança de fundo ao scroll;
- transição suave;
- sombra leve;
- botão de WhatsApp com destaque discreto.

No mobile, evitar animações complexas no menu.

--------------------------------------------------

# MOBILE

No mobile, reduzir animações.

Regras:

- manter apenas fade/slide suave;
- evitar parallax;
- evitar muitos elementos animando juntos;
- evitar gráficos pesados;
- garantir fluidez;
- priorizar legibilidade e velocidade.

A experiência mobile deve ser elegante e leve.

--------------------------------------------------

# PERFORMANCE

Animações não podem prejudicar performance.

Evitar:

- animação em excesso;
- muitos elementos com shadow animada;
- blur pesado em muitos blocos;
- vídeos carregando automaticamente;
- gráficos complexos;
- parallax constante.

Usar animações apenas onde agregam percepção premium.

--------------------------------------------------

# ACESSIBILIDADE

Respeitar usuários sensíveis a movimento.

Quando possível, considerar prefers-reduced-motion.

Animações devem ser suaves e não causar desconforto.

--------------------------------------------------

# REGRA FINAL PARA O CODEX

Toda animação precisa ter propósito.

Não animar por animar.

A animação deve reforçar:

- sofisticação;
- confiança;
- autoridade;
- fluidez;
- percepção premium;
- conversão.

Se a animação parecer exagerada, reduzir.

Se parecer genérica, refinar.

Se prejudicar mobile, remover ou simplificar.
