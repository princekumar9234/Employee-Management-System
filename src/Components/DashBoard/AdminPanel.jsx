import React, { useState } from "react";
import EmployHeader from "../Others/EmployHeader";
import AdminLoginPage from "../Pages/AdminLoginPage";

const AdminPanel = () => {
 

  return (
    <div className="px-10 py-4 bg-[#1C1C1C]">
      <EmployHeader />
      <AdminLoginPage/>
    </div>
  );
};

export default AdminPanel;
