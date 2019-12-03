# Projeto Markdown 📍

Biblioteca que lê e analisa arquivos no formato Markdown(.md) para verificar os links que eles contêm.
[Aline](http://aline.com.br)

# Instalação 🛠

  Para usar esta biblioteca como requisito, você deve ter instalado os NodeJs anteriormente no seu computador.
  Em seguida, você deve executar o seguinte comando no terminal:
 
  `npm install https://github.com/AlineMussi/SAP003-md-link`

# CLI (Interface da Linha de Comandos) 📝

  Esse aplicativo pode ser executado através do terminal da seguinte maneira:
 
  `md-links <path-to-file>`
  `$ md-links ./some/example.md`

# Valor de retorno
  Retorna a promessa com uma matriz de objetos, em que cada objeto representa um link e contém as seguintes propriedades :
  href: URL encontrado.
  texto: texto que apareceu dentro do link.

Autor: Aline Mussi Leite Oliveira