import { Monitorar } from '../componentes/types/monitorar';

type Props = {
  // Aqui devemos colocar o que deverá aparecer no monitorar
  data: Monitorar
}


function MonitorarItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <th>ID Funcionário </th>
          <th>Nome Funcionário </th>
          <th>ID Patrimônio </th>
          <th>Nome Patrimônio </th>
        </tr>
        <tr>
          <td>{data.nome} </td>
          <td>{ }</td>
          <td>{ }</td>
          <td>{ }</td>
        </tr>
      </table>
    </div>
  )
}

export default MonitorarItem;