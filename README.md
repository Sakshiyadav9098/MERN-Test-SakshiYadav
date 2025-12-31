# MERN Full-Stack Developer Assessment

## Name: Sakshi Yadav

---

## Section 1: Frontend (React)

### Task 1.1 – MCQ
**Question:** Which React hook is used to manage component state?

**Answer:**  
b) useState

---

### Task 1.2 – Explain in Writing

**Component Structure:**
- Create a functional component
- Use useState for data, loading, and error
- Use useEffect to fetch data when component loads

**Hook Used:**
- useEffect, because it is used for side effects like API calls

**Loading & Error Handling:**
- Show loading text while fetching data
- Show error message if API fails
- Display list when data is successfully fetched

### Task 1.3 – Coding
Implemented Counter component using React functional component and useState hook.




## Section 2: Backend (Node.js / Express)

### Task 2.1 – MCQ
**Question:** What does app.use(express.json()) do?

**Answer:**  
b) Parses JSON request bodies


### Task 2.2 – API Design

**HTTP Method:** DELETE  
**Route:** /api/users/:id  

**Sample Request:**
DELETE /api/users/123

**Sample Response:**
```json
{
  "message": "User deleted successfully"
}


### Task 2.3 – Coding
Created an Express server listening on port 4000 with a GET /status endpoint.


## Section 3: Database (MongoDB)

### Task 3.1 – MCQ
**Question:** In MongoDB, what is a document?

**Answer:**  
c) A JSON-like data structure


### Task 3.2 – Schema Design
Designed a Mongoose schema for BlogPost with title, content, tags, and createdAt fields.


## Section 4: Full-Stack Todo App

I built a simple Todo List application to understand full-stack integration using MERN stack:
- React frontend for adding and displaying todos
- Express backend with POST and GET APIs
- MongoDB for storing todo data
>>>>>>> 2b4fb65 (Completed MERN full stack assessment)
