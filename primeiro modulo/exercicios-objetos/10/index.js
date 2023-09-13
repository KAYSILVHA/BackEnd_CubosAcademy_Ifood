// clientes
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 };
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 };
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 };
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 };
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 };
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 };
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 };



// organizando itens
let tvInfo = `nome: ${tv.nome}, ValorEmCentavos: ${tv.valorEmCentavos}`;
let notInfo = `nome: ${notebook.nome}, ValorEmCentavos: ${notebook.valorEmCentavos}`;
let mouseInfo = `nome: ${mouse.nome}, ValorEmCentavos: ${mouse.valorEmCentavos}`;
let tecladoInfo = `nome: ${teclado.nome}, ValorEmCentavos: ${teclado.valorEmCentavos}`;
let caboInfo = `nome: ${caboUsb.nome}, ValorEmCentavos: ${caboUsb.valorEmCentavos}`;
let carregadorInfo =`nome: ${carregador.nome}, ValorEmCentavos: ${carregador.valorEmCentavos}`;
let webCanInfo =`nome: ${webcam.nome}, ValorEmCentavos: ${webcam.valorEmCentavos}`;
let monitorInfo = `nome: ${monitor.nome}, ValorEmCentavos: ${monitor.valorEmCentavos}`;

// a. Adicione uma tv, dois cabos usb e uma webcam para o José
jose.carrinho.push(
    { item: tvInfo, quantidade: 1 },
    { item: caboInfo, quantidade: 2 },
    { item: webCanInfo, quantidade: 1 }
);

// b. Adicione dois notebooks para o Carlos
carlos.carrinho.push(
    { item: notInfo, quantidade: 2 }
);

// c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
patricia.carrinho.push(
    { item: tecladoInfo, quantidade: 1 },
    { item: caboInfo, quantidade: 2 },
    { item: carregadorInfo, quantidade: 1 },
    { item: mouseInfo, quantidade: 1 },
    { item: monitorInfo, quantidade: 1 }
);

// d. Adicione cinco webcams para o Renato
renato.carrinho.push(
    { item: webCanInfo, quantidade: 5 }
);

// e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
roberto.carrinho.push(
    { item: webCanInfo, quantidade: 1 },
    { item: caboInfo, quantidade: 2 },
    { item: monitorInfo, quantidade: 1 }
);


console.log(jose);
console.log(patricia);
console.log(carlos);
console.log(renato);
console.log(roberto);