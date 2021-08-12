---
id: one-to-many-relations-title-definition
title: Um para Muitos - Definição de Título
---

### Definir um título para suas vistas de destino

Para ter controle da vista que terá em seu app, 4D for iOS permite que defina um Título personalizado.

Neste tutorial, vamos usar o projeto abaixo:

<div markdown="1" style="text-align: center; margin-top: 20px; margin-bottom: 20px">
<a class="button"
href="https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip">PROJETO STARTER de DEFINIÇAO DE TITULO</a>
</div>

Agora vá diretamente para o menu Open > Mobile project... select *Time Keeper* e daí vá para seção **Labels & Icons**.

A partir daqui abra a aba relações para definir *tasks* no título da relação e entre a linha seguinte na coluna **Titles**: `%Name% tasks`

![Labels & Icons relation title](assets/en/relations/labels-icons-title-definition.png)

Isso vai permitir que exiba **o valor do nome do Empregado** na vista destino dependendo do formulário detalhado Funcionários em que estava previamente.

![Labels & Icons relation title](assets/en/relations/relations-title-definition.png)

É uma excelente maneira de manter controle sobre a vista da qual veio!

Agora veremos como criar e adicionar seu próprio botão Relation no próximo tutorial!
