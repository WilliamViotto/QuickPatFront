import { Funcionarios } from '../componentes/types/funcionarios';

type Props = {
  data: Funcionarios
}


function FuncionarioItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <th>Nome Completo</th>
          <th>Cargo</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Departamento</th>
        </tr>
        <tr>
          <td>{data.nomecompleto}</td>
          <td>{data.cargo}</td>
          <td>{data.email}</td>
          <td>{data.telefoneum}</td>
          <td>{data.departamento}</td>
        </tr>
      </table>
    </div >
  )
}

export default FuncionarioItem;