---
id: faq
title: FAQ
---

## Pré-requisitos

<details>
<summary>
    <strong>Preciso de experiência específica para usar o 4D for iOS?</strong>
</summary>

Com 4D for iOS, pode criar facilmente projetos móveis diretamente desde 4D, sem necessidade de experiência prévia na criação de aplicações iOS nativas!

O editor de projetos móveis foi criado para que seja possível usar 4D for iOS sem nenhum conhecimento específico no desenvolvimento de aplicações móveis.

</details>

<details>
<summary>
<strong>Há algum pré-requisito para 4D for iOS?</strong>
</summary>

### Tabela de comparação de versões

| Xcode  | Swift | iOS      | 4D   | MacOS   |
| ------ | ----- | -------- | ---- | ------- |
| 11     | 5.1   | iOS 13.0 | 18   | 10.14.4 |
| 10.2.1 | 5.0   | iOS 12.2 | 17R6 | 10.14.4 |
| 10.2   | 4.2.1 | iOS 12.2 | 17R5 | 10.14.3 |
| 10.1   | 4.2.1 | iOS 12   | 17R4 | 10.13.6 |
| 10.0   | 4.2   | iOS 12   | 17R3 | 10.13.6 |
| 9.4    | 4.1.2 | iOS 11.4 | 17R2 | 10.13.2 |
| 9.3.1  | 4.1   | iOS 11.3 | 17R2 | 10.13.2 |

Caso precise de uma versão antiga de Xcode pode baixá-la aqui: https://developer.apple.com/download/more/

=> Só desenvolvedores registrados podem baixar lançamentos preview através do website Apple Developer.

Veja a lista de pré-requisitos [aqui](prerequisites.html).

</details>

<details>
<summary>
<strong>Posso usar Windows para desenvolver com 4D for iOS?</strong>
</summary>

Não. Deve desenvolver em macOS, pois é preciso Xcode para compilar a aplicação final e executar o Simulador.

</details>

## Licença

<details>
<summary>
<strong>Preciso de um Web Server 4D para executar 4D for iOS?</strong>
</summary>

Não - 4D for iOS está incluído em 4D Server v17 R2 e superior.

</details>

<details>
<summary>
<strong>Há uma licença de teste ou avaliação disponível?</strong>
</summary>

Se já tiver uma licença 4D Developer Pro ou 4D Server para 4D v17 R2 ou posterior, já está incluido o 4D for iOS.

Se ainda não for um 4D Partner, ou não participa no programa 4D Manutenção, você tem que esperar por 4D V18.

</details>

<details>
<summary>
<strong>Que licença 4D eu preciso ter para desenvolver com 4D for iOS?</strong>
</summary>

É preciso ter uma licença 4D Developer Pro v17 R2 (macOS) para desenvolver apps para 4D for iOS.

</details>

<details>
<summary>
<strong>Que licença 4D eu preciso ter para desenvolver com 4D for iOS?</strong>
</summary>

É preciso ter uma licença 4D Server (macOS ou Windows) v17 R2 ou mais nova, para implementar aplicações iOS.

Não é preciso licenças adicionais. Suas aplicações 4D for iOS compartilham as mesmas licenças que as de 4D Remote (cliente).

Clientes podem se conectar em Macs, PCs Windows ou iPhones, desde o número total de usuários simultâneos esteja coberto pela licença 4D Server.

Note que você não pode instalar seu app móvel em mais dispositivos que a quantidade total das licenças remotas (cliente) do 4D Server.

</details>

<details>
<summary>
<strong>Eu tenho um 4D Server e uma expansão para dois clientes (no total, quatro clientes), quantos dispositivos móveis posso usar?</strong>
</summary>

Pode usar até quatro dispositivos móveis.

</details>

## Perguntas diversas

<details>
<summary>
<strong>Eu tenho uma aplicação com muitos dados, posso integrá-la em meu dispositivo iOS?</strong>
</summary>

4D for iOS permite que integre um máximo de 10.000 registros em seu app.

No momento, a melhor maneira de lidar com grandes quantidades de dados é criando uma tabela intermediária e filtras os resultados que quiser exibir.

Versões futuras de 4D for iOS vão incluir maneiras de aplicar filtros para que se mostre só a informação requerida.

</details>

<details>
<summary>
<strong>Posso modificar e atualizar dados a partir de minha aplicação iOS?</strong>
</summary>

No momento, 4D for iOS permite criar aplicações apenas leitura.

Versões futuras permitirão adicionar e modificar seus registros diretamente de sua aplicação iOS e sincronizar seus dados com o servidor.

</details>

<details>
<summary>
<strong>Posso recarregar apenas os registros que foram modificados?</strong>
</summary>

Quando recarregar os dados, todos os dados serão descarregados para substituir os dados existentes.

Sincronização incremental está nos planos para lançamentos futuros.

</details>

<details>
<summary>
<strong>Onde são armazenados os dados?</strong>
</summary>

Seus dados são armazenados localmente no aparelho iOS. Isso permite que acesse seus dados em modo offline.

</details>

<details>
<summary>
<strong>Posso usar tabelas relacionadas em 4D for iOS?</strong>
</summary>

Sabemos que você precisa usar muitas tabelas relacionadas para suas aplicações e estamos trabalhando no acesso à tabelas relacionadas nos lançamentos futuros de 4D for iOS.

</details>

<details>
<summary>
<strong>Posso usar campos calculados em 4D for iOS?</strong>
</summary>

Você pode criar campos pré-calculados em 4D e publicá-los a partir da [Seção Estrutura](structure.html) do editor de projeto de 4D for iOS.

</details>

<details>
<summary>
<strong>Preciso ter imagens no meu banco de dados?</strong>
</summary>

Não é obrigatório ter imagens, mas é recomendado que sejam usadas para oferecer uma melhor experiência de usuário.

4D for iOS oferece uma variedade de modelos de[formulários listados](list-form-templates.html) e [formulários detalhados](detail-form-templates.html). Com ou sem imagens, com gráficos...

</details>

<details>
<summary>
<strong>Do I need to create an icon for my iOS app?</strong>
</summary>

It's highly recommended to have an icon for your 4D for iOS app. If you don't have one, the default icon (the 4D logo) will be displayed.

If you already have an icon for your 4D Desktop application, you can drag and drop it directly into the icon area on the [General](general.html) section of the project editor.

</details>

<details>
<summary>
<strong>How can I test my app?</strong>
</summary>

4D for iOS allows you to test your apps in the [Simulator](simulator.html). To test your app on your iOS device you need to have a **paying Apple developer account** (install-device.html) (iPhone and iPad).

**Note:** to intall your app with a **free developer account**, you can open your generated iOS project and install your app using Xcode.

</details>

<details>
<summary>
<strong>Do I need to create special iOS templates to build my apps on an iPhone or iPad?</strong>
</summary>

All of templates available in 4D for iOS are optimized for the iPhone. They also work well on iPads.

</details>

<details>
<summary>
     <strong>Do I need an Apple Developer Account?</strong>
</summary>

To test your app, you'll need to create at least a [free Apple Developer account](free-developer-account.html).

To deploy a 4D for iOS app, you'll need to enroll in the [Apple Developer Enterprise Program](register-apple-developer-enterprise-program.html) (for an in-house deployment) or in the [Apple Developer Program](register-apple-developer-program-organization.html) (for an App Store deployment).

</details>

<details>
<summary>
<strong>Can I customize my 4D for iOS app?</strong>
</summary>

4D for iOS generates a real Xcode project that you can [open and modify](open-xcode.html) according to your needs.

</details>