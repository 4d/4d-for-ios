---
id: data
title: Data
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

Aqui também pode checar se o servidor está disponível e ativá-lo se necessário.<div class = "tips"> 

**NOTA **

* Dicas estão disponíveis para ajudar a garantir que o servidor funciona corretamente.
* Pode acessar diretamente o painel de publicação para definir sua URL de produção.
* Para acessar aos dados de servidor de produção, é exigido um arquivo key.mobileapp para garantir as comunicações.</div> 

Também pode definir se quer **Regenerar os datos sistematicamente** em cada compilação.

Quando a opção **Não regenerar os dados em cada compilação** estiver marcada, pode poupar uma quantidade considerável de tempo na construção de sua aplicação. Sempre pode gerar seus dados manualmente clicando no botão **Regenerar agora**.

## Painel Propriedades

![Data section](assets/en/project-editor/Properties-Panel-4D-for-iOS.png)

Neste painel, pode definir todos os filtros para cada tabela segundo os **filtros de pesquisas definidas** ou segundo os **parâmetros usuário**.

### Filtros de pesquisa

Pode definir filtros por tabela, em função dos valores de campo:

* Primeiro ingresso sua pesquisa no campo dedicado escrevendo diretamente no "Campo de pesquisa". Também pode redatar sua pesquisa usando as abas Campos, Comparadores e Operadores, que estão disponíveis imediatamente sobre o campo de pesquisa quando estiver focado. Isso pode ser útil para definir sua pesquisa.

* Daí precisa validar sua pesquisa. Isso deve ser feito cada vez que modificar o filtro de pesquisa (uma pesquisa editada e não validada aparece em vermelho no editor de projeto).

* Finalmente, marque a opção **Integrar os dados na aplicação** para integrar os dados na aplicação quando for gerado. Deixe sem marcar se não quiser que os dados sejam integrados.

Quando um filtro de pesquisa for válido, um ícone aparece indicando que o filtro definido foi baseado em uma pesquisa definida de filtro.<div class = "tips"> 

**EXEMPLO**

No campo **Filtro de pesquisa** ingresse:

    FirstName = 'Lisa' & LastName = 'Hart'

Esta pesquisa lhe permite mostrar só os registros que incluem "Lisa" e "Hart" nos campos FirstName e LastName.</div> 

### Filtrado com filtros de informação de usuário

Pode definir filtros segundo a informação de usuário que define no método Mobile App Authentication:

* Da mesma forma que com filtros de pesquisa, primeiro deve definir sua pesquisa no campo apropriado.

* Para especificar que a pesquisa dependa da informação de usuário, apenas agregue ":" e a chave objeto `userinfo`.

* Depois valide sua pesquisa. Isso deve ser feito cada vez que modificar o filtro de pesquisa.

* Quando validar o filtro de pesquisa, aparece um botão que lhe permite agregar informação sobre os usuários no método [On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html).

Quando um filtro de pesquisa for válido, se mostra um ícone de usuário que indica que o filtro definido se baseia em informação de usuário.<div class = "tips"> 

**EXEMPLO**

No campo **Filtro de pesquisa** ingresse:

CityName = :city

No [método base On Mobile App Authentication](http://doc.4d.com/4Dv17R3/4D/17-R3/On-Mobile-App-Authentication-database-method.301-3906587.en.html), introduza:

    $response.userInfo:=New object("city";"Paris")

Esta pesquisa lhe permite mostrar só os registros que incluam "Paris" como CityName.</div> <div class = "tips"> 

**NOTA**

Encontrará todas as regras de sintaxe associadas à pesquisa na [documentação de 4D](http://livedoc.4d.com/4D-Language-Reference-17-R3/ORDA-DataClass/dataClassquery.301-3907505.en.html).</div>