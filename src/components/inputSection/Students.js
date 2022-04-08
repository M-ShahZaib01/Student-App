import { useState } from "react";
import { S_Data } from "../studentData/S_Data";
import StudentList from "../studentsList/StudentList";
import { v4 as uuidv4 } from "uuid";


function Students() {
  const [StudentsData, setStudentsData] = useState(S_Data);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [courseName, setCourseName] = useState("");
  const [batchNo, setBatchNo] = useState("");
  // const [StudentFormInfo, setStudentFormInfo] = useState(studentsInfo);
  const [flag, setFlag] = useState(false);
  const [studentToBeUpdatedID, setStudentToBeUpdatedID] = useState(0);

  const ctaHandler = () => {
    if (
      name !== "" ||
      roll !== "" ||
      phone !== "" ||
      courseName !== "" ||
      address !== "" ||
      age !== "" ||
      batchNo !== ""
    ) {
      let studentFormData = {
        S_Id: uuidv4(),
        S_name: name,
        S_rollNo: roll,
        S_phone: phone,
        S_course: courseName,
        S_batch: batchNo,
        S_age: age,
        S_address: address,
      };

      // adding new student to existing students
      setStudentsData([...StudentsData, studentFormData]);

      //Clear all inputs
      setName("");
      setRoll("");
      setAge("");
      setAddress("");
      setPhone("");
      setCourseName("");
      setBatchNo("");
    } else {
      alert("All fields are required, please fill out all inputs!");
    }
  };

  //Delete Button logics
  const deleteHandler = (S_id) => {
    // console.log("Student id ", S_id);

    let remainingStudents = StudentsData.filter((studentItem) => {
      if (studentItem.S_Id !== S_id) {
        return studentItem;
      }
    });
    setStudentsData(remainingStudents);
    console.log("Remaining Students", remainingStudents);
  };

  //Update Button logics
  const updateHandler = (studentItem) => {
    console.log("Student need to be update", studentItem);
    setStudentToBeUpdatedID(studentItem.S_Id);
    setName(studentItem.S_name);
    setRoll(studentItem.S_rollNo);
    setAge(studentItem.S_age);
    setAddress(studentItem.S_address);
    setPhone(studentItem.S_phone);
    setCourseName(studentItem.S_course);
    setBatchNo(studentItem.S_batch);
    setFlag(true);
  };

  const ctaUpdateHandler = () => {
    if (
      name !== "" ||
      roll !== "" ||
      phone !== "" ||
      courseName !== "" ||
      address !== "" ||
      age !== "" ||
      batchNo !== ""
    ) {
      let updatingStudent = {
        S_Id: uuidv4(),
        S_name: name,
        S_rollNo: roll,
        S_phone: phone,
        S_course: courseName,
        S_batch: batchNo,
        S_age: age,
        S_address: address,
      };

      console.log("Updating Student", updatingStudent);

      let updateStudent = StudentsData.map((studentItem) => {
        if (studentToBeUpdatedID === studentItem.S_Id) {
          return updatingStudent;
        } else {
          return studentItem;
        }
      });

      setStudentsData([...updateStudent]);

      //Clear all inputs
      setName("");
      setRoll("");
      setAge("");
      setAddress("");
      setPhone("");
      setCourseName("");
      setBatchNo("");
      setFlag(false);
      // console.log(StudentFormInfo);
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      {/* //inputs Section */}
      <div>
        <h3 className="text-center">Add New Student</h3>

        <div className="row g-3 w-75 m-auto p-4">
          <div className="col-md-6">
            <label for="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Jhon Smith"
              id="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label for="Roll#" className="form-label">
              Roll no.
            </label>
            <input
              type="text"
              className="form-control"
              id="Roll"
              value={roll}
              placeholder="e.g. 1234"
              onChange={(e) => {
                setRoll(e.target.value);
              }}
            />
          </div>
          <div className="col-12">
            <label for="Address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="Address"
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label for="Phone#" className="form-label">
              Phone no.
            </label>
            <input
              type="number"
              placeholder="+92XXXXXXXXXX"
              value={phone}
              className="form-control"
              id="Phone#"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label for="Course" className="form-label">
              Course Name
            </label>
            <select
              value={courseName}
              id="Course"
              className="form-select"
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            >
              <option value="" selected disabled>
                Choose...
              </option>
              <option>Web & Mobile App Development</option>
              <option>API Development</option>
              <option>Machine Learning</option>
              <option>Artificial Intelligence</option>
              <option>Cloud Computing</option>
              <option>IOT</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="Batch#" className="form-label">
              Batch no.
            </label>
            <select
              value={batchNo}
              id="Batch#"
              className="form-select"
              onChange={(e) => {
                setBatchNo(e.target.value);
              }}
            >
              <option value="" selected disabled>
                Choose...
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="col-md-4">
            <label for="Age" className="form-label">
              Age
            </label>
            <input
              type="number"
              value={age}
              placeholder="Years"
              className="form-control"
              id="Age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>

          <div className="col-12">
            {flag ? (
              <button
                type="submit"
                className="btn btn-success"
                onClick={ctaUpdateHandler}
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success"
                onClick={ctaHandler}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      <hr />
      {/* //List of Students */}
      <div>
        <h3 className="text-center ">List Of Students</h3>

        <table className="table table-striped table-hover tableList">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Roll no.</th>
              <th scope="col">Course Name</th>
              <th scope="col">Batch no.</th>
              <th scope="col">Age (Year)</th>
              <th scope="col">Phone no.</th>
              <th scope="col">Address</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {StudentsData.map((studentItem,i) => {
              return (
                <StudentList
                  index={i}
                  data={studentItem}
                  deleteHandler={deleteHandler}
                  updateHandler={updateHandler}
                />
              );
            })};
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Students;
