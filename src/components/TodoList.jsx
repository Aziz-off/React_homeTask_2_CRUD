import React, { useState } from "react";

const TodoList = () => {
  const initialValues = {
    userName: "",
    userPosition: "",
    userSalary: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [editData, setEditData] = useState({
	isEdit: false,
	userIndex: null
  });

  const handleRemoveClick = (index) => {
	setUsers(users.filter((user, userId) => userId !== index))
  };

  const isFilledFields =
    userData.userName && userData.userPosition && userData.userSalary;

  const handelSubmitUser = (e) => {
    e.preventDefault();

    if (isFilledFields) {
		if (editData.isEdit) {
			const editedData = users;
			editedData.splice(editData.userIndex, 1, userData);

			setUsers(editedData);

			setEditData({
				isEdit: false,
				userIndex: null
			});
		} else {
			setUsers((prevState) => [...prevState, userData]);
		}
      
      setUserData(initialValues);
    }
  };

  const handleCleanClick = () => setUserData(initialValues);

  const handleEditClick = (data, index) => {
	setUserData(data);
	setEditData({
		isEdit: true,
		userIndex: index
	});
  };

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <table>
            <th>#</th>
            <th>User Name</th>
            <th>User Position</th>
            <th>User Salary</th>
            <th>Actions</th>

            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.userPosition}</td>
                  <td>{user.userSalary}</td>
                  <td>
                    <div>
                      <button onClick={() => handleEditClick(user, index)} className="edit-action">EDIT</button>
                      <button className="remove-action" onClick={() => {handleRemoveClick(index)}}>Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <form onSubmit={handelSubmitUser} onReset={handleCleanClick}>
            <input
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userName: e.target.value,
                }))
              }
              type="text"
              placeholder="Write your name"
              value={userData.userName}
            />
            <input
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userPosition: e.target.value,
                }))
              }
              type="text"
              placeholder="Write your position"
              value={userData.userPosition}
            />
            <input
              onChange={(e) =>
                setUserData((prevState) => ({
                  ...prevState,
                  userSalary: e.target.value,
                }))
              }
              type="text"
              placeholder="Write your salary"
              value={userData.userSalary}
            />

            <div className="buttons-wrapper">
              <button type="reset">Clean</button>
              <button disabled={!isFilledFields} type="submit">{editData.isEdit ? 'EDIT' : 'ADD'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
