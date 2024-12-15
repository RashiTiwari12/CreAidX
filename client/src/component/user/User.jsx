import React, { useContext } from "react";
import { UserDataContext } from "./UserData";
const User = () => {
  const { userData, loading } = useContext(UserDataContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {userData.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.isExpert ? "Expert" : "Not an Expert"}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
