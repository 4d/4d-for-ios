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

| Xcode  | Swift | iOS      | 4D   | macOS   |
| ------ | ----- | -------- | ---- | ------- |
| 11.1   | 5.1   | iOS 13.0 | 18   | 10.14.4 |
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
<strong>Preciso criar um ícone para minha aplicação iOS?</strong>
</summary>

É altamente recomendável ter um ícone para sua aplicação 4D for iOS. Se não tiver um, o ícone padrão (logo 4D) será exibido.

Se já tiver ícones para sua aplicação 4D Desktop, pode arrastar e soltar diretamente na área ícone na seção [Geral](general.html) do editor de projeto.

</details>

<details>
<summary>
<strong>Como posso testar meu app?</strong>
</summary>

4D for iOS permite que teste seus apps em [Simulador](simulator.html). Para testar seu app no aparelho iOS precisa ter uma **conta paga de desenvolvedor de Apple** (install-device.html) (iPhone e iPad).

**Nota:** para instalar seu app com uma **conta desenvolvedor gratuita**, é preciso abrir seu projeto gerado iOS e instalar seu app usando Xcode.

</details>

<details>
<summary>
<strong>Preciso criar modelos especiais iOS para construir meus apps em um iPhone ou iPad?</strong>
</summary>

Todos os modelos disponíveis em 4D for iOS estão otimizados para o iPhone. Também funcionam bem em iPads.

</details>

<details>
<summary>
     <strong>Preciso de uma Conta de Desenvolvedor Apple?</strong>
</summary>

Para testar seu app, é preciso criar pelo menos uma [conta gratuita de Desenvolvedor Apple](free-developer-account.html).

Para implementar um app 4D for iOS, é preciso se inscrever em [Programa Apple Developer Enterprise](register-apple-developer-enterprise-program.html) (para implementação in-house) ou [Programa Apple Developer](register-apple-developer-program-organization.html) (para implementação App Store).

</details>

<details>
<summary>
<strong>Posso personalizar meu app 4D for iOS?</strong>
</summary>

4D for iOS gera um projeto real Xcode que pode [abrir e modificar](open-xcode.html) de acordo com suas necessidades.

</details>