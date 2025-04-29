#SELECT * FROM clientes;


SELECT 
	c.nome,
	c.email,
	p.data_pedido,
	p.`status`,
	prod.nome,
	FROM clientes 
	AS c 
	INNER JOIN pedidos AS p ON c.id_cliente = p.id_cliente
	INNER JOIN itenspedido AS ip ON ip.id_pedido = p.id_pedido
	INNER JOIN produtos AS prod ON ip.id_produto = prod.id_produto;

#SELECT * FROM clientes WHERE cidade = "São Paulo" OR estado = "SP";

#SELECT * FROM produtos WHERE preco > 500;

#SELECT * FROM produtos,itenspedido