import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import { Usuario } from '../componentes/types/usuario';
import { Button, Input, Table } from 'reactstrap';
import UsuarioItem from '../itensmap/usuariomap';
import MonitorarItem from '../itensmap/monitorarmap';


function Monitorar() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const [loading, setLoading] = useState(false);


  const carregarUsuarios = async () => {

    setLoading(true);
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/")
      let json = await response.json();

      const dataArray = Array.isArray(json) ? json : [json];


      setLoading(false);
      setUsuarios(dataArray);

    } catch (e) {
      alert('Falha ao carregar os históricos de movimentação')
      setLoading(false);
      console.error(e);
    }
  }

  return (
    <div>
      <Cabecalho
        cabTexto1={"Início"}
        cabTexto2={"Cad. Usuário"}
        cabTexto3={"Cad. Funcionário"}
        cabTexto4={"Cad. Patrimônio"}
        cabTexto5={"Monitorar"}
        cabTexto6={"Sair"}
      />
      <div className='divcima'>

        <div className='divcima2'>
          <Button color="info" onClick={carregarUsuarios}> Lista de Funcionários </Button>
          <br />
        </div>

        <div className='divcima1'>
          <label>Nome do Patrimônio: </label>
          <Input type='text'></Input>
          <label>Nome do Funcionário: </label>
          <Input type='text'></Input>
        </div>

        <div className='divcima2'>
          <Button color="success"> Movimentar </Button>
        </div>

        <br />
      </div>



      <div className='telamonitorar'>

        {!loading &&
          <div>
            {usuarios.map((item, index) => (
              <MonitorarItem data={item} />
            ))}
          </div>
        }
      </div>
    </div>

  )
}

export default Monitorar;