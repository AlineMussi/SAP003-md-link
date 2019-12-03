const { mdLinks } = require('../index.js');

describe('mdLinks', () => {

  it('esta é uma funçao', () => {
    expect(typeof mdLinks).toBe("function");
  });

  it('deverá listar links sem validar', () => {
    return expect(mdLinks('./lib/__test__/teste.md')).resolves.toStrictEqual([
      {
        href: 'https://pt.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
      },
      {
        href: 'https://nodejs.org/',
        text: 'Node.js',
      },
      {
        href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
        text: 'md-links',
      },
    ]);
  });
  it ('caminho não encontrado', () => {
    return expect(mdLinks('')).rejects.toStrictEqual('archive not founded');    
  });
  it ('testando o erro', () => {
    return expect(mdLinks('<folder>')).rejects.toMatch('err');    
  }); 

});

