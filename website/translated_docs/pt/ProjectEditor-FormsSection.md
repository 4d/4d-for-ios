---
id: forms
title: Formulários
---

A seção Formulários lhe permite selecioanr os modelos de formulário Lista e de formulários detalhados para cada tabela.

4D for iOS oferece vários modelos com efeitos de transição personalizados para gerar aplicações iOS novas e modernas.

Aqui está o detalhamento da tela, de cima para baixo:

* **Os formulários lista e os formulários detalhados:** permitem mudar entre os formulários Lista e os formulários detalhados para cada tabela.
* **Tabelas publicadas:** Exibe todas as tabelas publicadas na seção Estrutura.
* **Formulários Disponíveis:** Permite trocar entre a seleção de modelos e a definição de conteúdo.

![List form template selection](assets/en/project-editor/Forms-section-templates-selection-4D-for-iOS.png)

## Definição de formulários Lista

Os modelos simples e vazios são usados de forma pré-determinada para os formulários Lista e os formulários de detalhados de uma aplicação.

Selecione um modelo para sua primeira tabela. Quando tiver feito isso, aparece a tela de definição de conteúdo. Depois pode arrastar e soltar os campos da lista diretamente no modelo mostrado à direita. A maioria dos formulários Lista incluem campos opcionais Pesquisa e Seção.

![List form content definition](assets/en/project-editor/Forms-section-content-definition-4D-for-iOS.png)

A versão R6 adiciona o campo Pesquisa adiciona uma funcionalidade com a pesquisa de Barra de Código.

Para ativar a propriedade basta clicar na lupa e marcar a opção **Barcode Scanner**  !

![Barcode Search activation](assets/en/project-editor/project-editor-Qrcode-barcode-search-4D-for-iOS.gif)

Essa propriedade permite duas coisas:

* Filtrar um formulário lista escaneando um código de barras que contenha um valor texto. Isso preenche a Barra de Ferramentas e abre o formulário detalhado só sobrar um valor depois de filtrar.
* Mostrar formulários específicos listados e detalhados com só escanear um código de barras cujos valores sejam Esquemas URL ou Links Universais depois da ativação da funcionalidade [Deep linking](deep-linking).

![Barcode Search app](assets/en/project-editor/text-Qrcode-barcode-search-4D-for-iOS..gif)


## Definição de Formulários Lista

![Detail form template selection](assets/en/project-editor/Forms-section-detail-form-templates-selection-4D-for-iOS.png)

Assim como com a definição de Formulário Lista, selecione um modelo e adicione seus campos no formulário detalhe:

Você tem várias maneiras de adicionar seus campos nos formulários Detalhes:

* Pode arrastar e soltar os campos em qualquer parte na vista SVG para adicionar e exibir logo depois que o último campo tenha sido adicionado ou entre qualquer outros campos que já são exibidos.

* Dê duplo-clique no campo. Seu campo será adicionado ao final da lista.

* Dar um clique direito em um dos campos que está disponível na tabela Campos na esquerda: isso vai exibir um menu que vai permitir que adicione todos os campos faltantes em seu formulário Detalhe.

![Detail form content definition](assets/en/project-editor/Forms-section-detail-form-content-definition-4D-for-iOS.png)

Pode adicionar quantos campos quiser para a maior parte dos formulários detalhados disponíveis.

E pode reordenar a qualquer momento seu campo selecionando-o e soltando em qualquer lugar no seu formulário detalhado.

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

Depois, a única coisa que tem que fazer é selecionar o modelo adequado às suas necessidades e 4D for iOS vai manejar o processo de instalação para que possa trabalhar mais rápido e com mais eficiência.

Portanto pode começar a trabalhar diretamente no modelo, já que é pronto para usar.

> **DICAS**
> 
> A galeria também está disponível [online](https://4d-for-ios.github.io/gallery/).


## Que fazer agora?

No próximo passo, pode escolher um modelo adequado às suas necessidades, mas caso algo esteja faltando um[tutorial](gallery-template-update.html) vai ajudar a criar **uma atualização de modelo**.
