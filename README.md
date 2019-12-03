# Projeto de links de remarcação 📍

Biblioteca que lê e analisa arquivos no formato de remarcação (.md) para verificar os links que eles contêm.

# Instalação 🛠
  Para usar esta biblioteca como requisito, você deve ter instalado os NodeJs anteriormente no seu computador.
  Em seguida, você deve executar o seguinte comando no terminal:
 
  `npm install https://github.com/jotaparra/SCL007-md-links`

# CLI (Interface da Linha de Comandos) 📝

  Esse aplicativo pode ser executado através do terminal da seguinte maneira:
 
  `md-links <path-to-file> [opção]`
  `$ md-links ./some/example.md`

# Valor de retorno
  Retorna a promessa com uma matriz de objetos, em que cada objeto representa um link e contém as seguintes propriedades :
  href: URL encontrado.
  texto: texto que apareceu dentro do link.
  file: caminho do arquivo em que o link foi encontrado.

# Opções
--validate
  Se passarmos a opção --validatefará, o módulouma solicitação HTTP para descobrir se o link funciona ou não. Se o link resultar em um redirecionamento para uma URL que responda ok, consideraremos o link como ok.

# Por exemplo:
`$ md-links ./some/example.md --validate`
`./some/example.md http://algo.com/2/3/ ok 200 Link para algo`
`./some/example.md https: //otra-cosa.net/algun-doc.html falha 404 em alguns documentos`
`./some/example.md http://google.com/ ok 301 Google`
