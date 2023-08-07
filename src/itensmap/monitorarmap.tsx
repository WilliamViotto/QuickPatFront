import { Table } from 'reactstrap';
import { Usuario } from '../componentes/types/usuario'

type Props = {
  // Aqui devemos colocar o que deverá aparecer no monitorar
  data: Usuario
}


function MonitorarItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <th>O que quisermos que apareça </th>
          <th>O que quisermos que apareça </th>
          <th>O que quisermos que apareça </th>
          <th>O que quisermos que apareça </th>
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