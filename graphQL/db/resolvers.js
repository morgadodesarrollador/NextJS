const Usuario = require('../models/usuarios');
//resolvers que satisface la función del Query
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
    },
    Mutation: {
        nuevoUsuario: async (_, { input }) => {
            //aplicamos destructuring
            console.log('xxxxx');
            const { email, password } = input;  
            const usuarioExiste = await Usuario.findOne({ email });
            if (usuarioExiste){
                throw new Error('El usuario ya está registrado')
            }
            try {
                //guardarlo en la BD
                const usuario = new Usuario(input);
                usuario.save();
                return usuario;
            } catch (error) {
                console.log(error);
                
            }
            // revisar si el usuario ya está registrado

            //Hashear su password 

            
        }
    }
}

module.exports = resolvers;