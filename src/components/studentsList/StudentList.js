
function StudentList({data,index, updateHandler, deleteHandler}) {
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{data.S_name}</td>
        <td>{data.S_rollNo}</td>
        <td>{data.S_course}</td>
        <td>{data.S_batch}</td>
        <td>{data.S_age}</td>
        <td>{data.S_phone}</td>
        <td>{data.S_address}</td>
        <td>
          <button
            type="button"
            className="btn px-3 btn-primary"
            onClick={() => {
              updateHandler(data);
            }}
          >
            Update <i className="bi bi-pencil"></i>
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn px-3 btn-danger"
            onClick={() => {
              deleteHandler(data.S_Id);
            }}
          >
            Delete <i className="bi bi-trash-fill"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default StudentList;
