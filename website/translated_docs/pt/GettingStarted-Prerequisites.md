---
id: prerequisites
title: Pré-requisitos
---

## Exigências de Software

* 4D Developer Pro v17 R2 64-bit (Desenvolvimento)
* 4D Server v17 R2 64-bit (Implementação)
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) instalado em seu Mac (opcional).

Apple configurator 2 requires **macOS 10.14** or a more recent version. If you want to automate app installation on your physical device, you need to install this software.

Xcode 10.2 requieres **macOS 10.14** or a more recent version.

## Tabela de comparação de tabelas

| Xcode  | Swift | iOS  | 4D          | macOS   |
| ------ | ----- | ---- | ----------- | ------- |
| 12.4   | 5.3.2 | 14.4 | 18R6 beta   | 10.15.4 |
| 12.2   | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4 |
| 12.0   | 5.3   | 14.0 | 18R4        | 10.15.4 |
| 11.5   | 5.2.4 | 13.5 | 18R3        | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2        | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1        | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2        | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18          | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6        | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5        | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4        | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3        | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2        | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2        | 10.13.2 |

### Usando 17R6 com macOS 10.14.3

4D 17R6 requires Swift5.0 runtime (already installed with macOS 10.14.4).

 - Instale `Swift 5 Runtime Support for Command Line Tools` de [Mais  Downloads para Desenvolvedores Apple](https://developer.apple.com/download/more/)

### Usando 17R4 com macOS 10.2

Due to Apple Swift language abi instability, you cannot use the standard 4D 17R4 with Xcode 10.2.

Fortunately, we provide an alternative component compatible with Xcode 10.2.

É possível substituir o componente interno de usuário `4D Mobile App.4dbase`, que pode ser encontrado em  `../4D.app/Contents/Resources/Internal User Components/`, por isso propomos:

<a class="button"
href="https://download.4d.com/Products/Current/4D_v17R4/4D%20Mobile%20App%20-%20Xcode%2010.2/4D%20Mobile%20App.4dbase.zip">4D Mobile App.4dbase.zip</a>

## Exigências de hardware

* 8GB of RAM (Minimum recommended).

## Configuração

* Nas configurações de banco de dados 4D, exibe a página Compatibilidade e marque  **Usar a notação objeto para acessar propriedades dos objetos (precisa Unicode ).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Seus portos HTTP e HTTPS devem estar configurados corretamente. HTTPS is mandatory for 4D for iOS deployment.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Seu Servidor Web deve ser iniciado. It is available from the Run menu:

![Start web server](assets/en/prerequisites/Start-web-server.png)
