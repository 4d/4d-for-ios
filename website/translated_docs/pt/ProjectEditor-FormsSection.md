---
id: forms
title: Formulários
---

A seção Formulários lhe permite selecioanr os modelos de formulário Lista e de formulários detalhados para cada tabela.

4D for iOS provides various templates with custom transition effects to build modern iOS applications.

Aqui está o detalhamento da tela, de cima para baixo:

* **Os formulários lista e os formulários detalhados:** permitem mudar entre os formulários Lista e os formulários detalhados para cada tabela.
* **Tabelas publicadas:** Exibe todas as tabelas publicadas na seção Estrutura.
* **Formulários Disponíveis:** Permite trocar entre a seleção de modelos e a definição de conteúdo.

![List form template selection](assets/en/project-editor/Forms-section-templates-selection-4D-for-iOS.png)

## Definição de formulários Lista

It's very simple, empty templates are used by default for an app's list and detail forms.

Selecione um modelo para sua primeira tabela. The content definition screen appears. Depois pode arrastar e soltar os campos da lista diretamente no modelo mostrado à direita. A maioria dos formulários Lista incluem campos opcionais Pesquisa e Seção.

![List form content definition](assets/en/project-editor/Forms-section-content-definition-4D-for-iOS.png)

About the Search field, a really nice Barcode search feature was added in the R6 version.

To activate it, just click on the magnifying glass and check the **Barcode Scanner** option!

![Barcode Search activation](assets/en/project-editor/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

This feature will allow:

* Filtering a list form by scanning a Barcode that contains a text value. Isso preenche a Barra de Ferramentas e abre o formulário detalhado só sobrar um valor depois de filtrar.
* Displaying specific list and detail forms by simply scanning a barcode which values are URL Schemes or Universal Links after [Deep linking](deep-linking) feature activation.

![Barcode Search app](assets/en/project-editor/text-Qrcode-barcode-search-4D-for-iOS..gif)


## Definição de Formulários Lista

![Detail form template selection](assets/en/project-editor/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

As for the List Form definition, select a template and add your fields onto your detail form.

There are several ways to add your fields in Detail forms:

* You can drag and drop fields anywhere into the SVG view to add it and display it just after the last added field or between any other field that is already displayed.

* Dê duplo-clique no campo. It will be added to the list.

* Right-click on one of the fields that are available in the Fields table at the left: this will display a menu to add all missing fields to your Detail forms.

![Detail form content definition](assets/en/project-editor/Forms-section-detail-form-content-definition-4D-for-iOS.png)

You can add as many fields for most of the detail forms available.

And at any moment, you can reorder your field by selecting it and dropping it at any place in your detail form.

> **DICAS**
> 
> * Quer mudar o modelo de seu formulário lista ou detalhle? 
> 
> * Tipos de campos são automaticamente reconhecidos, salvos e colocados nas áreas apropriadas para você (dependendo do modelo e tipo de campo) quando mudar de modelo.


## Galería

Você provavelmente notou que quando quiser selecionar um modela na seção formulário, um ícone "Mais" está disponível para os formulários lista e formulários detalhes desde 4D v18R3.

![More template button](assets/en/project-editor/Forms-more-button.png)

Simplesmente clique nesse ícone para mostrar a lista completa.

![Template picker more button](assets/en/project-editor/Forms-template-gallery.png)

Then, the only thing you need to do is selecting the template that suits your needs and 4D for iOS will handle all the installation process to help you work faster and more efficiently.

You can now start working on the template, as it is ready-to-use!

> **DICAS**
> 
> A galeria também está disponível [online](https://4d-for-ios.github.io/gallery/).


## Que fazer agora?

Next step: choose a template that suits your needs, and in case something is missing, a [tutorial](gallery-template-update.html) will help you making a **template update**.
