# Curso sobre arrays

    let livros = []

    const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

    getBuscarLivrosDaAPI()

    async function getBuscarLivrosDaAPI () {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        console.table(livros);
    }

Criamos uma let livros que nada mais é que um array vazio.

A const endpointDaAPI nada mais é que um objeto de itens que está naquele link.

Depois criamos uma função e pedimos através da const res para requisitar os dados da API (link).

Lembrando que utilizamos o async functions para utilizar o await, o await serve para dizer ao código que queremos que ele espere até o fetch terminar as promisses e com isso jogamos no array livros os dados também com o await, pois demora um pouco para esse processo acontecer e depois usamos console.table para mostrar os dados através de uma tabela, se utilizar o console,log ele vai retornar um array normal no console.

