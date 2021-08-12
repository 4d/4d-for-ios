---
id: data
title: Dados
---

Esta seção permite que:

* defina os dados a incluir em sua aplicação (**Arquivo de dados atual** ou **Arquivo de dados de servidor de produção**),
* efetue uma **regeneração** automática de dados cada vez que gere sua aplicação ou efetue uma geração manual, e
* filtre os dados para visualizá-los em sua aplicação em função dos **filtros de pesquisa gerais** ou a **informação de usuário**.

![Data section](assets/en/project-editor/Data-tab-4D-for-iOS.png)

## Painel de fonte de dados

![Data section](assets/en/project-editor/Data-source-panel-4D-for-iOS.png)

Este painel permite definir sua **fonte de dados**. Pode escolher obter dados de **Arquivo de dados atual** ou de um **Arquivo de dados de servidor de produção**.

Para assegurar o acesso ao servidor de produção, se deve gerar um **arquivo key. mobileapp** desde o servidor de produção e se deve comunicar fisicamente ao desenvolvedor. Este arquivo **key.mobileapp** está disponível do lado da pasta MobileApps. Então o desenvolvedor pode selecionar a partir do editor de projeto para acessar dados do servidor de produção.

Se escolher obter dados de seu servidor de produção a **URL de produção** deve ser ingressada a partir da seção **Publicação**

Aqui também pode checar se o servidor está disponível e ativá-lo se necessário.

> **NOTA **
> 
> * Dicas estão disponíveis para ajudar a assegurar que o servidor funcione corretamente.
> * Pode acessar diretamente o painel de Publicação para deifnir a URL da produção.
> * Para acessar os dados do servidor de produção, é necessário um arquivo key para assegurar as comunicações.

Pode definir se deseja **incluir imagens** e também se quer **Regenerar dados sistematicamente** de cada construção.

Quando as opções **Não regenerar os dados a cada build** e **Não incluir imagens** estiverem marcadas, pode salvar uma quantidade considera de tempo na construção de seu app. Quando as opções **Não regenerar os dados a cada build** e **Não incluir imagens** estiverem marcadas, pode salvar uma quantidade considera de tempo na construção de seu app.


## Painel Propriedades

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

Neste painel pode definir todos os filtros para cada tabela baseado no **filtros de pesquisa definidos** ou baseados em **parâmetros usuário**.

### Filtros de pesquisa

Pode definir os filtros por tabela, em função dos valores de campo:

* Primeiro ingresso sua pesquisa no campo dedicado escrevendo diretamente no "Campo de pesquisa". Também pode redatar sua pesquisa usando as abas Campos, Comparadores e Operadores, que estão disponíveis imediatamente sobre o campo de pesquisa quando estiver focado. Isso pode ser útil para definir sua pesquisa.

* Daí precisa validar sua pesquisa. Isso deve ser feito cada vez que modificar o filtro de pesquisa (uma pesquisa editada e não validada aparece em vermelho no editor de projeto).

* Finalmente, marque a opção **Integrar os dados na aplicação** para integrar os dados na aplicação quando for gerado. Deixe sem marcar se não quiser que os dados sejam integrados.

Quando um filtro de pesquisa for válido, um ícone funil aparece indicando que o filtro definido é baseado em um filtro de pesquisa definido.

> **EXEMPLO** 
> 
> No campo **pesquisa Filtro** digite:
> 
> `FirstName = 'Lisa' & LastName = 'Hart'`
> 
> Esta pesquisa permite exibir apenas os registros que incluem"Lisa" como FirstName (nome) e "Hart" como LastName (sobrenome).


### Filtrado com filtros de informação de usuário

Pode definir filtros dependendo da informação de usuário que definir no método Mobile App Authentication:

* Da mesma forma que com filtros de pesquisa, primeiro deve definir sua pesquisa no campo apropriado.

* Para especificar que a pesquisa dependa da informação de usuário, apenas agregue ":" e a chave objeto `userinfo`.

* Depois valide sua pesquisa. Isso deve ser feito cada vez que modificar o filtro de pesquisa.

* Quando validar o filtro de pesquisa, aparece um botão que lhe permite agregar informação sobre os usuários no método [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

Quando um filtro de pesquisa for válido, um ícone de usuário aparecer para indicar que o filtro definido é baseado na informação de usuário.

> **EXEMPLO**
> 
> No campo **pesquisa Filtro** digite:
> 
> CityName = :city
> 
> No método banco de dados [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html) ingresse:
> 
> `$response.userInfo:=New object("city";"Paris")`
> 
> Esta pequisa permite exibir apenas os registros que incluem "Paris" como CityName.


> **NOTA **
> 
> Encontra todas as regras sobre as regras de sintaxe na documentação 4D [](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html).


