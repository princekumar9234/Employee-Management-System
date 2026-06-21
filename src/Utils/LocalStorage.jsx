const employee = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create responsive homepage UI",
        taskDate: "2026-06-21",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve navbar alignment issue",
        taskDate: "2026-06-20",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect login page with backend API",
        taskDate: "2026-06-22",
        category: "Backend"
      }
    ]
  },

  {
    id: 2,
    email: "emma.smith@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build admin dashboard components",
        taskDate: "2026-06-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare API documentation",
        taskDate: "2026-06-18",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Server",
        taskDescription: "Deploy backend on Render",
        taskDate: "2026-06-19",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Validation",
        taskDescription: "Implement form validation",
        taskDate: "2026-06-22",
        category: "Backend"
      }
    ]
  },

  {
    id: 3,
    email: "michael.brown@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Improve MongoDB queries",
        taskDate: "2026-06-21",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Packages",
        taskDescription: "Upgrade npm dependencies",
        taskDate: "2026-06-17",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription: "Develop employee APIs",
        taskDate: "2026-06-23",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    email: "olivia.johnson@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Login Module",
        taskDescription: "Perform login functionality tests",
        taskDate: "2026-06-21",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve mobile responsiveness bugs",
        taskDate: "2026-06-19",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Gateway Setup",
        taskDescription: "Integrate Razorpay service",
        taskDate: "2026-06-20",
        category: "Backend"
      }
    ]
  },

  {
    id: 5,
    email: "william.davis@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription: "Build employee profile section",
        taskDate: "2026-06-21",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported bugs from users",
        taskDate: "2026-06-18",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement JWT",
        taskDescription: "Add authentication using JWT",
        taskDate: "2026-06-22",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Cloudinary Upload",
        taskDescription: "Implement image upload feature",
        taskDate: "2026-06-20",
        category: "Backend"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "princechouhan9939@gmail.com",
    password: "PRINCE@18"
  }
];

export const setLoacalStorage = ( ) =>{
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLoacalStorage = ( ) =>{
 const employee = JSON.parse(localStorage.getItem('employee'))
 const admin = JSON.parse(localStorage.getItem('admin'))
//  console.log(employee,admin)

 
}