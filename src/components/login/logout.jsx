import React from "react";
import Logout from "./signin"; // ✅ Logout component import karo

const Profile = () => {
  return (
    <div>
      <h2>Welcome to your Profile!</h2>
      <Logout /> {/* ✅ Logout button show hoga */}
    </div>
  );
};

export default Profile;
