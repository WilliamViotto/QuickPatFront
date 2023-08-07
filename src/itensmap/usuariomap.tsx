import { Table } from 'reactstrap';
import { Usuario } from '../componentes/types/usuario'

type Props = {
  data: Usuario
}


function UsuarioItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Login</th>
          <th>Senha</th>
        </tr>
        <tr>
          <td>{data.nome} </td>
          <td>{data.email}</td>
          <td>{data.login}</td>
          <td>{data.senha}</td>
        </tr>
      </table>
    </div>
  )
}

export default UsuarioItem;