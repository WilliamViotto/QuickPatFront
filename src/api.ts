


export const api = {

    InserirUsuarios: async (nome: string, sobrenome: string, email: string, confemail: string, telum: string, teldois: string, login: string, senha: string) => {
        let response = await fetch("http://localhost:3010/usuarios/",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        nome: nome,
                        sobrenome: sobrenome,
                        email: email,
                        confirmaemail: confemail,
                        telefoneum: telum,
                        telefonedois: teldois,
                        login: login,
                        senha: senha,
                    }),
                headers: {
                    'Content-type': ' application/json'
                }
            }
        );
        let json = await response.json();
        console.log(json);

        return json;
    },

    InserirFuncionarios: async (nomecompleto: string, cargo: string, email: string, confemail: string, telefoneum: string, departamento: string) => {
        let response = await fetch("http://localhost:3010/funcionarios/",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        nomecompleto: nomecompleto,
                        cargo: cargo,
                        email: email,
                        confirmaemail: confemail,
                        telefoneum: telefoneum,
                        departamento: departamento
                    }),
                headers: {
                    'Content-type': ' application/json'
                }
            }
        );
        let json = await response.json();
        console.log(json);

        return json;
    },

    InserirPatrimonios: async (nome: string, modelo: string, tipo: string, grupo: string, valor: string, descricao: string) => {
        let response = await fetch("http://localhost:3010/patrimonios/",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        nome: nome,
                        modelo: modelo,
                        tipo: tipo,
                        grupo: grupo,
                        valor: valor,
                        descricao: descricao
                    }),
                headers: {
                    'Content-type': ' application/json'
                }
            }
        );
        let json = await response.json();
        console.log(json);

        return json;
    },

    AlterarPatrimonio: async () => {

    },

    CarregarUsuarioUnico: async (param: string) => {
        let response = await fetch("http://localhost:3010/usuarios/" + param);
        let json = await response.json();
        return json;
    },

    CarregarTodosUsuarios: async () => {
        let response = await fetch("http://localhost:3010/usuarios/")
        let json = await response.json();
        return json;
    },

    Logar: async (username: string, password: string) => {
        {
            let response = await fetch("http://localhost:3010/auth/login",
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({ username, password }),
                    headers: {
                        'Content-type': ' application/json; charset=utf-8'
                    }
                }
            );

            let json = await response.json();

            console.log(json);
            return json;
        }
    },


}
