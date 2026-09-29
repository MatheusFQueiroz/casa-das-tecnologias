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
var ZZZ='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h7l-7 8h7M13 4h6l-6 7h6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var C={laranja:'#F4A261',tijolo:'#E76F51',verde:'#2A9D8F',azul:'#457B9D',amarelo:'#F9C74F',rosa:'#F28482',roxo:'#9B7EDE',madeira:'#B08968',cinza:'#A8A29E',ceu:'#8ECAE6',folha:'#80B918'};

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


/* ---------- fases novas: Boa noite, casa (apagar o que não precisa) e Quem sou eu? (charadas) ---------- */
var FICA_TXT={geladeira:'A geladeira fica ligada a noite toda, senão a comida estraga!',relogio:'O relógio fica: ele marca a hora até de madrugada.',despertador:'O despertador fica ligado: é ele que acorda a gente amanhã!',
  campainha:'A campainha fica: se alguém chegar, ela precisa tocar.',camera:'A câmera fica acordada cuidando da casa à noite.',roteador:'O roteador pode ficar: ele gasta pouquinho e o celular avisa se alguém ligar.'};
MUNDOS.push({nome:'Boa noite, casa',ic:['moon',C.roxo],cor:'#E4DDF5',selo:'#9B7EDE',txt:'Hora de dormir! Apague o que não precisa ficar ligado. Mas cuidado: algumas máquinas precisam ficar acordadas.',fases:[
  {t:'dormir',nome:'Sala e cozinha',ic:'moon',itens:['tv','videogame','caixasom','lampada','geladeira','relogio'],fica:['geladeira','relogio'],f:['moon',C.roxo,'Lua']},
  {t:'dormir',nome:'Quarto',ic:'single-bed',itens:['abajur','notebook','ventilador','tablet','despertador','portatil'],fica:['despertador'],f:['single-bed',C.azul,'Caminha']},
  {t:'dormir',nome:'A casa toda',ic:'home',itens:['tv','computador','luzquintal','geladeira','campainha','aspirador','secador','camera'],fica:['geladeira','campainha','camera'],f:['home',C.laranja,'Casa dormindo']}]});
MUNDOS.push({nome:'Quem sou eu?',ic:['thinking-problem',C.amarelo],cor:'#FFF1C9',selo:'#F9C74F',txt:'Leia a pista e descubra a máquina.',fases:[
  {t:'charada',nome:'Quem sou eu?',ic:'thinking-problem',pista:'Moro na cozinha, sou fria por dentro e fico ligada o dia todo.',itens:['geladeira','microondas','sofa','lanterna'],certa:'geladeira',f:['refrigerator',C.ceu,'Detetive gelado']},
  {t:'charada',nome:'Quem sou eu?',ic:'thinking-problem',pista:'Ando no seu bolso, uso bateria e faço ligações.',itens:['celular','tv','computador','radio'],certa:'celular',f:['iphone',C.azul,'Detetive do bolso']},
  {t:'charada',nome:'Quem sou eu?',ic:'thinking-problem',pista:'Giro, giro e faço vento. Fico preso na tomada.',itens:['ventilador','secador','drone','aspirador'],certa:'ventilador',f:['ventilador',C.ceu,'Detetive do vento']},
  {t:'charada',nome:'Quem sou eu?',ic:'thinking-problem',pista:'Toco bem cedo para acordar você. Uso pilha.',itens:['despertador','relogio','campainha','caixasom'],certa:'despertador',f:['alarm-clock',C.tijolo,'Detetive do sono']},
  {t:'charada',nome:'Quem sou eu?',ic:'thinking-problem',pista:'Não uso energia nenhuma, mas levo você para longe. É só pedalar.',itens:['bicicleta','skate','carrinho','drone'],certa:'bicicleta',f:['bike',C.tijolo,'Detetive do pedal']},
  {t:'charada',nome:'Quem sou eu?',ic:'thinking-problem',pista:'Fico na rua, tenho três luzes e mando os carros pararem.',itens:['semaforo','poste','camera','placa'],certa:'semaforo',f:['semaforo',C.cinza,'Detetive da rua']},
  {t:'charada',nome:'Quem sou eu?',ic:'thinking-problem',pista:'Esquento a água e apito quando ela ferve.',itens:['chaleira','cafeteira','microondas','torradeira'],certa:'chaleira',f:['kettle',C.tijolo,'Detetive do apito']},
  {t:'charada',nome:'Quem sou eu?',ic:'thinking-problem',pista:'Voo bem alto com bateria e tiro fotos lá de cima.',itens:['drone','camera','celular','robo'],certa:'drone',f:['drone',C.ceu,'Detetive do céu']}]});
var FASES=[]; MUNDOS.forEach(function(m,mi){ m.fases.forEach(function(f,fi){ f.m=mi; f.i=fi; FASES.push(f); }); });
var ELOGIOS=['Muito bem!','Você conhece a casa toda!','Isso mesmo!','Boa!','Mandou bem!'];
var NOME_E={t:'tomada',p:'pilha ou bateria',0:'nenhuma'};
/* como cada máquina "liga": giro, vapor, tela, luz ou som (o resto pisca uma luzinha) */
var FX={};
[['giro',['ventilador','maquinalavar','drone','liquidificador']],['vapor',['chaleira','cafeteira','ferro','microondas','torradeira','secador','chuveiro']],
 ['tela',['tv','computador','notebook','celular','tablet','portatil','videogame','cardio','leitor','calculadora','maquininha','termometro','balanca','projetor']],
 ['luz',['lampada','abajur','luzquintal','poste','lanterna','semaforo']],
 ['som',['caixasom','radio','microfone','campainha','despertador','interfone','fone','relogio','robo','carrinho']]].forEach(function(g){ g[1].forEach(function(k){ FX[k]=g[0]; }); });
var TOM_FX={giro:[220,220,220],vapor:[330,392],tela:[523,659],luz:[880],som:[440,660,440],led:[494]};
/* lugares das coisas dentro da cena (x%, y%) */
var LUGARES=[[9,24],[27,18],[46,22],[65,17],[86,24],[12,60],[30,66],[50,60],[70,66],[89,60],[40,44],[60,44]];
var LUGARES_MOB=[[18,15],[50,13],[82,15],[18,39],[50,37],[82,39],[18,63],[50,61],[82,63],[34,86],[66,86],[50,86]];

/* ======================================================================
   Memória e ajustes
   ====================================================================== */
var CHAVE='casa-v3';
var est={feitas:{},som:false,anim:true,livre:false,turma:false,minha:null};
try{ var sv=JSON.parse(localStorage.getItem(CHAVE)||localStorage.getItem('casa-v2')||'null'); if(sv) for(var k in sv) est[k]=sv[k]; }catch(e){}
try{ if(!localStorage.getItem(CHAVE)&&!localStorage.getItem('casa-v2')&&window.matchMedia('(prefers-reduced-motion: reduce)').matches) est.anim=false; }catch(e){}
function salva(){ try{ localStorage.setItem(CHAVE,JSON.stringify(est)); }catch(e){} }
var $=function(i){return document.getElementById(i)};
function el(tag,cls,html){ var d=document.createElement(tag); if(cls) d.className=cls; if(html!=null) d.innerHTML=html; return d; }
function txt(tag,cls,t){ var d=el(tag,cls); d.textContent=t; return d; }
function aplicaAjustes(){ document.body.classList.toggle('sem-animacao',!est.anim); document.body.classList.toggle('turma',!!est.turma); }
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
  ['mapa','jogo','album','minha','ajustes'].forEach(function(t){ $(t).classList.toggle('oculto',t!==id); });
  var t=$(id); t.classList.remove('entra'); void t.offsetWidth; t.classList.add('entra');
  $('premio').classList.add('oculto'); $('ritual').classList.add('oculto');
  [].forEach.call(document.querySelectorAll('.confete,.faisca,.fantasma'),function(x){ x.remove(); });
  ['Mapa','Album','Minha','Ajustes'].forEach(function(n){ $('bt'+n).classList.toggle('ativo',id===n.toLowerCase()||(id==='jogo'&&n==='Mapa')); });
  try{ speechSynthesis.cancel(); }catch(e){}
  telaAtual=id; window.scrollTo(0,0);
}
function aberta(i){ return est.livre||i===0||!!est.feitas[i-1]||!!est.feitas[i]; }
function proxima(){ for(var i=0;i<FASES.length;i++) if(!est.feitas[i]) return i; return -1; }
function mundoCompleto(m){ return MUNDOS[m].fases.every(function(f){ return est.feitas[FASES.indexOf(f)]; }); }
var CASA_SVG='<svg viewBox="0 0 120 110" aria-hidden="true"><path d="M10 52 60 12l50 40" fill="none" stroke="#E76F51" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 50v50h80V50" fill="#FFF3E6" stroke="#3B2F2F" stroke-width="4" stroke-linejoin="round"/><rect x="50" y="66" width="20" height="34" rx="3" fill="#F9C74F" stroke="#3B2F2F" stroke-width="3"/><circle cx="65" cy="84" r="2" fill="#3B2F2F"/><rect class="jan j1" x="28" y="58" width="16" height="16" rx="2" fill="#8ECAE6" stroke="#3B2F2F" stroke-width="3"/><rect class="jan j2" x="76" y="58" width="16" height="16" rx="2" fill="#8ECAE6" stroke="#3B2F2F" stroke-width="3"/><path d="M36 58v16M28 66h16M84 58v16M76 66h16" stroke="#3B2F2F" stroke-width="2"/><rect x="82" y="20" width="10" height="18" fill="#B08968" stroke="#3B2F2F" stroke-width="3"/><path d="M60 12 20 44" stroke="#E76F51" stroke-width="8" stroke-linecap="round"/></svg>';

/* ---------- rituais: bom dia e boa noite ---------- */
function bomDia(){
  var r=$('ritual'); r.innerHTML='';
  var c=el('div','ritual-cartao dia','<div class="ceu-ritual"><span class="sol-ritual"></span><span class="nuvem-ritual"></span></div>'+CASA_SVG);
  c.appendChild(txt('h2',null,'Bom dia, casa!'));
  c.appendChild(txt('p',null,'As máquinas estão acordando. Vamos descobrir quais precisam de energia hoje?'));
  var b=el('button','bt-principal','Vamos!'); b.onclick=function(){ r.classList.add('oculto'); }; c.appendChild(b);
  r.appendChild(c); r.classList.remove('oculto'); setTimeout(function(){ b.focus(); },50);
}
function boaNoite(){
  var r=$('ritual'); r.innerHTML='';
  var c=el('div','ritual-cartao noite','<div class="ceu-ritual noite"><span class="lua-ritual"></span><i></i><i></i><i></i><i></i><i></i></div>'+CASA_SVG);
  c.appendChild(txt('h2',null,'Boa noite, casa!'));
  c.appendChild(txt('p',null,'As luzes vão se apagando, uma a uma. A geladeira fica acordada cuidando da comida. Até a próxima aula!'));
  var b=el('button','bt-principal','Até amanhã'); b.onclick=function(){ r.classList.add('oculto'); }; c.appendChild(b);
  r.appendChild(c); r.classList.remove('oculto'); setTimeout(function(){ c.classList.add('apagando'); },300); setTimeout(function(){ b.focus(); },50);
}

/* ---------- mapa: a casa ---------- */
function mapa(){
  var t=$('mapa'); t.innerHTML='';
  var p=proxima(),n=Object.keys(est.feitas).length;
  var cab=el('div','cabecalho');
  cab.appendChild(el('div','casinha'+(n>0?' acesa':''),CASA_SVG));
  var tx=el('div','cab-txt');
  tx.appendChild(txt('h1',null,n===0?'Que máquinas moram na sua casa?':p<0?'Você conhece a casa inteira!':'Bem-vindo de volta!'));
  tx.appendChild(txt('p',null,n===0?'Em cada cômodo, procure tudo que funciona com tomada, pilha ou bateria. Quando você acha, a máquina liga! Cada cômodo explorado vira uma figurinha. Comece pela porta amarela.'
    :p<0?'Pode voltar em qualquer cômodo para brincar de novo, ou decorar a sua casa com as figurinhas.':'A porta amarela mostra onde você parou. Repetir um cômodo que você gosta também vale!'));
  var bn=el('button','bt-leve bt-noite',icone('moon',C.roxo)+'Encerrar o dia'); bn.onclick=boaNoite; tx.appendChild(bn);
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
      b.innerHTML='<span class="janela"></span><span class="porta-ic">'+(est.feitas[gi]?icone(f.f[0],f.f[1]):aberta(gi)?icone(f.ic,m.ic[1]):silhueta(f.ic))+'</span><span class="porta-nome">'+f.nome+'</span>';
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

/* ======================================================================
   Jogo
   ====================================================================== */
var atual=0,L=null,achou=0,alvo=0,erros=0,trava=false,cards=[],selecionada=null;
function instrucao(){
  if(L.t==='ache') return alvo===1?'Três funcionam só com a gente. Toque na única que precisa de <em>tomada</em>, <em>pilha</em> ou <em>bateria</em>.':'Procure e toque em tudo que funciona com <em>tomada</em>, <em>pilha</em> ou <em>bateria</em>. Quando você acha, a máquina liga!';
  if(L.t==='inverso') return alvo===1?'Três precisam de energia. Toque na única que funciona <em>sem energia</em> nenhuma.':'A luz acabou! Use a <em>lanterna</em> para enxergar e toque em tudo que funciona <em>sem energia</em> nenhuma.';
  if(L.t==='dormir') return 'Hora de dormir. <em>Apague</em> o que não precisa ficar ligado. Algumas máquinas precisam ficar acordadas!';
  if(L.t==='charada') return L.pista;
  return 'Arraste cada coisa para a caixa certa: <em>tomada</em>, <em>pilha ou bateria</em>, ou <em>nenhuma</em>. Se preferir, toque na coisa e depois na caixa.';
}
function joga(i){
  atual=i; L=FASES[i]; achou=0; erros=0; trava=false; cards=[]; selecionada=null;
  var m=MUNDOS[L.m];
  $('jogo').style.setProperty('--cor',m.cor);
  $('chipComodo').innerHTML=icone(L.ic,m.ic[1]); $('chipComodo').appendChild(txt('span',null,L.nome));
  // prévia: o que já foi, onde estamos e o que vem depois
  var pv=$('previa'); pv.innerHTML='';
  m.fases.forEach(function(f,fi){ var d=el('span','pv'+(est.feitas[FASES.indexOf(f)]?' f':'')+(fi===L.i?' a':''),icone(f.ic,m.ic[1])); d.title=f.nome; pv.appendChild(d); });
  $('aviso').innerHTML='';
  if(L.t==='ache') alvo=L.itens.filter(function(k){ return O[k][3]; }).length;
  else if(L.t==='inverso') alvo=L.itens.filter(function(k){ return !O[k][3]; }).length;
  else if(L.t==='dormir') alvo=L.itens.filter(function(k){ return L.fica.indexOf(k)<0; }).length;
  else if(L.t==='charada') alvo=1;
  else alvo=L.itens.length;
  $('pergunta').innerHTML='<b>'+(L.t==='charada'?'Quem sou eu?':L.nome)+'</b><span>'+instrucao()+'</span>';
  contador();
  var cena=$('cena'); cena.innerHTML=''; cena.className='cena '+L.t+(L.itens.length<=4?' quatro':'')+(L.t==='inverso'&&alvo>1?' escuro':'');
  cena.appendChild(el('div','parede')); cena.appendChild(el('div','chao')); cena.appendChild(el('div','janela-cena')); cena.appendChild(el('div','prateleira')); cena.appendChild(el('div','mesa'));
  var mob=window.innerWidth<=640;
  var lugares=L.itens.length<=4?(mob?[[30,30],[70,30],[30,66],[70,66]]:[[20,42],[40,42],[60,42],[80,42]]):(mob?LUGARES_MOB:LUGARES).slice(0,L.itens.length).sort(function(){ return Math.random()-.5; });
  L.itens.slice().sort(function(){ return Math.random()-.5; }).forEach(function(k,idx){
    var o=O[k],b=el('button','coisa',icone(o[0],o[1])); b.appendChild(txt('span','t',o[2])); b._k=k; b.dataset.fx=FX[k]||'led';
    b.style.left=lugares[idx][0]+'%'; b.style.top=lugares[idx][1]+'%'; b.style.setProperty('--gira',(Math.random()*10-5)+'deg'); b.style.animationDelay=(idx*.05)+'s';
    b.setAttribute('aria-label',o[2]);
    if(L.t==='dormir') b.classList.add('ligada');
    b.onclick=function(){ toca(b); };
    if(L.t==='classifica') arrastavel(b);
    cena.appendChild(b); cards.push(b);
  });
  if(L.t==='inverso'&&alvo>1){ var veu=el('div','lanterna'); cena.appendChild(veu); cena.style.setProperty('--lx','50%'); cena.style.setProperty('--ly','50%');
    cena.onpointermove=function(ev){ var r=cena.getBoundingClientRect(); cena.style.setProperty('--lx',((ev.clientX-r.left)/r.width*100)+'%'); cena.style.setProperty('--ly',((ev.clientY-r.top)/r.height*100)+'%'); }; }
  else cena.onpointermove=null;
  var cx=$('caixas'); cx.innerHTML=''; cx.classList.toggle('oculto',L.t!=='classifica');
  if(L.t==='classifica'){
    [['t','plug','Tomada',C.tijolo],['p','battery-full','Pilha ou bateria',C.verde],[0,'hand-up','Nenhuma',C.madeira]].forEach(function(op){
      var b=el('button','caixa',icone(op[1],op[3])); b.appendChild(txt('span',null,op[2])); b._v=op[0]; b.dataset.v=op[0]===0?'zero':op[0];
      b.onclick=function(){ if(selecionada) classifica(selecionada,O[selecionada._k],op[0],b); else avisa('Primeiro toque numa coisa, depois na caixa. Ou arraste!'); };
      cx.appendChild(b);
    });
  }
  mostra('jogo');
}
function contador(){
  var c=$('contador'); c.innerHTML='';
  c.appendChild(txt('span',null,L.t==='classifica'?'Guardadas:':L.t==='dormir'?'Apagadas:':'Encontradas:'));
  for(var i=0;i<alvo;i++) c.appendChild(el('b',i<achou?'ok':'',i<achou?CHECK:''));
}
function avisa(t,tipo){ var a=$('aviso'); a.innerHTML=''; a.appendChild(el('div','aviso-caixa'+(tipo?' '+tipo:''),'<span>'+t+'</span>')); }
function faiscas(alvoEl){
  if(!est.anim) return; var r=alvoEl.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,cores=[C.amarelo,C.laranja,'#fff',C.ceu];
  for(var i=0;i<10;i++){ var f=el('div','faisca',RAIO.replace('currentColor',cores[i%4])); var ang=i/10*Math.PI*2,dist=r.width*.5+Math.random()*30;
    f.style.left=(cx-8)+'px'; f.style.top=(cy-8)+'px'; f.style.setProperty('--dx',Math.cos(ang)*dist+'px'); f.style.setProperty('--dy',Math.sin(ang)*dist+'px'); document.body.appendChild(f); setTimeout(f.remove.bind(f),900); }
}
function liga(b,o){ b.classList.add('certa','ligada'); b.appendChild(el('span','selo-ok-c '+(o[3]||'zero'),o[3]?RAIO:CHECK)); faiscas(b); tom(TOM_FX[b.dataset.fx]||TOM_FX.led); }
function termina(){ trava=true; depois(900,conclui); }
function toca(b){
  if(trava||b.classList.contains('certa')||b.classList.contains('feita')||b.classList.contains('desligada')) return;
  var o=O[b._k],energia=o[3];
  b.classList.add('vista');
  if(L.t==='classifica'){ cards.forEach(function(x){ x.classList.remove('selecionada'); }); selecionada=b; b.classList.add('selecionada'); avisa('<b>'+o[2]+'</b>: agora toque na caixa certa, ou arraste até ela.'); return; }
  if(L.t==='charada'){
    if(b._k===L.certa){ liga(b,o); achou=1; contador(); avisa('Isso! <b>'+o[2]+'</b>. '+L.pista,'bom'); termina(); }
    else { erros++; tom([330]); b.classList.add('fora'); treme(b); avisa('Hmm, <b>'+o[2]+'</b> não é. Leia a pista de novo com calma.'); }
    return;
  }
  if(L.t==='dormir'){
    if(L.fica.indexOf(b._k)>=0){ treme(b); tom([330]); avisa(FICA_TXT[b._k]||('<b>'+o[2]+'</b> precisa ficar ligada.')); b.classList.add('protesta'); setTimeout(function(){ b.classList.remove('protesta'); },900); return; }
    b.classList.remove('ligada'); b.classList.add('desligada'); b.appendChild(el('span','selo-ok-c zzz',ZZZ)); achou++; tom([392,262]); contador();
    var falta=alvo-achou; if(falta===0){ avisa('Tudo apagado! Só ficaram as que precisam. Boa noite, '+L.nome.toLowerCase()+'.','bom'); termina(); } else avisa('<b>'+o[2]+'</b> foi dormir. '+(falta===1?'Falta só mais uma.':'Faltam '+falta+'.'),'bom');
    return;
  }
  var quer=L.t==='ache'?!!energia:!energia;
  if(quer){
    liga(b,o); achou++; contador();
    var falta2=alvo-achou;
    if(falta2===0) termina();
    else avisa((energia?'<b>'+o[2]+'</b> ligou! Usa '+NOME_E[energia]+'. ':'<b>'+o[2]+'</b> funciona sem energia. ')+(falta2===1?'Falta só mais uma!':'Faltam '+falta2+'.'),'bom');
  } else {
    erros++; tom([330]); b.classList.add('fora'); treme(b);
    avisa(L.t==='ache'?'<b>'+o[2]+'</b> não usa tomada nem pilha: funciona só com a gente. Procure outra!':'<b>'+o[2]+'</b> usa '+NOME_E[energia]+'. Aqui a gente procura o que funciona sem energia.');
  }
}
function treme(b){ if(!est.anim) return; b.classList.remove('treme'); void b.offsetWidth; b.classList.add('treme'); }

/* ---------- classificar arrastando ---------- */
function arrastavel(b){
  var fant=null,ini=null;
  b.addEventListener('pointerdown',function(ev){
    if(trava||b.classList.contains('feita')) return; ini={x:ev.clientX,y:ev.clientY}; b.setPointerCapture(ev.pointerId);
  });
  b.addEventListener('pointermove',function(ev){
    if(!ini) return;
    if(!fant){ if(Math.hypot(ev.clientX-ini.x,ev.clientY-ini.y)<8) return;
      fant=el('div','fantasma',b.innerHTML); document.body.appendChild(fant); b.classList.add('arrastando'); cards.forEach(function(x){ x.classList.remove('selecionada'); }); selecionada=b; }
    fant.style.left=ev.clientX+'px'; fant.style.top=ev.clientY+'px';
    var sob=caixaSob(ev.clientX,ev.clientY); [].forEach.call($('caixas').children,function(c){ c.classList.toggle('sobre',c===sob); });
  });
  function solta(ev){
    if(!ini) return; ini=null;
    if(fant){ var sob=caixaSob(ev.clientX,ev.clientY); fant.remove(); fant=null; b.classList.remove('arrastando'); [].forEach.call($('caixas').children,function(c){ c.classList.remove('sobre'); });
      if(sob) classifica(b,O[b._k],sob._v,sob); }
  }
  b.addEventListener('pointerup',solta); b.addEventListener('pointercancel',solta);
}
function caixaSob(x,y){ var e=document.elementFromPoint(x,y); return e&&e.closest?e.closest('.caixa'):null; }
function classifica(b,o,v,bt){
  if(trava||b.classList.contains('feita')) return;
  if(v===o[3]){
    tom([523]); bt.classList.add('acertou'); setTimeout(function(){ bt.classList.remove('acertou'); },600);
    b.classList.remove('selecionada'); b.classList.add('feita'); if(v) b.classList.add('ligada'); b.appendChild(el('span','selo-ok-c '+(v||'zero'),v?RAIO:CHECK)); faiscas(b); selecionada=null; achou++; contador();
    var falta=alvo-achou; if(falta===0) termina(); else avisa('<b>'+o[2]+'</b>: '+NOME_E[v]+'. '+(falta===1?'Falta só mais uma!':'Faltam '+falta+'.'),'bom');
  } else {
    erros++; tom([330]); treme(bt); treme(b);
    avisa('<b>'+o[2]+'</b> não vai nessa caixa. '+(o[3]==='t'?'Pense: ela fica presa por um fio na parede?':o[3]==='p'?'Pense: ela anda com você, sem fio?':'Pense: ela faz alguma coisa sozinha, ou só com a gente?'));
  }
}

/* ---------- conclusão ---------- */
function conclui(){
  var novo=!est.feitas[atual]; est.feitas[atual]=1; salva(); tom([523,659,784]);
  var ult=atual===FASES.length-1,m=MUNDOS[L.m],fimMundo=L.i===m.fases.length-1;
  var p=$('premio'); p.innerHTML='';
  var c=el('div','cartao'); c.style.setProperty('--cor',m.cor);
  c.appendChild(txt('h2',null,ELOGIOS[Math.floor(Math.random()*ELOGIOS.length)])); c.lastChild.id='premioTit';
  var resumo=L.t==='ache'?(alvo===1?'Você achou a única que precisa de energia.':'Em "'+L.nome+'" você ligou as '+alvo+' máquinas que usam energia.')
    :L.t==='inverso'?(alvo===1?'Você achou a única que funciona sem energia.':'Mesmo no escuro, você achou as '+alvo+' coisas que funcionam sem energia.')
    :L.t==='dormir'?'Você apagou o que precisava e deixou acordado o que não pode dormir.'
    :L.t==='charada'?'Você desvendou a charada!':'Você guardou certinho cada uma das '+alvo+' coisas.';
  c.appendChild(txt('p','explica',resumo));
  c.appendChild(el('div','fig-grande','<div class="fg-in" style="--cor-selo:'+(m.selo||L.f[1])+'">'+icone(L.f[0],L.f[1])+'</div>'));
  c.appendChild(el('div','nome-fig',(novo?'Figurinha nova: ':'Você já tem: ')+'<b></b>')); c.lastChild.lastChild.textContent=L.f[2];
  if(novo) c.appendChild(txt('p','sub','Ela já está na sua casa para decorar!'));
  if(fimMundo&&!ult) c.appendChild(txt('p','sub','Você completou "'+m.nome+'"!'));
  if(ult) c.appendChild(txt('p','sub','Casa completa! Agora você sabe o que precisa de energia e o que funciona só com a gente.'));
  var lb=el('div','linha-bts');
  var bp=el('button','bt-principal',ult?'Ver meu álbum':'Continuar'); bp.onclick=ult?album:function(){ joga(atual+1); }; lb.appendChild(bp);
  var br=el('button','bt-leve',icone('refresh',C.verde)+'De novo'); br.onclick=function(){ joga(atual); }; lb.appendChild(br);
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

/* ======================================================================
   Minha casa: decorar com as figurinhas (sem certo nem errado)
   ====================================================================== */
var COMODOS_MINHA=[['cozinha','Cozinha','cooking-pot'],['sala','Sala','sofa'],['quarto','Quarto','single-bed'],['quintal','Quintal','tree-one']];
var CORES_PAREDE=['#FFE8D1','#E3F2D3','#E9E1F7','#DDF1FA','#FFE0E0','#FFF1C9'];
var escolhida=null;
function minhaDados(){ if(!est.minha){ est.minha={}; COMODOS_MINHA.forEach(function(c,i){ est.minha[c[0]]={cor:i,itens:[]}; }); } return est.minha; }
function minha(){
  var d=minhaDados(),t=$('minha'); t.innerHTML=''; escolhida=null;
  t.appendChild(el('h2','titulo-tela',CASA_SVG+'<span>Minha casa</span>'));
  var ganhas=[]; FASES.forEach(function(f,i){ if(est.feitas[i]) ganhas.push(f.f); });
  t.appendChild(txt('p','texto-tela',ganhas.length?'Toque numa figurinha e depois num cômodo para colocar. Toque numa figurinha da parede para tirar. Não tem certo nem errado: a casa é sua!':'Explore os cômodos para ganhar figurinhas. Depois, decore a sua casa com elas!'));
  var pal=el('div','paleta');
  ganhas.forEach(function(f){
    var b=el('button','adesivo',icone(f[0],f[1])); b.title=f[2]; b.setAttribute('aria-label',f[2]);
    b.onclick=function(){ [].forEach.call(pal.children,function(x){ x.classList.remove('escolhido'); }); if(escolhida===f){ escolhida=null; return; } escolhida=f; b.classList.add('escolhido'); };
    pal.appendChild(b);
  });
  t.appendChild(pal);
  var casa=el('div','casa-minha');
  COMODOS_MINHA.forEach(function(c){
    var dc=d[c[0]],q=el('section','quarto-minha'); q.style.background=CORES_PAREDE[dc.cor];
    var topo=el('div','qm-topo',icone(c[2],C.madeira)+'<b>'+c[1]+'</b>');
    var cores=el('div','qm-cores');
    CORES_PAREDE.forEach(function(cor,i){ var b=el('button','qm-cor'+(dc.cor===i?' atual':'')); b.style.background=cor; b.setAttribute('aria-label','Parede cor '+(i+1)); b.onclick=function(){ dc.cor=i; salva(); minha(); }; cores.appendChild(b); });
    topo.appendChild(cores); q.appendChild(topo);
    var area=el('div','qm-area');
    dc.itens.forEach(function(f,idx){ var b=el('button','adesivo colocado',icone(f[0],f[1])); b.style.setProperty('--gira',((idx*37)%14-7)+'deg'); b.title='Tirar '+f[2]; b.onclick=function(ev){ ev.stopPropagation(); dc.itens.splice(idx,1); salva(); minha(); }; area.appendChild(b); });
    if(!dc.itens.length) area.appendChild(txt('span','qm-vazio','Toque aqui para colocar uma figurinha'));
    area.onclick=function(){ if(!escolhida){ avisaMinha(ganhas.length?'Primeiro escolha uma figurinha lá em cima.':'Explore os cômodos para ganhar figurinhas.'); return; } if(dc.itens.length>=8){ avisaMinha('Esse cômodo já está cheinho! Tire uma para colocar outra.'); return; } dc.itens.push(escolhida); salva(); tom([523,659]); minha(); };
    q.appendChild(area); casa.appendChild(q);
  });
  t.appendChild(casa);
  var av=el('div','aviso'); av.id='avisoMinha'; t.appendChild(av);
  mostra('minha');
}
function avisaMinha(t){ var a=$('avisoMinha'); if(!a) return; a.innerHTML=''; a.appendChild(el('div','aviso-caixa','<span>'+t+'</span>')); }

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
  chave('bell-ring',C.amarelo,'Sons','Cada máquina faz um sonzinho quando liga.','som');
  chave('magic',C.roxo,'Animações','Máquinas girando, vapor, faíscas. Desligue se incomodar.','anim',aplicaAjustes);
  chave('projector',C.laranja,'Modo turma (projetor)','Letras e botões maiores para jogar com a turma toda.','turma',aplicaAjustes);
  chave('unlock',C.verde,'Todos os cômodos abertos','Para o professor escolher qualquer fase.','livre');
  var r=el('button','ajuste perigo',icone('refresh',C.tijolo)); var rt=txt('div','txt','Recomeçar do zero'); rt.appendChild(txt('small',null,'Apaga as figurinhas e a decoração deste aparelho.')); r.appendChild(rt);
  r.onclick=function(){ if(confirm('Apagar todas as figurinhas e a decoração deste aparelho?')){ est.feitas={}; est.minha=null; salva(); mapa(); } };
  box.appendChild(r); t.appendChild(box); mostra('ajustes');
}

/* ---------- início ---------- */
aplicaAjustes();
$('btInicio').insertAdjacentHTML('afterbegin',CASA_SVG);
$('btMapa').insertAdjacentHTML('afterbegin',icone('home',C.laranja));
$('btAlbum').insertAdjacentHTML('afterbegin',icone('stickers',C.amarelo));
$('btMinha').insertAdjacentHTML('afterbegin',icone('paint',C.rosa));
$('btAjustes').insertAdjacentHTML('afterbegin',icone('setting-two',C.azul));
$('btVoltar').insertAdjacentHTML('afterbegin',icone('arrow-left','#fff'));
$('btOuvir').innerHTML=icone('volume-up',C.azul);
$('btInicio').onclick=mapa; $('btMapa').onclick=mapa; $('btVoltar').onclick=mapa; $('btAlbum').onclick=album; $('btMinha').onclick=minha; $('btAjustes').onclick=ajustes;
$('btOuvir').onclick=function(){ fala($('pergunta').textContent); };
document.addEventListener('keydown',function(ev){ if(ev.key==='Escape'){ if(!$('ritual').classList.contains('oculto')) $('ritual').classList.add('oculto'); else if(!$('premio').classList.contains('oculto')) mapa(); } });
window.__jogo={FASES:FASES,O:O,est:est,MUNDOS:MUNDOS};
mapa();
try{ if(!sessionStorage.getItem('casa-bomdia')){ sessionStorage.setItem('casa-bomdia','1'); bomDia(); } }catch(e){}
})();
