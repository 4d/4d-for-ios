---
id: data
title: Dados
---

Esta seção permite que:

* defina os dados a incluir em sua aplicação (**Arquivo de dados atual** ou **Arquivo de dados de servidor de produção**),
* efetue uma **regeneração** automática de dados cada vez que gere sua aplicação ou efetue uma geração manual, e
* filter the data to vizualize in your app depending on the **general filter queries** or the **user information**.

![Data section](assets/en/project-editor/Data-tab-4D-for-iOS.png)

## Painel de fonte de dados

![Data section](assets/en/project-editor/Data-source-panel-4D-for-iOS.png)

Este painel permite definir sua **fonte de dados**. Pode escolher obter dados de **Arquivo de dados atual** ou de um **Arquivo de dados de servidor de produção**.

Para assegurar o acesso ao servidor de produção, se deve gerar um **arquivo key. mobileapp** desde o servidor de produção e se deve comunicar fisicamente ao desenvolvedor. This **key.mobileapp** file is available next to the data, in the MobileApps folder. Then, the developer can select it from the project editor to access to the production server data.

Se escolher obter dados de seu servidor de produção a **URL de produção** deve ser ingressada a partir da seção **Publicação**

Here, you can also check if the server is available and choose to activate it, if necessary.

> **NOTA **
> 
> * Tips are available to help you ensure that the server works correctly.
> * Pode acessar diretamente o painel de Publicação para deifnir a URL da produção.
> * Para acessar os dados do servidor de produção, é necessário um arquivo key para assegurar as comunicações.

You can define if you want to **include images** and or to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** and the **Do not include imgages** options are checked, you can save a considerable amount of time to build your app. Pode sempre gerar seus dados manualmente clicando no botão **Regenerar agora**.


## Painel Propriedades

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

In this panel, you can define all the filters for each table, based on **defined filter queries** or on **user parameters**.

### Filtros de pesquisa

Pode definir os filtros por tabela, em função dos valores de campo:

* Primeiro ingresso sua pesquisa no campo dedicado escrevendo diretamente no "Campo de pesquisa". Também pode redatar sua pesquisa usando as abas Campos, Comparadores e Operadores, que estão disponíveis imediatamente sobre o campo de pesquisa quando estiver focado. Isso pode ser útil para definir sua pesquisa.

* Daí precisa validar sua pesquisa. Isso deve ser feito cada vez que modificar o filtro de pesquisa (uma pesquisa editada e não validada aparece em vermelho no editor de projeto).

* Finally, check the **Embed data into the built application** option to embed the data into the application once it's built. Deixe sem marcar se não quiser que os dados sejam integrados.

When a query filter is valid, a funnel icon appears, indicating that the defined filter is based on a defined filter query.

> **EXEMPLO** 
> 
> No campo **pesquisa Filtro** digite:
> 
> `FirstName = 'Lisa' & LastName = 'Hart'`
> 
> Esta pesquisa permite exibir apenas os registros que incluem"Lisa" como FirstName (nome) e "Hart" como LastName (sobrenome).


### Filtrado com filtros de informação de usuário

You can define filters depending on the user information that you define in the Mobile App Authentication method:

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


