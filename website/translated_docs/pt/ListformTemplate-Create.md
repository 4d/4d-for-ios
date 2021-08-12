---
id: creating-detailform-templates
title: Modelos de formulários Lista
---

> **OBJETIVOS**
> 
> Criar seu primeiro modelo de formulário listado.

> **PRÉ-REQUISITOS**
> 
> Clique [aqui](prerequisites.html) para ver o que precisa para começar!

Neste tutorial, vamos cobrir quase todos os aspectos da criação de um modelo de lista formulário, tais como: criar um formulário lista com uma **barra de pesquisa** e uma tabela exibindo uma **imagem**, um **título**, e um **subtítulo** para cada célula.

![List form template final result](assets/en/custom-listform/custom-template-final-result.png)

## Baixe o Starter Project

Antes de começar, baixe o **Starter Project** que inclui:

* Uma pasta **formulário Lista**
* Um arquivo **Contact.4dbase**  (um banco de dados demo com um projeto de app móvel pronto para usar)

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/releases/latest/download/tutorial-CustomListFormStarter.zip">PROJETO STARTER LISTFORM</a>
</div>

Já está pronto para criar seu primeiro modelo de formulário lista!

## Adicione um modelo de formulário lista para seu projeto móvel

Primeiro deve criar uma pasta *Contact.4dbase/Resources/Mobile/form/list* Depois arraste e solte sua pasta  **list form** nela

![Mobile folder custom template](assets/en/custom-listform/mobile-folder-custom-template.png)

Agora abra o arquivo Contact.4dbase com 4D. (Arquivo > Abrir > Mobile Project > **App Demo Contact **)

Finalmente, na seção **Forms** do editor de projeto, verá que seu modelo de lista formulário foi adicionado com sucesso à lista de modelos de formulários lista disponíveis!

![Seção Formulários](assets/en/custom-listform/custom-listform-template.png)

Agora vamos nos concentrar nos conteúdos da pasta  **Custom List form**

## Conteúdos do modelo formulário lista

Nesta pasta vai encontrar:

* Um ícone** layoutIconx2.png** de 160x160px : será exibido no editor de projeto quando selecionar seu modelo
* Um arquivo**manifest.json** : inclui uma descrição básica do modelo
* Um arquivo**template.svg** : a representação visual de seu modelo que é mostrada quando definir o conteúdo de seu formulário lista.
* Pasta Source : inclui os arquivos **storyboard** (interface gráfica) e **Swift** (código para o formulário)
* **android folder** that includes the layout.xml file (graphical interface) in app > src > main > res > layout folder


Que são estes arquivos? Para que são usados? Como personalizá-los?
