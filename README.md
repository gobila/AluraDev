# AluraDev
Desafio proposto pela Alura para a criação de uma ferramenta de compartilhamento de codigo, semelhante ao https://carbon.now.sh/ com o adicional de uma pagina de comunidade, onde usarios possam vê o codigo de outras pessoas.

## Tecnologia usadas
Para fazer o screenshot foi usada a biblioteca Html2Canvas, você pode revisar o arquivo screenshot.js para escolher a div para gerar a imagem.<br><br>
Em conjunto foi usanda a biblioteca HighlightJs para dar a sintaxy do codigo criado em na pagina de editor. complementar ao Highlight na pasta Css/temas-hljs exitem dois estilos estilos que podem ser usados apenas importando o aquivo na pagina do editor apenas um estilo pode ser usado po vez. O arquivo Js/sintaxyFormat.js é usado para selecionar o container onde o Highlight é aplicado.
<br><br>
Esse projeto usa SASS como forma de criar os estilos por isso é recomendado, que se você quiser fazer alterações, usar o SASS e não o CSS diretamente.
Caso você use o VSCode e já tenha o SASS instaldo, na pasta .vscode existe um script para iniciar o SASS direto no terminal integrado, basta apenas usar o atalho ```Shift+Ctrl+B``` e selecionar SassCompiler.
<br><br>
O padrão CSS utilizado nesse projeto se basea no BEM. Veja abaixo:
````
.Bloco__Elemento_Subelemento-modificador
````
## O que ainda falta?

1. Criar a persitencia dos códigos para salvar os codigos e disponibilizar na área de comunidade;
2. Hospedar o projeto;
3. Criar/refatorar para uma versão SPA