export default function Purchasecommitee({ props }) {
    return (
      <><tr>
             
                <th scope="row">{props.id}</th>
                <td>{props.name}</td>
                <td>{props.title}</td>
                <td>{props.office}</td>
              
              </tr>  
      </>
    );
  }

