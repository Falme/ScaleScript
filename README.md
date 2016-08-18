# ScaleScript

Arquivo em Javascript para escalonar um projeto feito em HTML.

# Instalação

-Adicione o arquivo ScaleScript.js no diretório do projeto

-Chame o ScaleScript.js no arquivo principal de HTML

Ex : <script type="text/javascript" src="/dir/to/folder/ScaleScript.js"></script>

-Chame o Init do ScaleScript : 

Ex : resizeInit(1024,768, false,false);

-Profit


# resizeInit()

A função resizeInit() recebem 4 argumentos :

- Width : A largura padrão do seu projeto

- Height : A Altura padrão do seu projeto

- Limitless : Se ele vai travar no tamanho original ou irá se expandir infinitamente

- Moodle : Caso este seja utilizado em uma plataforma Moodle

no final, esta função seria estruturada desta forma : 

resizeInit(Width,Height, Limitless,Moodle);