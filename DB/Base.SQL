-- Tabela de Clientes

/*
CREATE TABLE Clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    cidade VARCHAR(50),
    estado CHAR(2), -- Ex: 'SP', 'RJ'
    data_cadastro DATE
);

-- Tabela de Produtos
CREATE TABLE Produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT DEFAULT 0
);

-- Tabela de Pedidos (Cabeçalho)
CREATE TABLE Pedidos (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT, 
    id_cliente INT,
    data_pedido DATETIME,
    status VARCHAR(20) DEFAULT 'Pendente', 
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente) 
);

-- Tabela de Itens do Pedido (Detalhes)

CREATE TABLE ItensPedido (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT,
    id_produto INT,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL, 
    FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido), 
    FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto)
);
*/
-- Inserindo Clientes
/*
INSERT INTO Clientes (nome, email, cidade, estado, data_cadastro) VALUES
('Ana Silva', 'ana.silva@email.com', 'São Paulo', 'SP', '2024-01-15'),
('Bruno Costa', 'bruno.costa@email.com', 'Rio de Janeiro', 'RJ', '2024-02-10'),
('Carlos Dias', 'carlos.dias@email.com', 'Belo Horizonte', 'MG', '2024-03-05'),
('Daniela Lima', 'daniela.lima@email.com', 'São Paulo', 'SP', '2024-04-20'),
('Eduardo Alves', 'eduardo.alves@email.com', 'Salvador', 'BA', '2024-05-01');

-- Inserindo Produtos
INSERT INTO Produtos (nome, descricao, preco, estoque) VALUES
('Laptop UltraSlim', 'Notebook leve e potente para trabalho', 4500.00, 15),
('Teclado Mecânico RGB', 'Teclado para gamers com iluminação customizável', 350.00, 30),
('Mouse Sem Fio Ergonômico', 'Mouse confortável para longas horas de uso', 120.00, 50),
('Monitor Curvo 27"', 'Monitor com tela curva para imersão total', 1800.00, 10),
('Webcam Full HD', 'Webcam com alta resolução para videoconferências', 250.00, 25);

-- Inserindo Pedidos
-- (Assumindo que os IDs de cliente são 1, 2, 3, 4, 5 respectivamente)
INSERT INTO Pedidos (id_cliente, data_pedido, status) VALUES
(1, '2024-05-10 09:30:00', 'Enviado'),       
(3, '2024-05-11 14:00:00', 'Entregue'),     
(1, '2024-05-12 11:15:00', 'Pendente'),      
(4, '2024-05-15 16:45:00', 'Pendente'),     
(2, '2024-05-20 10:00:00', 'Cancelado');     

-- Inserindo Itens dos Pedidos

-- Pedido 1 (Ana)
INSERT INTO ItensPedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(1, 1, 1, 4500.00); 

-- Pedido 2 (Carlos)
INSERT INTO ItensPedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(2, 3, 1, 120.00), 
(2, 5, 1, 250.00);

-- Pedido 3 (Ana)
INSERT INTO ItensPedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(3, 2, 1, 350.00); 

-- Pedido 4 (Daniela)
INSERT INTO ItensPedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(4, 4, 1, 1800.00), 
(4, 3, 2, 120.00); 

-- Pedido 5 (Bruno) 
INSERT INTO ItensPedido (id_pedido, id_produto, quantidade, preco_unitario) VALUES
(5, 2, 1, 350.00);

*/