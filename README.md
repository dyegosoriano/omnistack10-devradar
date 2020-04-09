<div align="center">
  <img src="./readme-img/logo-dev-radar.svg" width="250px" /><br>
</div>

# Dev Radar

Aplicação desenvolvida durante a Semana OmniStack 10.
O DevRadar é um projeto que visa conectar desenvolvedores próximos a você que trabalham com as mesmas tecnologias.

Para clonar o repositório, execute o seguinte comando no terminal:

```git clone https://github.com/dyegosoriano/DevRadar.git```

# Instalação

## Pré-Requisitos 

```git, node, express, react, react-native, expo```

Clone o repositório, utilizando git clone ou faça o download do repositório.

Para iniciar o **Backend** do React utilize os comandos:
```
cd backend
yarn install
yarn dev
```

Para iniciar o **Frontend** do React utilize os comandos:

```
cd frontend
yarn install
yarn start
```

Assim que o processo terminar, automaticamente será aberta no seu navegador a página ``localhost:3000`` contendo o Projeto.

Pro mobile, é o seguinte:

Para testar o **Mobile** do React Native, primeiro coloque o endereço do seu servidor (ou computador) no arquivo src/services/api.js, e depois execute os comandos:

```
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado!
yarn global add install expo-cli
cd mobile
yarn install
expo start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página ``localhost:19002``. Conecte seu emulador, ou teste o aplicativo por ``LAN``: baixe o aplicativo *Expo* da Play Store ou App Store e em seguida escaneie o código QR. (Se não for por lan, tente por tunnel, espere aparecer no Metro Blunder(informações do Expo sobre o app) a mensagem *Tunnel Ready* então clique em tunnel e escaneie o código QR.

# Projeto


![](https://github.com/dyegosoriano/omnistack10-devradar/blob/master/readme-img/dev-radar.png)


# Back-End

Api desenvolvida em NodeJS com acesso a banco de dados MongoDB.

As rotas para acessar a API estão no arquivo [routes.js](https://github.com/dyegosoriano/omnistack10-devradar/blob/master/backend/src/routes.js). Você pode testar as rotas antes de usar o frontend com o software Insomnia.

# Front-End (Web e Mobile)

Frontend web, desenvolvido em ReactJS. Nesta parte da aplicação, é possível entender diversos conceitos do React e do desenvolvimento web em geral. 

Além disso, é muito importante entender como a página web normalmente se comunica com a API por meio de requisições http, as quais retornam ao frontend como um objeto json. Neste caso, foi utilizada a lib axios para realizar a comunicação com a api.

# Mobile

Desenvolvido com o framework React Native e com o Expo.

# Licença

Esse projeto está sob a licença MIT.