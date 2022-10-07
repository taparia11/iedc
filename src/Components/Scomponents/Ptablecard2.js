export default function Ptablecard({ props }) {
    return (
      <>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.proj_code}</td>
          <td>{props.name}</td>
          <td>
          <span>
            {props.brief1}
          </span>
          </td>
          <td>
            <a
              className="btn btn-success"
              data-toggle="modal"
              href={`#Modal${props.id}`}
            >
              Gallery
            </a>
          </td>
        </tr>
      </>
    );
  }
  