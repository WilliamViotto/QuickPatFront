import { Patrimonio } from '../componentes/types/patrimonios';


type Props = {
  data: Patrimonio
}


function PatrimonioItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <th>Nome</th>
          <th>Modelo</th>
          <th>Tipo</th>
          <th>Grupo</th>
        </tr>
        <tr>
          <td>{data.nome}</td>
          <td>{data.modelo}</td>
          <td>{data.tipo}</td>
          <td>{data.grupo}</td>
        </tr>
      </table>
    </div>
  )
}

export default PatrimonioItem;