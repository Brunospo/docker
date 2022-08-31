# Conexão externa vs host vs entre containers

Para realizar a conexão externa, no docker run não passei nenhum comando adicional, apenas o:

```bash
docker run -d -p 3000:3000 --rm --name [name] [img]
```

Já para utilizar a conexão com o host, mantive o 'localhost' lá no host do Postgres e usei o seguinte comando:

```bash
docker run -d -p 3000:3000 --rm --name [name] --network host [img]
```

> OBS: **name** é o nome do container e **img** é o nome ou id da imagem.

## Links para ajudar a fazer isso com o Postgres

<https://stackoverflow.com/questions/31249112/allow-docker-container-to-connect-to-a-local-host-postgres-database>

<https://stackoverflow.com/questions/24319662/from-inside-of-a-docker-container-how-do-i-connect-to-the-localhost-of-the-mach>

## Para criar volumes com o postgres, devemos utilizar o seguinte diretório

```bash
-v "nome_do_volume:/var/lib/postgresql/data"
```

E uma dica, devemos criar o volume antes de inserir ele nesse comando.

## Conectando um container ao outro

Para fazer isso, eles devem estar na mesma rede e o host da conexão com o banco de dados, por exemplo, será o nome do container do postgres.
