(function(){
'use strict';
var TINTA='#3B2F2F';

/* ======================================================================
   Ícones (icones.js): IconPark com as cores do jogo
   ====================================================================== */
function clareia(hex,t){
  var n=parseInt(hex.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;
  r=Math.round(r+(255-r)*t); g=Math.round(g+(255-g)*t); b=Math.round(b+(255-b)*t);
  return '#'+((1<<24)|(r<<16)|(g<<8)|b).toString(16).slice(1);
}
function icone(nome,cor,cor2){
  var corpo=ICONES[nome].replace(/"#000"/g,'"'+TINTA+'"').replace(/#2F88FF/gi,cor||'#F4A261').replace(/#43CCF8/gi,cor2||clareia(cor||'#F4A261',.55));
  return '<svg class="ic" viewBox="0 0 48 48" aria-hidden="true">'+corpo+'</svg>';
}
function silhueta(nome){
  return '<svg class="ic" viewBox="0 0 48 48" aria-hidden="true">'+ICONES[nome].replace(/stroke="#[0-9a-fA-F]{3,6}"/g,'stroke="#D9CFC7"').replace(/fill="#[0-9a-fA-F]{3,6}"/g,'fill="#F0E9E3"')+'</svg>';
}
var CHECK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var RAIO='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor"/></svg>';
var C={laranja:'#F4A261',tijolo:'#E76F51',verde:'#2A9D8F',azul:'#457B9D',amarelo:'#F9C74F',rosa:'#F28482',roxo:'#9B7EDE',madeira:'#B08968',cinza:'#A8A29E',ceu:'#8ECAE6',folha:'#80B918'};

/* ======================================================================
   Coisas da casa: [ícone, cor, nome, energia]  energia: 't' tomada · 'p' pilha ou bateria · 0 nenhuma
   ====================================================================== */
var O={
 geladeira:['refrigerator',C.ceu,'geladeira','t'], microondas:['microwave-oven',C.cinza,'micro-ondas','t'], maca:['apple',C.tijolo,'maçã',0], colher:['spoon',C.cinza,'colher',0],
 lampada:['lampada',C.amarelo,'lâmpada','t'], pao:['bread',C.laranja,'pão',0], leite:['milk',C.ceu,'leite',0], chaleira:['kettle',C.tijolo,'chaleira elétrica','t'],
 liquidificador:['soybean-milk-maker',C.rosa,'liquidificador','t'], faca:['kitchen-knife',C.cinza,'faca',0], panela:['cooking-pot',C.cinza,'panela',0], torradeira:['bread-machine',C.laranja,'torradeira','t'],
 tv:['tv-one',C.roxo,'televisão','t'], sofa:['sofa',C.verde,'sofá',0], videogame:['gamepad',C.roxo,'videogame','t'], planta:['seedling',C.folha,'planta',0], livros:['book-one',C.azul,'livros',0],
 caixasom:['speaker',C.laranja,'caixa de som','t'], ursinho:['bear',C.madeira,'ursinho',0], relogio:['time',C.verde,'relógio de parede','p'], controle:['remote-control',C.cinza,'controle remoto','p'], quadro:['picture',C.ceu,'quadro na parede',0],
 despertador:['alarm-clock',C.tijolo,'despertador','p'], cama:['single-bed',C.azul,'cama',0], celular:['iphone',C.azul,'celular','p'], camiseta:['t-shirt',C.ceu,'camiseta',0], notebook:['laptop',C.azul,'notebook','p'],
 mochila:['backpack',C.verde,'mochila',0], meia:['socks',C.rosa,'meia',0], abajur:['desk-lamp',C.amarelo,'abajur','t'], ventilador:['ventilador',C.ceu,'ventilador','t'], lanterna:['flashlight',C.amarelo,'lanterna','p'],
 chuveiro:['shower-head',C.ceu,'chuveiro elétrico','t'], espelho:['mirror',C.cinza,'espelho',0], sabonete:['soap-bubble',C.rosa,'sabonete',0], toalha:['towel',C.verde,'toalha',0], secador:['hair-dryer',C.rosa,'secador de cabelo','t'],
 escova:['escova',C.azul,'escova de dentes',0], pente:['hair-brush',C.madeira,'pente',0], balanca:['weight',C.cinza,'balança digital','p'],
 maquinalavar:['washing-machine',C.ceu,'máquina de lavar','t'], sabao:['handwashing-fluid',C.verde,'sabão',0], luva:['glove',C.amarelo,'luva',0], ferro:['iron',C.rosa,'ferro de passar','t'],
 calca:['clothes-pants',C.azul,'calça',0], aspirador:['vacuum-cleaner',C.tijolo,'aspirador de pó','t'], tesoura:['scissors',C.tijolo,'tesoura',0], blusa:['clothes-hoodie',C.roxo,'blusa',0],
 computador:['computer',C.azul,'computador','t'], impressora:['printer',C.cinza,'impressora','t'], lapis:['pencil',C.amarelo,'lápis',0], caderno:['notebook',C.verde,'caderno',0], roteador:['router',C.cinza,'roteador de wi-fi','t'],
 calculadora:['calculator',C.verde,'calculadora','p'], mouse:['mouse',C.cinza,'mouse sem fio','p'], regua:['ruler',C.laranja,'régua',0], clips:['paperclip',C.cinza,'clipes',0], fone:['headset',C.roxo,'fone sem fio','p'],
 furadeira:['electric-drill',C.laranja,'furadeira','t'], bicicleta:['bike',C.tijolo,'bicicleta',0], martelo:['hammer-and-anvil',C.cinza,'martelo',0], capacete:['helmet',C.amarelo,'capacete',0], bola:['football',C.verde,'bola',0],
 radio:['radio',C.laranja,'rádio','p'], skate:['skate',C.roxo,'skate',0], pneu:['tire-swing',C.cinza,'pneu de balanço',0], balanco:['swing',C.folha,'balanço',0], pa:['shovel',C.madeira,'pá',0],
 arvore:['tree-one',C.folha,'árvore',0], luzquintal:['light',C.amarelo,'luz do quintal','t'], drone:['drone',C.ceu,'drone','p'], cachorro:['dog',C.madeira,'cachorro',0], flor:['geometric-flowers',C.rosa,'vaso de flor',0],
 mangueira:['water',C.ceu,'mangueira',0], projetor:['projector',C.laranja,'projetor','t'], livroaberto:['book-open',C.azul,'livro',0], microfone:['microphone',C.roxo,'microfone sem fio','p'], tablet:['ipad',C.roxo,'tablet','p'],
 cadeira:['chair',C.madeira,'cadeira',0], semaforo:['semaforo',C.cinza,'semáforo','t'], poste:['lampada',C.amarelo,'poste de luz','t'], placa:['road-sign',C.folha,'placa',0], maquininha:['maquininha',C.verde,'máquina de cartão','p'],
 camera:['surveillance-cameras',C.cinza,'câmera de segurança','t'], banco:['sofa-two',C.madeira,'banco da praça',0], lixeira:['delete',C.verde,'lixeira',0],
 campainha:['remind',C.amarelo,'campainha','t'], chave:['key-two',C.amarelo,'chave',0], guardachuva:['umbrella',C.azul,'guarda-chuva',0], interfone:['phone',C.cinza,'interfone','t'], retrato:['picture',C.ceu,'porta-retrato',0], tapete:['towel',C.tijolo,'tapete',0],
 termometro:['thermometer',C.tijolo,'termômetro digital','p'], estetoscopio:['stethoscope',C.tijolo,'estetoscópio',0], remedio:['pill',C.rosa,'remédio',0], maca:['hospital-bed',C.ceu,'maca',0], kit:['first-aid-kit',C.tijolo,'caixa de curativos',0], cadeirarodas:['wheelchair',C.azul,'cadeira de rodas',0], cardio:['heartbeat',C.verde,'monitor do coração','t'],
 robo:['robot-one',C.ceu,'robô de brinquedo','p'], cavalinho:['rocking-horse',C.madeira,'cavalinho de balanço',0], quebra:['puzzle',C.roxo,'quebra-cabeça',0], carrinho:['car',C.tijolo,'carrinho de controle remoto','p'], portatil:['game-console-one',C.roxo,'videogame portátil','p'], trombeta:['trumpet',C.amarelo,'trombeta de brinquedo',0], mobile:['baby-mobile',C.rosa,'móbile do bebê',0], pinwheel:['pinwheel',C.folha,'cata-vento',0],
 sacola:['shopping-bag',C.laranja,'sacola',0], cesta:['vegetable-basket',C.verde,'cesta de frutas',0], leitor:['scan-code',C.cinza,'leitor de código','t'], cartao:['bank-card',C.azul,'cartão',0], cafeteira:['coffee-machine',C.madeira,'máquina de café','t'], carrinhocompras:['shopping-cart',C.verde,'carrinho de compras',0], ticket:['ticket',C.amarelo,'nota fiscal',0], sorvete:['icecream',C.rosa,'sorvete',0]
};
function coisa(k){ return O[k]; }

/* ======================================================================
   Fases
   t:'ache'      → toque em tudo que usa tomada ou pilha (ok = itens com energia)
   t:'inverso'   → toque em tudo que funciona SEM energia
   t:'classifica'→ para cada coisa, escolha: tomada, pilha/bateria ou nenhuma
   f = figurinha [ícone, cor, nome]
   ====================================================================== */
var MUNDOS=[
 {nome:'Dentro de casa',ic:['home',C.laranja],cor:'#FFE8D1',txt:'Cômodo por cômodo, ache tudo que precisa de energia.',fases:[
  {t:'ache',nome:'Cozinha',ic:'cooking-pot',itens:['geladeira','microondas','maca','colher','lampada','pao','leite','chaleira'],f:['refrigerator',C.ceu,'Geladeira']},
  {t:'ache',nome:'Sala',ic:'sofa',itens:['tv','sofa','videogame','planta','livros','caixasom','ursinho','relogio'],f:['tv-one',C.roxo,'Televisão']},
  {t:'ache',nome:'Quarto',ic:'single-bed',itens:['despertador','cama','celular','camiseta','notebook','mochila','meia','abajur'],f:['alarm-clock',C.tijolo,'Despertador']},
  {t:'ache',nome:'Banheiro',ic:'shower-head',itens:['chuveiro','espelho','sabonete','toalha','secador','escova','lampada','pente'],f:['hair-dryer',C.rosa,'Secador']},
  {t:'ache',nome:'Lavanderia',ic:'washing-machine',itens:['maquinalavar','sabao','luva','ferro','calca','aspirador','tesoura','blusa'],f:['washing-machine',C.ceu,'Máquina de lavar']},
  {t:'ache',nome:'Escritório',ic:'computer',itens:['computador','impressora','lapis','caderno','roteador','calculadora','mouse','regua','clips','fone'],f:['computer',C.azul,'Computador']},
  {t:'ache',nome:'Entrada',ic:'remind',itens:['campainha','chave','guardachuva','interfone','retrato','tapete','lampada','mochila'],f:['remind',C.amarelo,'Campainha']},
  {t:'ache',nome:'Quarto de brinquedos',ic:'robot-one',itens:['robo','cavalinho','quebra','carrinho','portatil','trombeta','ursinho','bola','mobile','pinwheel'],f:['robot-one',C.ceu,'Robô']}]},
 {nome:'Fora de casa',ic:['tree-one',C.folha],cor:'#E3F2D3',txt:'Garagem, quintal, escola e rua também têm máquinas.',fases:[
  {t:'ache',nome:'Garagem',ic:'electric-drill',itens:['furadeira','bicicleta','martelo','lanterna','capacete','bola','radio','skate'],f:['electric-drill',C.laranja,'Furadeira']},
  {t:'ache',nome:'Quintal',ic:'swing',itens:['balanco','pa','arvore','luzquintal','drone','cachorro','flor','mangueira','pneu','bola'],f:['drone',C.ceu,'Drone']},
  {t:'ache',nome:'Sala de aula',ic:'school',itens:['projetor','livroaberto','microfone','lapis','tablet','mochila','relogio','cadeira','impressora','regua'],f:['projector',C.laranja,'Projetor']},
  {t:'ache',nome:'Rua',ic:'road-sign',itens:['semaforo','poste','placa','arvore','maquininha','bicicleta','camera','banco','lixeira','cachorro'],f:['semaforo',C.cinza,'Semáforo']},
  {t:'ache',nome:'Mercado',ic:'shopping-cart',itens:['leitor','sacola','geladeira','cesta','maquininha','cartao','cafeteira','carrinhocompras','ticket','lampada'],f:['scan-code',C.cinza,'Leitor de código']},
  {t:'ache',nome:'Posto de saúde',ic:'stethoscope',itens:['termometro','estetoscopio','remedio','maca','kit','cadeirarodas','cardio','computador'],f:['stethoscope',C.tijolo,'Estetoscópio']}]},
 {nome:'Tomada ou pilha?',ic:['plug',C.tijolo],cor:'#FFDAD3',txt:'Algumas máquinas ficam presas na tomada. Outras andam com pilha ou bateria.',fases:[
  {t:'classifica',nome:'Na cozinha e na sala',ic:'plug',itens:['geladeira','controle','microondas','relogio','tv','lanterna'],f:['plug',C.tijolo,'Tomada']},
  {t:'classifica',nome:'No quarto',ic:'battery-full',itens:['celular','abajur','despertador','ventilador','notebook','camiseta'],f:['battery-full',C.verde,'Pilha']},
  {t:'classifica',nome:'No escritório',ic:'computer',itens:['computador','mouse','impressora','calculadora','caderno','fone'],f:['mouse',C.cinza,'Mouse sem fio']},
  {t:'classifica',nome:'Lá fora',ic:'road-sign',itens:['semaforo','drone','furadeira','radio','maquininha','bicicleta'],f:['radio',C.laranja,'Rádio']},
  {t:'classifica',nome:'Brinquedos',ic:'robot-one',itens:['robo','cavalinho','carrinho','quebra','portatil','trombeta'],f:['gamepad',C.roxo,'Videogame']},
  {t:'classifica',nome:'No mercado e no posto',ic:'stethoscope',itens:['leitor','termometro','sacola','cardio','maquininha','remedio'],f:['thermometer',C.tijolo,'Termômetro']},
  {t:'classifica',nome:'Mistura de tudo',ic:'magic',itens:['chuveiro','tablet','maquinalavar','microfone','balanca','bola','secador','luzquintal'],f:['magic',C.roxo,'Mistura']}]},
 {nome:'Sem energia',ic:['seedling',C.verde],cor:'#D6F0EC',txt:'Ao contrário: ache tudo que funciona sem tomada e sem pilha.',fases:[
  {t:'inverso',nome:'Cozinha',ic:'cooking-pot',itens:['geladeira','maca','microondas','colher','pao','chaleira','panela','torradeira'],f:['apple',C.tijolo,'Maçã']},
  {t:'inverso',nome:'Quarto e banheiro',ic:'single-bed',itens:['cama','celular','camiseta','secador','escova','abajur','pente','lanterna'],f:['escova',C.azul,'Escova de dentes']},
  {t:'inverso',nome:'Escola',ic:'school',itens:['projetor','lapis','tablet','livroaberto','cadeira','microfone','regua','mochila'],f:['pencil',C.amarelo,'Lápis']},
  {t:'inverso',nome:'Quintal e rua',ic:'tree-one',itens:['drone','arvore','semaforo','bola','bicicleta','camera','pa','poste'],f:['bike',C.tijolo,'Bicicleta']},
  {t:'inverso',nome:'Lavanderia e escritório',ic:'washing-machine',itens:['maquinalavar','luva','ferro','tesoura','impressora','lapis','roteador','regua'],f:['scissors',C.tijolo,'Tesoura']},
  {t:'inverso',nome:'Brinquedos e mercado',ic:'shopping-cart',itens:['robo','quebra','carrinho','cavalinho','leitor','sacola','cafeteira','cesta'],f:['puzzle',C.roxo,'Quebra-cabeça']}]},
 {nome:'Detetive da energia',ic:['search',C.roxo],cor:'#E9E1F7',txt:'Só uma das quatro é diferente. Encontre!',fases:[
  {t:'inverso',nome:'Qual funciona sem energia?',ic:'search',itens:['tv','geladeira','sofa','videogame'],f:['sofa',C.verde,'Sofá']},
  {t:'ache',nome:'Qual precisa de energia?',ic:'search',itens:['pao','leite','chaleira','maca'],f:['kettle',C.tijolo,'Chaleira']},
  {t:'inverso',nome:'Qual funciona sem energia?',ic:'search',itens:['celular','lanterna','notebook','mochila'],f:['backpack',C.verde,'Mochila']},
  {t:'ache',nome:'Qual precisa de energia?',ic:'search',itens:['bola','skate','radio','capacete'],f:['radio',C.laranja,'Rádio']},
  {t:'inverso',nome:'Qual funciona sem energia?',ic:'search',itens:['semaforo','camera','poste','placa'],f:['road-sign',C.folha,'Placa']},
  {t:'ache',nome:'Qual precisa de energia?',ic:'search',itens:['cavalinho','quebra','robo','trombeta'],f:['robot-one',C.ceu,'Robô detetive']}]}
];
var FASES=[]; MUNDOS.forEach(function(m,mi){ m.fases.forEach(function(f,fi){ f.m=mi; f.i=fi; FASES.push(f); }); });
var ELOGIOS=['Muito bem!','Você conhece a casa toda!','Isso mesmo!','Boa!','Mandou bem!'];
var NOME_E={t:'tomada',p:'pilha ou bateria',0:'nenhuma'};

/* ======================================================================
   Memória e ajustes
   ====================================================================== */
var CHAVE='casa-v2';
var est={feitas:{},som:false,anim:true,livre:false};
try{ var sv=JSON.parse(localStorage.getItem(CHAVE)||'null'); if(sv) for(var k in sv) est[k]=sv[k]; }catch(e){}
try{ if(!localStorage.getItem(CHAVE)&&window.matchMedia('(prefers-reduced-motion: reduce)').matches) est.anim=false; }catch(e){}
function salva(){ try{ localStorage.setItem(CHAVE,JSON.stringify(est)); }catch(e){} }
var $=function(i){return document.getElementById(i)};
function el(tag,cls,html){ var d=document.createElement(tag); if(cls) d.className=cls; if(html!=null) d.innerHTML=html; return d; }
function txt(tag,cls,t){ var d=el(tag,cls); d.textContent=t; return d; }
function aplicaAnim(){ document.body.classList.toggle('sem-animacao',!est.anim); }
function depois(ms,fn){ return setTimeout(fn,est.anim?ms:0); }
var ctx=null;
function tom(freqs){
  if(!est.som) return;
  try{ ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();
    freqs.forEach(function(f,i){ var o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+i*.12; o.type='sine'; o.frequency.value=f;
      g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(.08,t+.03); g.gain.exponentialRampToValueAtTime(.0001,t+.35); o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t+.4); });
  }catch(e){}
}
function fala(t){ try{ speechSynthesis.cancel(); var u=new SpeechSynthesisUtterance(t); u.lang='pt-BR'; u.rate=.9; speechSynthesis.speak(u); }catch(e){} }

/* ======================================================================
   Navegação
   ====================================================================== */
var telaAtual='mapa';
function mostra(id){
  ['mapa','jogo','album','ajustes'].forEach(function(t){ $(t).classList.toggle('oculto',t!==id); });
  var t=$(id); t.classList.remove('entra'); void t.offsetWidth; t.classList.add('entra');
  $('premio').classList.add('oculto'); $('escolha').classList.add('oculto');
  [].forEach.call(document.querySelectorAll('.confete,.faisca'),function(x){ x.remove(); });
  ['Mapa','Album','Ajustes'].forEach(function(n){ $('bt'+n).classList.toggle('ativo',id===n.toLowerCase()||(id==='jogo'&&n==='Mapa')); });
  try{ speechSynthesis.cancel(); }catch(e){}
  telaAtual=id; window.scrollTo(0,0);
}
function aberta(i){ return est.livre||i===0||!!est.feitas[i-1]||!!est.feitas[i]; }
function proxima(){ for(var i=0;i<FASES.length;i++) if(!est.feitas[i]) return i; return -1; }
function mundoCompleto(m){ return MUNDOS[m].fases.every(function(f){ return est.feitas[FASES.indexOf(f)]; }); }

/* ---------- mapa: a casa ---------- */
function mapa(){
  var t=$('mapa'); t.innerHTML='';
  var p=proxima(),n=Object.keys(est.feitas).length;
  var cab=el('div','cabecalho');
  cab.appendChild(el('div','casinha',CASA_SVG));
  var tx=el('div','cab-txt');
  tx.appendChild(txt('h1',null,n===0?'Que máquinas moram na sua casa?':p<0?'Você conhece a casa inteira!':'Bem-vindo de volta!'));
  tx.appendChild(txt('p',null,n===0?'Em cada cômodo, toque em tudo que funciona com tomada, pilha ou bateria. Cada cômodo explorado vira uma figurinha. Comece pela porta amarela.'
    :p<0?'Pode voltar em qualquer cômodo para brincar de novo.':'A porta amarela mostra onde você parou.'));
  cab.appendChild(tx); t.appendChild(cab);
  var andares=el('div','andares');
  MUNDOS.forEach(function(m,mi){
    var c=el('section','andar'); c.style.setProperty('--cor',m.cor); c.style.animationDelay=(mi*.06)+'s';
    var topo=el('div','andar-topo'); topo.appendChild(el('div','andar-ic',icone(m.ic[0],m.ic[1])));
    var tt=el('div'); tt.appendChild(txt('h2',null,m.nome)); tt.appendChild(txt('p',null,m.txt)); topo.appendChild(tt);
    if(mundoCompleto(mi)) topo.appendChild(el('span','selo-ok',CHECK+'<span>Completo</span>'));
    c.appendChild(topo);
    var portas=el('div','portas');
    m.fases.forEach(function(f,fi){
      var gi=FASES.indexOf(f),b=el('button','porta');
      b.innerHTML='<span class="porta-ic">'+(est.feitas[gi]?icone(f.f[0],f.f[1]):aberta(gi)?icone(f.ic,m.ic[1]):silhueta(f.ic))+'</span><span class="porta-nome">'+f.nome+'</span>';
      if(est.feitas[gi]){ b.classList.add('feita'); b.setAttribute('aria-label',f.nome+', explorado'); }
      else if(aberta(gi)){ b.classList.add(gi===p?'atual':'aberta'); b.setAttribute('aria-label',f.nome); }
      else { b.classList.add('fechada'); b.setAttribute('aria-label',f.nome+', ainda fechado'); }
      b.onclick=function(){ if(aberta(gi)) joga(gi); };
      portas.appendChild(b);
    });
    c.appendChild(portas); andares.appendChild(c);
  });
  t.appendChild(andares); mostra('mapa');
}
var CASA_SVG='<svg viewBox="0 0 120 110" aria-hidden="true"><path d="M10 52 60 12l50 40" fill="none" stroke="#E76F51" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 50v50h80V50" fill="#FFF3E6" stroke="#3B2F2F" stroke-width="4" stroke-linejoin="round"/><rect x="50" y="66" width="20" height="34" rx="3" fill="#F9C74F" stroke="#3B2F2F" stroke-width="3"/><circle cx="65" cy="84" r="2" fill="#3B2F2F"/><rect x="28" y="58" width="16" height="16" rx="2" fill="#8ECAE6" stroke="#3B2F2F" stroke-width="3"/><rect x="76" y="58" width="16" height="16" rx="2" fill="#8ECAE6" stroke="#3B2F2F" stroke-width="3"/><path d="M36 58v16M28 66h16M84 58v16M76 66h16" stroke="#3B2F2F" stroke-width="2"/><rect x="82" y="20" width="10" height="18" fill="#B08968" stroke="#3B2F2F" stroke-width="3"/><path d="M60 12 20 44" stroke="#E76F51" stroke-width="8" stroke-linecap="round"/></svg>';

/* ======================================================================
   Jogo
   ====================================================================== */
var atual=0,L=null,achou=0,alvo=0,erros=0,trava=false,pend=null,cards=[];
function joga(i){
  atual=i; L=FASES[i]; achou=0; erros=0; trava=false; pend=null; cards=[];
  var m=MUNDOS[L.m];
  $('jogo').style.setProperty('--cor',m.cor);
  $('chipComodo').innerHTML=icone(L.ic,m.ic[1]); $('chipComodo').appendChild(txt('span',null,L.nome));
  var ps=$('passos'); ps.innerHTML='';
  m.fases.forEach(function(f,fi){ var d=el('i'); if(est.feitas[FASES.indexOf(f)]) d.className='f'; if(fi===L.i) d.className='a'; ps.appendChild(d); });
  $('aviso').innerHTML='';
  var perg=$('pergunta');
  if(L.t==='ache'){ alvo=L.itens.filter(function(k){ return O[k][3]; }).length; perg.innerHTML='<b>'+L.nome+'</b><span>'+(alvo===1?'Três funcionam só com a gente. Toque na única que precisa de <em>tomada</em>, <em>pilha</em> ou <em>bateria</em>.':'Toque em tudo que funciona com <em>tomada</em>, <em>pilha</em> ou <em>bateria</em>.')+'</span>'; }
  else if(L.t==='inverso'){ alvo=L.itens.filter(function(k){ return !O[k][3]; }).length; perg.innerHTML='<b>'+L.nome+'</b><span>'+(alvo===1?'Três precisam de energia. Toque na única que funciona <em>sem energia</em> nenhuma.':'Ao contrário: toque em tudo que funciona <em>sem energia</em> nenhuma.')+'</span>'; }
  else { alvo=L.itens.length; perg.innerHTML='<b>'+L.nome+'</b><span>Toque em cada coisa e diga: <em>tomada</em>, <em>pilha ou bateria</em>, ou <em>nenhuma</em>?</span>'; }
  contador();
  var gr=$('grade'); gr.innerHTML=''; gr.className='grade'+(L.itens.length>8?' dez':L.itens.length<=4?' quatro':'');
  L.itens.slice().sort(function(){ return Math.random()-.5; }).forEach(function(k,idx){
    var o=O[k],b=el('button','coisa',icone(o[0],o[1])); b.appendChild(txt('span','t',o[2])); b.style.animationDelay=(idx*.05)+'s'; b._k=k;
    b.setAttribute('aria-label',o[2]); b.onclick=function(){ toca(b); }; gr.appendChild(b); cards.push(b);
  });
  mostra('jogo');
}
function contador(){
  var c=$('contador'); c.innerHTML='';
  c.appendChild(txt('span',null,L.t==='classifica'?'Respondidas:':'Encontradas:'));
  for(var i=0;i<alvo;i++) c.appendChild(el('b',i<achou?'ok':'',i<achou?CHECK:''));
}
function avisa(t,tipo){ var a=$('aviso'); a.innerHTML=''; a.appendChild(el('div','aviso-caixa'+(tipo?' '+tipo:''),'<span>'+t+'</span>')); }
function faiscas(alvoEl){
  if(!est.anim) return; var r=alvoEl.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cores=[C.amarelo,C.laranja,'#fff',C.ceu];
  for(var i=0;i<10;i++){ var f=el('div','faisca',RAIO.replace('currentColor',cores[i%4])); var ang=i/10*Math.PI*2,dist=r.width*.5+Math.random()*30;
    f.style.left=(cx-8)+'px'; f.style.top=(cy-8)+'px'; f.style.setProperty('--dx',Math.cos(ang)*dist+'px'); f.style.setProperty('--dy',Math.sin(ang)*dist+'px'); document.body.appendChild(f); setTimeout(f.remove.bind(f),900); }
}
function toca(b){
  if(trava||b.classList.contains('certa')||b.classList.contains('feita')) return;
  var o=O[b._k],energia=o[3];
  if(L.t==='classifica'){ pend=b; abreEscolha(b,o); return; }
  var quer=L.t==='ache'?!!energia:!energia;
  if(quer){
    b.classList.add('certa'); b.appendChild(el('span','selo-ok-c'+(energia?' '+energia:' zero'),energia?RAIO:CHECK)); achou++; tom([523]); faiscas(b); contador();
    var falta=alvo-achou;
    if(falta===0){ trava=true; depois(700,conclui); }
    else avisa((energia?'<b>'+o[2]+'</b> usa '+NOME_E[energia]+'. ':'<b>'+o[2]+'</b> não precisa de energia. ')+(falta===1?'Falta só mais uma!':'Faltam '+falta+'.'),'bom');
  } else {
    erros++; tom([330]); b.classList.add('fora'); if(est.anim){ b.classList.remove('treme'); void b.offsetWidth; b.classList.add('treme'); }
    avisa(L.t==='ache'?'<b>'+o[2]+'</b> não usa tomada nem pilha: funciona só com a gente. Procure outra!':'<b>'+o[2]+'</b> usa '+NOME_E[energia]+'. Aqui a gente procura o que funciona sem energia.');
  }
}
/* classificar: janelinha com as três opções */
function abreEscolha(b,o){
  var j=$('escolha'); j.innerHTML='';
  var c=el('div','escolha-cartao'); c.appendChild(el('div','escolha-fig',icone(o[0],o[1]))); c.appendChild(txt('h3',null,o[2]));
  c.appendChild(txt('p',null,'Como funciona?'));
  var ops=el('div','escolha-ops');
  [['t','plug','Tomada',C.tijolo],['p','battery-full','Pilha ou bateria',C.verde],[0,'hand-up','Nenhuma',C.madeira]].forEach(function(op){
    var bt=el('button','escolha-op',icone(op[1],op[3])); bt.appendChild(txt('span',null,op[2]));
    bt.onclick=function(){ classifica(b,o,op[0],bt); }; ops.appendChild(bt);
  });
  c.appendChild(ops); var vf=el('button','bt-leve','Voltar'); vf.onclick=function(){ j.classList.add('oculto'); pend=null; }; c.appendChild(vf);
  j.appendChild(c); j.classList.remove('oculto'); setTimeout(function(){ ops.firstChild.focus(); },40);
}
function classifica(b,o,v,bt){
  if(v===o[3]){
    tom([523]); bt.classList.add('certa');
    depois(450,function(){ $('escolha').classList.add('oculto'); b.classList.add('feita'); b.appendChild(el('span','selo-ok-c'+(v?' '+v:' zero'),v?RAIO:CHECK)); faiscas(b); achou++; contador();
      var falta=alvo-achou; if(falta===0){ trava=true; depois(700,conclui); } else avisa('<b>'+o[2]+'</b>: '+NOME_E[v]+'. '+(falta===1?'Falta só mais uma!':'Faltam '+falta+'.'),'bom'); });
  } else {
    erros++; tom([330]); bt.classList.add('fora'); bt.disabled=true;
    var dica=o[3]==='t'?'Pense: essa máquina fica presa por um fio na parede?':o[3]==='p'?'Pense: essa máquina anda com você, sem fio?':'Pense: essa coisa faz alguma coisa sozinha, ou só com a gente?';
    var d=$('escolha').querySelector('.escolha-dica'); if(!d){ d=el('p','escolha-dica'); $('escolha').querySelector('.escolha-cartao').insertBefore(d,$('escolha').querySelector('.escolha-ops')); } d.textContent=dica;
  }
}

/* ---------- conclusão ---------- */
function conclui(){
  var novo=!est.feitas[atual]; est.feitas[atual]=1; salva(); tom([523,659,784]);
  var ult=atual===FASES.length-1,m=MUNDOS[L.m],fimMundo=L.i===m.fases.length-1;
  var p=$('premio'); p.innerHTML='';
  var c=el('div','cartao'); c.style.setProperty('--cor',m.cor);
  c.appendChild(txt('h2',null,ELOGIOS[Math.floor(Math.random()*ELOGIOS.length)])); c.lastChild.id='premioTit';
  var resumo=L.t==='ache'?(alvo===1?'Você achou a única que precisa de energia.':'Em "'+L.nome+'" você achou as '+alvo+' máquinas que usam energia.'):L.t==='inverso'?(alvo===1?'Você achou a única que funciona sem energia.':'Você achou as '+alvo+' coisas que funcionam sem energia nenhuma.'):'Você disse certinho como cada uma das '+alvo+' coisas funciona.';
  c.appendChild(txt('p','explica',resumo));
  c.appendChild(el('div','fig-grande','<div class="fg-in" style="--cor-selo:'+L.f[1]+'">'+icone(L.f[0],L.f[1])+'</div>'));
  c.appendChild(el('div','nome-fig',(novo?'Figurinha nova: ':'Você já tem: ')+'<b></b>')); c.lastChild.lastChild.textContent=L.f[2];
  if(fimMundo&&!ult) c.appendChild(txt('p','sub','Você completou "'+m.nome+'"!'));
  if(ult) c.appendChild(txt('p','sub','Casa completa! Agora você sabe o que precisa de energia e o que funciona só com a gente.'));
  var lb=el('div','linha-bts');
  var bp=el('button','bt-principal',ult?'Ver meu álbum':'Continuar'); bp.onclick=ult?album:function(){ joga(atual+1); }; lb.appendChild(bp);
  var bm=el('button','bt-leve',icone('home',C.laranja)+'Casa'); bm.onclick=mapa; lb.appendChild(bm);
  c.appendChild(lb); p.appendChild(c); p.classList.remove('oculto'); confete();
  setTimeout(function(){ bp.focus(); },60);
}
function confete(){
  if(!est.anim) return; var cores=[C.laranja,C.tijolo,C.verde,C.amarelo,C.ceu];
  for(var i=0;i<26;i++){ var c=el('div','confete'); c.style.left=(Math.random()*100)+'vw'; c.style.background=cores[i%5]; c.style.borderRadius=i%3===0?'50%':'3px';
    c.style.setProperty('--dx',(Math.random()*160-80)+'px'); c.style.setProperty('--giro',(Math.random()*720-360)+'deg'); c.style.setProperty('--dur',(2.4+Math.random()*1.4)+'s'); c.style.setProperty('--atraso',(Math.random()*.5)+'s');
    document.body.appendChild(c); setTimeout(c.remove.bind(c),4600); }
}

/* ---------- álbum ---------- */
function album(){
  var t=$('album'); t.innerHTML='';
  t.appendChild(el('h2','titulo-tela',icone('stickers',C.amarelo)+'<span>Meu álbum da casa</span>'));
  t.appendChild(txt('p','texto-tela','Cada cômodo explorado guarda uma figurinha. Não tem pressa: cada um completa o seu álbum no seu tempo.'));
  MUNDOS.forEach(function(m,mi){
    var g=el('section','album-grupo'); g.style.setProperty('--cor',m.cor); g.style.animationDelay=(mi*.05)+'s';
    var h=el('h3',null,icone(m.ic[0],m.ic[1])); h.appendChild(txt('span',null,m.nome)); g.appendChild(h);
    var gr=el('div','album-grade');
    m.fases.forEach(function(f){
      var tem=!!est.feitas[FASES.indexOf(f)];
      var s=el('div','selo '+(tem?'tem':'falta'),'<div class="s-in" style="--cor-selo:'+f.f[1]+'">'+(tem?icone(f.f[0],f.f[1]):silhueta(f.f[0]))+'</div>');
      s.appendChild(txt('span',null,tem?f.f[2]:f.nome)); gr.appendChild(s);
    });
    g.appendChild(gr); t.appendChild(g);
  });
  mostra('album');
}

/* ---------- ajustes ---------- */
function ajustes(){
  var t=$('ajustes'); t.innerHTML='';
  t.appendChild(el('h2','titulo-tela',icone('setting-two',C.azul)+'<span>Ajustes</span>'));
  t.appendChild(txt('p','texto-tela','Os ajustes ficam guardados neste aparelho.'));
  var box=el('div','ajustes');
  function chave(ic,cor,nome,desc,prop,fn){
    var b=el('button','ajuste',icone(ic,cor)); b.setAttribute('role','switch'); b.setAttribute('aria-checked',est[prop]?'true':'false');
    var tx=txt('div','txt',nome); tx.appendChild(txt('small',null,desc)); b.appendChild(tx); b.appendChild(el('div','chave'));
    b.onclick=function(){ est[prop]=!est[prop]; salva(); b.setAttribute('aria-checked',est[prop]?'true':'false'); if(fn) fn(); };
    box.appendChild(b);
  }
  chave('bell-ring',C.amarelo,'Sons','Sons baixinhos ao tocar nas coisas.','som');
  chave('magic',C.roxo,'Animações','Faíscas e movimentos suaves. Desligue se incomodar.','anim',aplicaAnim);
  chave('unlock',C.verde,'Todos os cômodos abertos','Para o professor escolher qualquer fase.','livre');
  var r=el('button','ajuste perigo',icone('refresh',C.tijolo)); var rt=txt('div','txt','Recomeçar do zero'); rt.appendChild(txt('small',null,'Apaga as figurinhas deste aparelho.')); r.appendChild(rt);
  r.onclick=function(){ if(confirm('Apagar todas as figurinhas deste aparelho?')){ est.feitas={}; salva(); mapa(); } };
  box.appendChild(r); t.appendChild(box); mostra('ajustes');
}

/* ---------- início ---------- */
aplicaAnim();
$('btInicio').insertAdjacentHTML('afterbegin',CASA_SVG);
$('btMapa').insertAdjacentHTML('afterbegin',icone('home',C.laranja));
$('btAlbum').insertAdjacentHTML('afterbegin',icone('stickers',C.amarelo));
$('btAjustes').insertAdjacentHTML('afterbegin',icone('setting-two',C.azul));
$('btVoltar').insertAdjacentHTML('afterbegin',icone('arrow-left','#fff'));
$('btOuvir').innerHTML=icone('volume-up',C.azul);
$('btInicio').onclick=mapa; $('btMapa').onclick=mapa; $('btVoltar').onclick=mapa; $('btAlbum').onclick=album; $('btAjustes').onclick=ajustes;
$('btOuvir').onclick=function(){ fala($('pergunta').textContent); };
document.addEventListener('keydown',function(ev){ if(ev.key==='Escape'){ if(!$('escolha').classList.contains('oculto')){ $('escolha').classList.add('oculto'); pend=null; } else if(!$('premio').classList.contains('oculto')) mapa(); } });
window.__jogo={FASES:FASES,O:O,est:est};
mapa();
})();
