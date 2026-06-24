import React, { useState, useEffect } from "react";
import { AuthContextCreate } from "../Context/AuthContext";
import { useContext } from "react";


const AdminLoginPage = () => {
 
  const [userData,setUserData] = useContext(AuthContextCreate);
  
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" | "error"

  // Auto-hide toast after 3.5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const triggerToast = (msg, type = "success") => {
    setToastMsg(msg);
    setToastType(type);
    setShowToast(true);
  };

  const handleFrom = (e) => {
    e.preventDefault();

    // Check karo koi employee mila ya nahi
    const employeeFound = userData.some((elem) => assign === elem.firstName);

    if (!employeeFound) {
      triggerToast(`❌ Employee "${assign}" nahi mila. Sahi naam likho.`, "error");
      return;
    }

    // Task object seedha banao - setTask async hai toh state se push karna kaam nahi karta
    const newTaskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData.map((elem) => {
      if (assign === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTaskObj],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(data);
    // localStorage mein bhi update kiya taaki refresh ke baad data rahe
    localStorage.setItem("employee", JSON.stringify(data));

    //  Success Toast 
    triggerToast(`🎉 Congratulations! Task "${taskTitle}" successfully assigned to ${assign}!`, "success");

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAssign("");
  };

  return (
    <div className="mt-3 bg-[#1C1C1C]">

      {/* ===== TOAST NOTIFICATION ===== */}
      <div
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          zIndex: 9999,
          transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          transform: showToast ? "translateX(0) scale(1)" : "translateX(120%) scale(0.8)",
          opacity: showToast ? 1 : 0,
          pointerEvents: showToast ? "auto" : "none",
        }}
      >
        <div
          style={{
            background: toastType === "success"
              ? "linear-gradient(135deg, #0f4c25 0%, #1a7a3f 50%, #22c55e 100%)"
              : "linear-gradient(135deg, #4c0f0f 0%, #7a1a1a 50%, #ef4444 100%)",
            color: "#ffffff",
            padding: "16px 22px",
            borderRadius: "14px",
            boxShadow: toastType === "success"
              ? "0 8px 32px rgba(34, 197, 94, 0.45), 0 2px 8px rgba(0,0,0,0.4)"
              : "0 8px 32px rgba(239, 68, 68, 0.45), 0 2px 8px rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            maxWidth: "380px",
            border: toastType === "success" ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(239,68,68,0.4)",
            backdropFilter: "blur(10px)",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          {/* Icon */}
          <div style={{ fontSize: "28px", lineHeight: 1 }}>
            {toastType === "success" ? "✅" : "⚠️"}
          </div>

          {/* Text */}
          <div>
            <div style={{ fontWeight: "700", fontSize: "14px", marginBottom: "3px", letterSpacing: "0.3px" }}>
              {toastType === "success" ? "Task Assigned!" : "Assignment Failed"}
            </div>
            <div style={{ fontSize: "13px", opacity: 0.9, lineHeight: "1.4" }}>
              {toastMsg}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowToast(false)}
            style={{
              marginLeft: "auto",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            marginTop: "6px",
            height: "3px",
            borderRadius: "999px",
            background: toastType === "success" ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: toastType === "success" ? "#22c55e" : "#ef4444",
              borderRadius: "999px",
              animation: showToast ? "toastProgress 3.5s linear forwards" : "none",
            }}
          />
        </div>
      </div>

      {/* CSS Animation for progress bar */}
      <style>{`
        @keyframes toastProgress {
          from { width: 100%; }
          to   { width: 0%;   }
        }
      `}</style>
      <form
        className="lg:flex w-full justify-between gap-5 p-4 "
        onSubmit={(e) => {
          handleFrom(e);
        }}
      >
        <div className="lg:w-1/2 flex flex-col   gap-2">
          <h3>Task Title:</h3>
          <input
            value={taskTitle}
            onChange={(elem) => {
              setTaskTitle(elem.target.value);
            }}
            type="text"
            placeholder="Make a UI design"
            className="outline-none p-1 px-3 border-2 rounded  placeholder:text-gray-200 placeholder:text-sm "
          />
          <h3>Date:</h3>
          <input
            value={taskDate}
            onChange={(elem) => {
              setTaskDate(elem.target.value);
            }}
            type="date"
            className="outline-none py-1 px-3 border-2 rounded placeholder:text-gray-200 placeholder:text-sm "
          />

          <h3>Asign To:</h3>
          <input
            value={assign}
            onChange={(elem) => {
              setAssign(elem.target.value);
            }}
            placeholder="Employee name"
            type="text"
            className="outline-none py-1 px-3 border-2 rounded placeholder:text-gray-200 placeholder:text-sm "
          />

          <h3>Category:</h3>
          <input
            value={category}
            onChange={(elem) => {
              setCategory(elem.target.value);
            }}
            type="text"
            placeholder="Design,Development,etc"
            className="outline-none p-1 px-3 border-2 rounded placeholder:text-gray-200  placeholder:text-sm"
          />
        </div>

        <div className=" flex flex-col gap-2 mt-4">
          <h3>Description:</h3>
          <textarea
            value={taskDescription}
            onChange={(elem) => {
              setTaskDescription(elem.target.value);
            }}
            rows={6}
            cols={70}
            placeholder="Detail description of task(make 50 word) "
            className="outline-none p-2 px-3 border-2 rounded placeholder:text-gray-200  placeholder:text-sm"
          ></textarea>
          <button className=" border-2 text-red-500 mt-7 text-2xl py-1  rounded-lg font-bold">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;
