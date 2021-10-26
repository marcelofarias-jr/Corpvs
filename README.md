Descrição:
O banco da aplicação foi feito em MySQL dentro do XAMP com os dados fornecidos.

A rota da API foi criada no Laravel com PHP utilizando uma query para retornar todos os registros da tabela com um JSON.

O mapa foi criado utilizando componentes do https://react-leaflet.js.org/. Tive muitas dificildades com a documentação e erros que precisaram ser tratados, a fonte de informações foi prioritariamente no Stack overflow. Ao tentar puxar os dados da API tive um erro de CORS que não consegui contornar, tive que desativar o CORS do navegador. 
![image](https://user-images.githubusercontent.com/79995091/138920457-30549403-b2a5-44d3-b88d-79127187de29.png)
Notei também que apesar de ter testado a rota com o Postman a aplicação não estava puxando os dados da API mas sim direto do banco, o que gerava um array com as informações que ao tentar extrair os dados sempre retornavam como undefined. Logo não consegui tratar e utilizar os dados retornados.
![image](https://user-images.githubusercontent.com/79995091/138920835-509d7792-9004-4b37-8361-6483c0c68f20.png)

O marcador gerado foi adiconado manualmente.
![image](https://user-images.githubusercontent.com/79995091/138920284-a524c9a8-44b5-4579-84be-14568c55d25a.png)

No diretório estão os dados do ReactJS, da pasta da API eu adicionei apenas o arquivo API.php onde tem a rota criada.
