import "./App.css";
import { Form } from "./Form.js"

export const List = ({information}) => {
    return (
        <>
        <div className="list-container">
            {information.map((data, key) => {
                return (
                    <div key={key}>
                        <Preview
                        key={key}
                        id={data.id}
                        isActive={data.isActive}
                        picture={data.picture}
                        age={data.age}
                        name={data.name}
                        email={data.email}
                        address={data.address}
                        about={data.about}
                        registered={data.registered}
                        />
                        <Form />
                    </div>
                )
            })}
        </div>
        
        </>
    )
}

export const Preview = ({ id, isActive, picture, name, email, address, about, registered, age }) => {
    if (!name) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
                <h5>{id}</h5>
            </td>
            <td>
                <h5>{isActive}</h5>
            </td>
            <td>
                <h4>{name}</h4>
            </td>
            <td>
                <img src={picture} />
            </td>
            <td>
                <p>{age}</p>
            </td>
            <td>
                <a href={email}>{email}</a>
            </td>
            <td>
                <p>{address}</p>
            </td>
            <td>
                <p>{about}</p>
            </td>
            <td>
                <p>{registered}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };