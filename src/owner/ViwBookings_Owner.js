import "../admin/viewuser.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewBookingsAdmin() {
  const [groundList, setGroundList] = useState([]);
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
    getAllGrounds();
  }, []);

  const getAllGrounds = async () => {
    const user = { ownerId: localStorage.getItem("userid") };
    const response = await axios.post(
      "http://192.168.0.5:8081/getBookingsByOwner",
      user
    );
    setGroundList(response.data);
    console.log(response.data);
  };

  //   const myfun = async (userEmail) => {
  //     console.log(userEmail);
  //     const user = { email: userEmail };
  //     const res = await axios.post("http://localhost:8081/getUserByEmail", user);
  //     console.log(res.data);
  //     if (res.data.status === "Active") {
  //       const user1 = {
  //         user_id: res.data.user_id,
  //         name: res.data.name,
  //         email: res.data.email,
  //         mobile: res.data.mobile,
  //         city: res.data.city,
  //         password: res.data.password,
  //         roleId: res.data.roleId,
  //         status: "InActive",
  //       };

  //   const user2 = await axios.post("http://localhost:8081/updateUser", user1);
  // } else {
  //   const user1 = {
  //     user_id: res.data.user_id,
  //     name: res.data.name,
  //     email: res.data.email,
  //     mobile: res.data.mobile,
  //     city: res.data.city,
  //     password: res.data.password,
  //     roleId: res.data.roleId,
  //     status: "Active",
  //   };
  //   const user2 = await axios.post("http://localhost:8081/updateUser", user1);
  // }

  //     getAllGrounds();
  //   };

  return (
    <body class="view ">
      <div className="container col-12 viewuser">
        <h1 className="text-center text-light">Bookings</h1>
        <table className="table table-striped">
          <thead>
            <tr className="bg-success text-light">
              <td>User Name</td>
              <td>Ground Name</td>
              <td>Date</td>
              <td>Time Slot</td>
              <td>Amount</td>
              <td>Mobile</td>
            </tr>
          </thead>
          <tbody>
            {groundList.map((user) => {
              return (
                <tr className="text-light">
                  <td>{user.user.name}</td>
                  <td>{user.groundDetails.ground_name}</td>
                  <td>{user.date}</td>
                  <td>{user.timeSlots.time_slot}</td>
                  <td>{user.amount}</td>
                  <td>{user.user.mobile}</td>
                </tr>
              );
            })}
            ;
          </tbody>
        </table>
      </div>
    </body>
  );
}

export default ViewBookingsAdmin;
