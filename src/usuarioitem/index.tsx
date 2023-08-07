import { Table } from 'reactstrap';
import { Usuario } from '../componentes/types/usuario'

type Props = {
    data: Usuario
}


function UsuarioItem({ data }: Props) {
    return (
        <div>
           <Table
                hover
                responsive
                size="">
                <tbody>
                  <tr className="table-light">
                    <th scope="row">
                      {data.nome}
                    </th>
                    <td>
                      {data.sobrenome}
                    </td>
                    <td>
                      {data.email}
                    </td>
                    <td>
                      {data.confemail}
                    </td>
                    <td>
                      {data.telum}
                    </td>
                  </tr>
                </tbody>
              </Table>
        </div>
    )
}

export default UsuarioItem;