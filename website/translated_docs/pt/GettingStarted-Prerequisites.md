---
id: prerequisites
title: Pré-requisitos
---

## Exigências de Software

* 4D Developer Pro v17 R2 64-bit (Desenvolvimento)
* 4D Server v17 R2 64-bit (Implementação)
* [Apple configurator 2](https://itunes.apple.com/us/app/apple-configurator-2/id1037126344) instalado em seu Mac (opcional). Apple configurator 2 exige **macOS 10.14** ou superior. Instale esse software se precisar instalar automaticamente o app no dispositivo físico.

Xcode 10.2 requires **macOS 10.14** or later.

### Usando 17R6 com macOS 10.14.3

Xcode 10.2 exige **macOS 10.14** ou superior.

| Xcode                                                                                                         | Swift | iOS  | 4D          | macOS   |
| ------------------------------------------------------------------------------------------------------------- | ----- | ---- | ----------- | ------- |
| [12.5](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.5/Xcode_12.5.xip) | 5.4   | 14.6 | 18R6 beta   | 11.0.1  |
| [12.4](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.4/Xcode_12.4.xip) | 5.3.2 | 14.4 | 18R6        | 10.15.4 |
| [12.2](https://developer.apple.com/services-account/download?path=/Developer_Tools/Xcode_12.2/Xcode_12.2.xip) | 5.3   | 14.2 | 18R5 & 18.3 | 10.15.4 |

<details><summary>Version history</summary>

| Xcode  | Swift | iOS  | 4D   | macOS   |
| ------ | ----- | ---- | ---- | ------- |
| 12.0   | 5.3   | 14.0 | 18R4 | 10.15.4 |
| 11.5   | 5.2.4 | 13.5 | 18R3 | 10.15.2 |
| 11.4   | 5.2   | 13.4 | 18.2 | 10.15.2 |
| 11.3.1 | 5.1.3 | 13.3 | 18.1 | 10.14.4 |
| 11.3.1 | 5.1.3 | 13.3 | 18R2 | 10.14.4 |
| 11.2   | 5.1   | 13.2 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | 11.3 | 17R2 | 10.13.2 |
</details>

Devido à instabilidade da linguagem Apple Swift, não é possível utilizar a versão normal  4D 17R4 com Xcode 10.2.

| Android Studio                                        | 4D        | Windows           |
| ----------------------------------------------------- | --------- | ----------------- |
| [4.1.2](https://developer.android.com/studio/archive) | 18R6 beta | Windows 10 64-bit |

## Exigências de hardware

* 8GB de RAM (Mínimo recomendado)

## Configuração

* Nas configurações de banco de dados 4D, exibe a página Compatibilidade e marque  **Usar a notação objeto para acessar propriedades dos objetos (precisa Unicode ).**

![Use object notation](assets/en/prerequisites/Use-object-notation.png)

* Seus portos HTTP e HTTPS devem estar configurados corretamente. A porta HTTPS  é obrigatória para implementação 4D for iOS.

![Web Configuration](assets/en/prerequisites/Web-Configuration.png)

* Seu Servidor Web deve ser iniciado. Está disponível do menu Executar:

![Start web server](assets/en/prerequisites/Start-web-server.png)
