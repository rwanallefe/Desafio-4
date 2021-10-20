Funcionalidade: Cadastro
 A fim de realizar cadastro no site www.enjoei.com.br
 Como um email e senha
 Eu quero validar o email e senha
 De modo a realizar o cadastro com sucesso

   Contexto: Criar conta com e-mail inválido e Testar checkbox da área de trabalho
  | E-mail                         | Senha         | Nome         |
  |  aaaaaaaaaaj@jjjjkkkkft.com    |   875812367   | Luna Berreto |

   Cenario: Criar conta com e-mail inválido
   Dado que entro no site e vou para o campo criar conta
   Quando é inserido um e-mail inválido 
   Entao consigo criar a conta com sucesso

   Cenario: Testar checkbox da área de cadastro
   Dado que entro no site e vou para o campo criar conta
   Quando é inserido um e-mail e senha sem marcar o checkbox de "aceitar receber novidades" ou "de acordo com as políticas de privacidade"
   Entao a criação do cadastro não é concluída

   Contexto: Criar conta com CEP inválido e e-mail válido
    | E-mail                         | Senha        | Nome         | CEP       |
    | jfnnbhbhskykyuxz@gmail.com     |  875812367   | Luna Barreto | 00000-000 |

   Cenario: Criar conta com CEP inválido e e-mail válido
    Dado que entro no site e vou para o campo criar conta
     Quando é inserido um e-mail válido e o CEP inválido
     Entao consigo criar a conta com sucesso

   Contexto: Criar conta com CEP e e-mail válidos
    | E-mail                 | Senha        | Nome           | CEP       |
    | nazia6936gmail.com     |  875812367   | Tayná Monteiro | 40231-375 |

  Cenario: Criar conta com CEP e e-mail válidos
    Dado que entro no site e vou para o campo criar conta
     Quando é inserido um e-mail e CEP válidos
     Entao consigo criar a conta com sucesso 
    

Funcionalidade: Busca
 A fim de realizar busca
 Como a ferramenta de busca do site www.enjoei.com.br
 Eu quero buscar produtos
 De modo a realizar a busca dos produtos selecionados

 Contexto: Busca com filtros
  | Produto    | Filtro 01 | Filtro 02 - Categoria | Filtro 03 - Preço   | Filtro 04 - Novidades |
  |  livro     | etc&tal   | Outros                | R$ 30,00 a R$ 70,00 | Últimas 24h           |

  Cenario: Busca com Filtors
   Dado que entro no site e busco por "livro"
    Quando seleciono os filtros
    Entao apenas os produtos relacionados aparecem na pesquisa de produto

  Contexto: Yeyezados
   | Produto  | E-mail                         | Senha      |
   |  Tenis   |   iasminvictoria@hotmail.com   | iasmin0411 |

   Cenario: Yeyezados
    Dado estou fazendo uma busca
     Quando seleciono um produto para yeyezar
     Entao o produto aparece na página dos yeyezados do perfil logado
   

Funcionalidade: Compra
 A fim de realizar compras no site www.enjoei.com.br
 Como um usuário logado
 Eu quero fazer compras
 De modo a concluir a compra com sucesso
 
    Contexto: Primeira compra
  | E-mail                      | Senha                  | Produto |
  | teste123.qa@hotmail.com     | grupo04primeiracompra  | Livros  |

   Cenario: Primeira compra
   Dado quero realizar a primeira compra com um cadastro
   Quando escolho um produto, confirmo o login e forma de pagamento
   Entao realizo a primeira compra com sucesso
 
    Contexto: Compra com cadastro válido
  | E-mail                       | Senha       | Produto |
  |   iasbarreto04@gmail.com     | iasmin0411  | Livros  |

  Cenario: Compra com cadastro válido
   Dado que pesquiso o produto 
    Quando confirmo o login e escolho a forma de pagamento
    Entao realizo a compra com sucesso
   

 Funcionalidade: Exclusão de conta
 A fim de excluir uma conta no site www.enjoei.com.br
 Como uma conta ativa no site
 Eu quero descadastrar 
 De modo a encerrrar o registro no site

 Contexto: Exclusão de conta
  | E-mail                   | Senha      | 
  | rwan_muniz@hotmail.com   | 123456789  | 

  Cenario: Exclusão de conta
   Dado quero exluir a conta no site
    Quando acesso a conta e escolho a opção de deletar conta
    Entao minha conta é deletada com sucesso
   

