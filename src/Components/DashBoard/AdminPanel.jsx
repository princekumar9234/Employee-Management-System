import React, { useState } from "react";
import EmployHeader from "../Others/EmployHeader";
import AdminLoginPage from "../Pages/AdminLoginPage";

const AdminPanel = () => {
 

  return (
    <div className="px-10 py-4">
      <EmployHeader />
      <AdminLoginPage/>
    </div>
  );
};

export default AdminPanel;
