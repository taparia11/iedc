export default function Ptablecard({ props }) {
  return (
    <>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>
          {props.desc}
        </td>
        <td>
            {props.mode}
        </td>
        <td>{props.stage}
        </td>
        <td>
          <a className="btn btn-success" data-toggle="modal" href={`#Modal${props.id}`}>
            Gallery
          </a>
        </td>
      </tr>
    </>
  );
}
