---
id: xcode
title: Xcode
---

## O que é Xcode?

Xcode é um IDE e um conjunto de ferramentas de desenvolvimento para macOS usado para criar apps iPad, iPod, iPhone e Mac.

## Baixar

Para baixar a última versão de Xcode vá para a App Store.

<div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
  <p>
    

<a class="button" href="macappstore://itunes.apple.com/app/id497799835?mt=12">Veja na Loja Mac App </a>

  </p>
</div>

Desenvolvedores registrados podem baixar lançamentos preview e versões prévias através do website Apple Developer.

🔗 https://developer.apple.com/download/more/ 🔗 https://developer.apple.com/xcode/

## Tabela de comparação de versões

| Xcode  | Swift | iOS      | 4D   | MacOS   |
| ------ | ----- | -------- | ---- | ------- |
| 11.2   | 5.1   | iOS 13.2 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | iOS 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | iOS 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | iOS 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | iOS 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | iOS 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | iOS 11.3 | 17R2 | 10.13.2 |

### Use 17R6 com macOS 10.14.3

4D 17R6 exige Swift5.0 runtime. (Já instalado com o macOS 10.14.4)

- Instale `Swift 5 Runtime Support for Command Line Tools` de [Mais Downloads para Desenvolvedores Apple](https://developer.apple.com/download/more/)

### Compatibidade

Frameworks compilado com uma versão de Xcode não pode ser usado com outra versão.

O lançamento atual de swift(5) tem estabilidade ABI mas não tem estabilidade de módulo. Essas duas condições são necessárias para enviar as bibliotecas pré-compiladas.

Veja o blog de Swift para mais detalhes. https://swift.org/blog/abi-stability-and-more/