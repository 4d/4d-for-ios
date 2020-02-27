---
id: actions
title: Actions
---

Esta seção permite que:

* crie ações para executar o código 4D a partir de seu app iOS.
* defina e adicione parâmetros para suas ações.

## Project Editor Side

### Crie sua ação

Pode criar uma nova ação clicando no botão + no fundo da tabela Actions. Uma nova linha vai aparecer na tabela Actions.

Depois precisa definir o abaixo:

* **Names:** o nome da ação a usar no método de banco de dados [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) para ativar seu código 4D.
* **Icons:** O ícone a escolher de sua biblioteca ícone. Pode adicionar seu próprio ícone seguinto este [tutorial](using-icons.html).
* **Short and long Labels:** As etiquetas para as ações para exibir em seu app.
* **Table:** A tabela na qual quer aplicar a ação.
* **Scope:** Onde usar a ação, uma **entidade** ou uma **tabela**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

### Adicione parâmetros para sua ação 

A partir de **4D v17R6**, pode adicionar **parâmetros ação** e **editar** dados diretamente de seu app.

Para cada parâmetro, pode editar as propriedades abaixo:

* Nome
* Etiqueta longa
* Etiqueta curta
* Formato
* Restrições de input (define valores mínimos ou máximos)
* Placeholder (valores provisórios)
* Definição campo obrigatória
* Valor padrão

![Action parameters](assets/en/project-editor/Actions-parameters-4D-for-iOS.png)

Você é livre para mudar a ordem dos parâmetros usando arrastar e soltar.

Aqui estão os diferentes **Formatos** que pode selecionar para um parâmetro:

<table>
  

<tr>
<th colspan="2"  style="text-align:center">TEXTO</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descrição</th>
  </tr>
  
  <tr>
    
<td>Texto</td><td>Colocar em maiúscula a primeira letra da string</td>
  </tr>
  
  <tr>
    
<td>Endereço de email</td><td>Teclado iOS otimizado para a entrada de correio eletrônico</td>
  </tr>
  
  <tr>
    
<td>Número de telefone</td><td>Teclado iOS para ingressar o número de telefone.</td>
  </tr>
  
  <tr>
    
<td>Conta</td><td>Teclado iOS otimizado para a entrada de correio eletrônico</td>
  </tr>
  
  <tr>
    
<td>Senha</td><td>Otimizado para manejar senhas</td>
  </tr>
  
  <tr>
    
<td>URL</td><td>Teclado iOS otimizado para a entrada  de URLs</td>
  </tr>
  
  <tr>
    
<td>Código postal CEP</td><td>Teclado iOS otimizado para entrada de código postal</td>
  </tr>
  
  <tr>
    
<td>Área de texto</td><td>Inclui linhas múltiplas de texto em um único campo</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">NÚMERO</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descrição</th>
  </tr>
  
  <tr>
    
<td>Número</td><td>Número com decimais.</td>
  </tr>
  
  <tr>
    
<td>Inteiro</td><td>Números sem decimais.</td>
  </tr>
  
  <tr>
    
<td>Científico</td><td>Notação científica</td>
  </tr>
  
  <tr>
    
<td>Porcentagem</td><td>Notação de porcentagem</td>
  </tr>
  
  <tr>
    
<td>Números por extenso</td><td>Converte os números em texto</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">DATA</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descrição</th>
  </tr>
  
  <tr>
    
<td>Data</td><td>Nov 23, 1937</td>
  </tr>
  
  <tr>
    
<td>Data curta</td><td>    11/23/37</td>
  </tr>
  
  <tr>
    
<td>Data longa</td><td>Novembro 23, 1937</td>
  </tr>
  
  <tr>
    
<td>Data completa</td><td>Terça, Novembro 23, 1937</td>
  </tr>
  
  <tr>
    
<td colspan="2"></td>
  </tr>

<tr>
<th colspan="2" style="text-align:center">HORA</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descrição</th>
  </tr>
  
  <tr>
    
<td>Hora</td><td>3:30 PM</td>
  </tr>
  
  <tr>
    
<td>Duração</td><td>2 horas 30 minutos</td>
  </tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">BOOLEANO</th>
</tr>  
  <tr style="text-align:center">
    
<th>Formato</th><th>Descrição</th>
  </tr>
  
  <tr>
    
<td>Booleano</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"></td>
  </tr>
  
  <tr>
    
<td>Marca de verificação</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/check.png?raw=true"></td>
  </tr>

<tr>
<td colspan="2"></td>
</tr>
<tr>
<th colspan="2" style="text-align:center">IMAGENS</th>
</tr>
<tr>
<td colspan="2">Os parâmetros de imagem estarão disponíveis em um lançamento posterior</td>
</tr>

</table>

### Ações predefinidas

4D for iOS inclui três ações (pré-definidas) para administrar o conteúdo de sua aplicação:

* Ação de Editar 
* Ação de Adicionar 
* Ação de eliminar 

#### 1. Ação de Adicionar

4D for iOS torna o processo de criação **Ação Adicionar** bem simples.

A única coisa que precisa fazer é selecionar a opção **Ação adicionar** acessível a partir do **+ botão** no fundo da tabela Ações.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Depois **selecione a tabela** que quiser linkar à ação adicionar. E é só isso!

Isso vai **criar automaticamente** todos os parâmetros para você no Editor de Projeto. No app gerado, isso permite que edite cada valor de campo.

Para este tipo de ação, vai ver que todas as **propriedades** já estão preenchidas para sua conveniência no lado direito da lista de parâmetros.

#### 2. Ação Editar

A criação de **Ações Editar** segue o mesmo processo que as Ações Adicionar, com exceção que não é possível definir valores predeterminados a partir da seção Ações.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)

#### 3. Ação de eliminação

A criação de **ações de eliminação ** segue o mesmo processo que as ações de edição. A única diferença é que essa ação permite que remova uma entidade.

Para criar uma ação de eliminação, selecione a opção **Ação de eliminação para**, acessível desde o **botão + ** na parte inferior da tabela Ações.

Este tipo de ação deve ser utilizado com precaução.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)

Para as ações de edição e adição, pode modificar:

* os parâmetros agregando ou removendo um parâmetro usando os **botões + e - ** no fundo da lista de parâmetros Ação.
* as propriedades, definindo-as como quiser. 

### On Mobile App Action

O método banco de dados [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) está disponível para chamar a todos seus métodos 4D.

Depois de criar todas as suas ações, simplesmente clique no botão Criar da tabela Ações para gerar automaticamente um bloco de código *Case of* que inclua todos os nomes de suas ações no método *On Mobile App Action*.

:::tip NOTE

* You can refresh the selection after executing an action using ```$out.dataSynchro:=True```.
* You can notify the app user when action has been executed using ```$out.statusText:="Message you want to display"```.
* You can also decide to force close the Edition form using ```$out.close:=True```. :::

## Aplicação iOS

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Formulários Lista em tabela

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

:::tip TIPS Actions will be displayed in the same order as defined in the Action section. :::

### Formulários Lista coleção

* **Entity action:** Depending on the template, actions are displayed by clicking on a generic button or by maintaing the pressure on a cell.

![Entity Listform Collectionview](assets/en/actions/ListForm-entity-action-collectionview.png)

* **Table actions:** Like the Table List forms, a generic Actions button is available in the navigation bar to display a list of availble table actions.

![Table Listform Collectionview](assets/en/actions/ListForm-table-action-collectionview.png)

### Formulários detalhados

As with Table actions in List forms, a generic Actions button is available in the navigation bar to display all your entity actions in a list.

![Entity Detailform](assets/en/actions/Detailform-final.png)

### Formulários de edição

If you have created an Edit or an Add action, as soon as you select it from the action list, an **Edition form** will appear.

![Send task comment](assets/en/actions/Action-parameters-sendComment.png)

From here, you can:

* edit all of your fields by selecting them, and
* validate or cancel your modifications using the **Done** or **Cancel** buttons (available in the navigation bar).

For your convenience, the Edition form includes a few **special features**:

* The keyboard type depends on the selected parameter type in the Action section.
* You can go to the next or previous field using the arrow on top of the keyboard.
* The iOS keyboard can be closed by touching anywhere outside of a field.
* Indication is given to the user when a value is not valid.
* The view focuses on empty mandatory fields when the user clicks the Done button.

## Que fazer agora?

* A [tutorial](actions-getting-started.html) is available to guide you through the **action definition process**.

* Another [tutorial](action-custom-template.html) will guide you through the **action TAG integration** for custom templates.

* A final [tutorial](using-parameters.html) will guide you through the **action parameters definition**.