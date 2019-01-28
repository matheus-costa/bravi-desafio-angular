# Bravi Desafio Angular

Este projeto tem como objetivo a implementação do teste para a empresa [Bravi Softwares](https://www.bravi.com.br/) cujo o desafio é consumir a API de clima [Open Weather Map](http://openweathermap.org/api) buscando e apresentando as informações clímaticas atuais a partir do nome de uma cidade.

BONUS:

- Incrementei ao desafio uma consulta inicial ao carregar a página da cidade onde se encontra o usuário, para tais informações utilizei a API [ipinfo.io](https://ipinfo.io/) que fornece informações de localização a partir do IP do dispositivo.

Este projeto utiliza as tecnologias:

- [Angular](https://angular.io) version 7.1.0.
- [Bootstrap](https://getbootstrap.com) version 4.2.1.

## Guia de uso

Para usufruir da aplicação basta acessar a página inicial, automáticamente uma busca inicial das informaçãoes climáticas da cidade onde o usuário se encontra será executada.

Para buscar informações climáticas de uma outra cidade, basta digitar o nome da cidade e clicar no botão `Search`

## Implantação

Para que este projeto seja executado é necessário que tenha instalado na máquina ou VM os seguintes recursos:

- [NodeJS](https://nodejs.org) version 8.12.0
- [AngularCLI](https://github.com/angular-cli) version 7.1.4

## Servidor local

Para rodar a aplicação em ambiente local, rode `ng serve` este comando irá subir o servidor. Agora em um navegador digite `http://localhost:4200/`. E a aplicação será carregada.

## Build

Para realizar o deploy da aplicação em um servidor, rode `ng build` este comando irá realizar o build da aplicação. Os arquivos ficaram na pasta `dist/` no diretório raiz. Use o complemento `--prod` para realizar o build para produção.

## Help

Caso necessite de ajuda para implantação você pode enviar um email para [mcostap80@gmail.com](mailto://mcosta80@gmail.com).
