

const cursos = [
    {
        titulo:'curso 1', 
        tecnologia: 'tecnologia 1'
    },
    {
        titulo:'curso 2', 
        tecnologia: 'tecnologia 2'
    },
    {
        titulo:'curso 3', 
        tecnologia: 'tecnologia 3'
    }
];
//resolvers que satisface la función del Query
const resolvers = {
    Query: {
        obtenerCursos: () => cursos,
        obtenerTecnologia: () => cursos,
    }
}

module.exports = resolvers;