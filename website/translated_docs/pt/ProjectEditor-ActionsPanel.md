---
id: actions
title: Actions
---

Esta seção permite que:

* crie ações para executar o código 4D a partir de seu app iOS.
* defina e adicione parâmetros para suas ações.

## Project Editor Side

### Crie sua ação

Pode criar uma nova ação clicando no botão +  no fundo da tabela Actions. Uma nova linha vai aparecer na tabela Actions.

Depois precisa definir o abaixo:

* **Names:** The action name to use in the [On Mobile App Action](https://developer.4d.com/4d-for-ios/docs/en/actions.html#on-mobile-app-action) database method to trigger your 4D code.
* **Icons:** The icon to choose from your icon library. Pode adicionar seu próprio ícone seguinto este [tutorial](using-icons.html).
* **Short and long Labels:** The labels for the actions to display in your app.
* **Table:** The table on which you want to apply the action.
* **Scope:** Where to use the action, an **entity** or a **table**.

![Action section](assets/en/project-editor/Actions-section-4D-for-iOS.png)

### Adicione parâmetros para sua ação

As of **4D v17R6**, you can add **action parameters** and **edit** data directly from your app.

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

Here are the different **Formats** you can select for a parameter:

<table>

<tr>
<th colspan="2"  style="text-align:center">TEXTO</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Texto</td><td>Colocar em maiúscula a primeira letra da string</td>
</tr><tr>
<td>Endereço de email</td><td>Teclado iOS otimizado para a entrada de correio eletrônico</td>
</tr><tr>
<td>Número de telefone</td><td>Teclado iOS para ingressar o número de telefone.</td>
</tr><tr>
<td>Conta</td><td>Teclado iOS otimizado para a entrada de correio eletrônico</td>
</tr><tr>
<td>Senha</td><td>Otimizado para manejar senhas</td>
</tr><tr>
<td>URL</td><td>Teclado iOS otimizado para a entrada  de URLs</td>
</tr><tr>
<td>Código postal CEP</td><td>Teclado iOS otimizado para entrada de código postal</td>
</tr><tr>
<td>Área de texto</td><td>Inclui linhas múltiplas de texto em um único campo</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">NÚMERO</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Número</td><td>Número com decimais.</td>
</tr><tr>
<td>Inteiro</td><td>Números sem decimais.</td>
</tr><tr>
<td>Científico</td><td>Notação científica</td>
</tr><tr>
<td>Porcentagem</td><td>Notação de porcentagem</td>
</tr><tr>
<td>Números por extenso</td><td>Converte os números em texto</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">DATA</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Data</td><td>Nov 23, 1937</td>
</tr><tr>
<td>Data curta</td><td> 11/23/37</td>
</tr><tr>
<td>Data longa</td><td>Novembro 23, 1937</td>
</tr><tr>
<td>Data completa</td><td>Terça, Novembro 23, 1937</td>
</tr><tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">HORA</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Hora</td><td>3:30 PM</td>
</tr><tr>
<td>Duração</td><td>2 horas 30 minutos</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>

<tr>
<th colspan="2" style="text-align:center">BOOLEANO</th>
</tr><tr style="text-align:center">
<th>Formato</th><th>Descrição</th>
</tr><tr>
<td>Booleano</td><td><img src="https://github.com/4d/4d-for-ios/blob/develop/docs/assets/en/project-editor/switch.png?raw=true"></td>
</tr><tr>
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

* Edit
* Ação de Adicionar
* Ação de eliminar

#### 1. Ação de Adicionar

4D for iOS makes the **Add actions** creation process very simple.

The only thing you need to do is select the **Add action for** option, accessible from the **+ button** at the bottom of the Actions table.

![Add actions](assets/en/project-editor/Actions-Add-action-4D-for-iOS.png)

Then just **select the table** you want to link to this add action. E é só isso!

This will **automatically create** all the parameters for you in the Project Editor. No app gerado, isso permite que edite cada valor de campo.

For those kind of action, you will see that all **properties** are already filled in for your convenience at the right side of the parameter's list.


#### 2. Ação Editar

**Edit actions** creation follows the same process as the Add actions, with the exception that you will not be able to define default values from the Actions section.

![Edit actions](assets/en/project-editor/Actions-Edit-action-4D-for-iOS.png)


#### 3. Ação de eliminação

**Delete action** creation follows the same process as the Edit action. A única diferença é que essa ação permite que remova uma entidade.

To create a Delete action, select the **Delete action for** option accessible from the **+ button** at the bottom of the Actions table.

Este tipo de ação deve ser utilizado com precaução.

![Delete actions](assets/en/project-editor/Actions-Delete-action-4D-for-iOS.png)

Para as ações de edição e adição, pode modificar:

* parameters by adding or removing a parameter using the **+ and - buttons** at the bottom of the Action parameters list.
* as propriedades, definindo-as como quiser.

### On Mobile App Action

O método banco de dados [On Mobile App Action](https://livedoc.4d.com/4D-Language-Reference-17-R5/Database-Methods/On-Mobile-App-Action-database-method.301-4286697.en.html) está disponível para chamar a todos seus métodos 4D.

After creating all of your actions, just click on the Create button from the Actions table to automatically generate a *Case of* code block that includes all your action names in the *On Mobile App Action* method.

> **NOTA **
> 
> * You can refresh the selection after executing an action using `$out.dataSynchro:=True`.
> * You can notify the app user when action has been executed using `$out.statusText:="Message you want to display"`.
> * You can also decide to force close the Edition form using `$out.close:=True`.

## Aplicação iOS

In your iOS app, actions are available in different ways in your List and Detail forms, depending on the templates you select in the Forms section.

### Formulários Lista em tabela

* **Entity action:** Swipe left on a cell to display the available actions in a List form. A "More" button is displayed if you've defined more than three actions per entity.

![Entity Lisform Tableview](assets/en/actions/ListForm-entity-action-tableview.png)

* **Table actions:** A generic actions button is available in the navigation bar to display a list of available table actions.

![Table Listform Tableview](assets/en/actions/ListForm-table-action-tableview.png)

> **DICAS**
> 
> Actions will be displayed in the same order as defined in the Action section.


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
