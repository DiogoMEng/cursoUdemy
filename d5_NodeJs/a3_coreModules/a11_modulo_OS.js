const os = require('os');

// quantidade de CPUs
console.log(os.cpus());

// quantidade de memória livre
console.log(os.freemem());

// local do diretório da home
console.log(os.homedir());

// tipo do sistema operacional da máquina
console.log(os.type());

// plataforma da máquina
console.log(os.platform());

// arquitetura da CPU do sistema operacional
console.log(os.arch());

// retorna um objeto contendo as constantes do sistema operacional
console.log(os.constants);

// retorna o marcador do fim de linha do SO
console.log(os.EOL);

// retorna o hostname do sistema operacional
console.log(os.hostname);

// interfaces de rede que possuem o endereços de redes
console.log(os.networkInterfaces());

// tempo de atividade do sistema
console.log(os.uptime());

// informações sobre o usuário atual
console.log(os.userInfo());