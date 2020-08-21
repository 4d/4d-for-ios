---
id: data
title: Data
---

Esta seção permite que:

* define the data to include in your app (**Current data file** or **Production server data file**),
* automatically **regenerate data** each time you build your app or generate it manually, and
* filter data to vizualize in your app depending on **general filter queries** or **user information**.

![Data section](assets/en/project-editor/Data-tab-4D-for-iOS.png)

## Painel de fonte de dados

![Data section](assets/en/project-editor/Data-source-panel-4D-for-iOS.png)

This panel allows you to define your **data source**. You can choose to get data from the **Current data file** or from a **Production server**.

To secure access to the production server, a **key file** must be generated from the production server and physically communicated to the developer. This **key.mobileapp** file is available next to data in the MobileApps folder. Então o desenvolvedor pode selecionar a partir do editor de projeto para acessar dados do servidor de produção.

The **Production URL** must be entered from the **Publishing section** if you choose to get data from your production server.

Aqui também pode checar se o servidor está disponível e ativá-lo se necessário.

> **NOTA **
> 
> * Dicas estão disponíveis para ajudar a assegurar que o servidor funcione corretamente.
> * Pode acessar diretamente o painel de Publicação para deifnir a URL da produção.
> * Para acessar os dados do servidor de produção, é necessário um arquivo key para assegurar as comunicações.


You can define if you want to **include images** and also whether or not you want to **Regenerate data systematically** at each build.

When the **Do not regenerate data at each build** and the **Do not include imgages** options are checked, you can save a considerable amount of time building your app. You can always generate your data manually by clicking on the **Regenerate Now button**.


## Painel Propriedades

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

In this panel, you can define all the filters for each table based on **defined filter queries** or based on **user parameters**.

### Filtros de pesquisa

Pode definir os filtros por tabela, em função dos valores de campo:

* Primeiro ingresso sua pesquisa no campo dedicado escrevendo diretamente no "Campo de pesquisa". Também pode redatar sua pesquisa usando as abas Campos, Comparadores e Operadores, que estão disponíveis imediatamente sobre o campo de pesquisa quando estiver focado. Isso pode ser útil para definir sua pesquisa.

* Daí precisa validar sua pesquisa. Isso deve ser feito cada vez que modificar o filtro de pesquisa (uma pesquisa editada e não validada aparece em vermelho no editor de projeto).

* Finally, check the **Embed data into the built application** option to embed the data into the application when it's built. Deixe sem marcar se não quiser que os dados sejam integrados.

Quando um filtro de pesquisa for válido, um ícone funil aparece indicando que o filtro definido é baseado em um filtro de pesquisa definido.

> **EXEMPLO** 
> 
> In the **Filter query** field enter:
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
> In the **Filter query** field enter:
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

