# 🧠 In-Memory Items API (Node.js + TypeScript) - Implemented(Task 3 + Task 4)

A simple RESTful API for managing items (in memory) using Node.js, Express and TypeScript.  
The app allows you to create, retrieve, update and delete items through HTTP endpoints.  
Each item is assigned a UUID, and request validation is in place to ensure data integrity.  
The API returns clear error messages for invalid requests and supports standard RESTful methods:  
GET, POST, PUT, DELETE. Custom response messages implemented for consistent success and error handling

---

## 📦 Technologies

- Node.js
- TypeScript
- Express.js
- UUID (for generating unique IDs)

---

✅ Implemented Features:
- In-memory storage of items (no database used)
- Create Item – via POST /items with JSON body
- Get All Items – via GET /items
- Get Single Item by ID – via GET /items/:id
- Update Item by ID – via PUT /items/:id with validation
- Delete Item by ID – via DELETE /items/:id
- Error Handling – proper 400/404 responses with clear JSON messages
- UUID-based IDs – each item gets a unique identifier
- Clean code structure using Express + TypeScript

---

## 🚀 Getting Started (Installation)

### 1. Clone the repository

```bash
git clone https://github.com/taka87/In-Memory-API-for-Managing-Items
cd In-Memory-API-for-Managing-Items # or the folder name you chose when cloning
    Note: If you renamed the folder while cloning, replace the path accordingly.

2. Install dependencies

npm install

3. Start the development server

npm run dev
Open your browser at: http://localhost:3000
Note: In working order you will see blank list with message "API is running ⚙️" - Enjoy

🧰 Scripts:
npm run dev – Start with ts-node-dev
npm run build – Compile TypeScript
npm start – Run compiled code (from /dist)

----------------------------------------
📌 API Endpoints - Testing and Results

0. Method – POST (Create item) - 201 Created
Command – curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d "{\"name\": \"Ananas\"}"
Given result – {"id":"3af6bdd2-0cd5-4c89-8d17-a205a57c4f13","name":"Ananas"}

1. Method – GET (All items) - 200 OK
Command – curl http://localhost:3000/items
Given result – [{"id":"3af6bdd2-0cd5-4c89-8d17-a205a57c4f13","name":"Ananas"}]

2. Method – GET (Get item by ID) - 200 OK
Command – curl http://localhost:3000/items/3af6bdd2-0cd5-4c89-8d17-a205a57c4f13
Given result – {"id":"3af6bdd2-0cd5-4c89-8d17-a205a57c4f13","name":"Ananas"}

3. Method – PUT (Update item by ID) - 200 OK
Command – curl -X PUT http://localhost:3000/items/3af6bdd2-0cd5-4c89-8d17-a205a57c4f13 -H "Content-Type: application/json" -d "{\"name\": \"Ananas\"}"
Given result – {"id":"3af6bdd2-0cd5-4c89-8d17-a205a57c4f13","name":"Ananas"}

4. Method – DELETE (Delete item by ID) 200 OK 
Command – curl -X DELETE http://localhost:3000/items/3af6bdd2-0cd5-4c89-8d17-a205a57c4f13
Deleted item – {"id":"3af6bdd2-0cd5-4c89-8d17-a205a57c4f13","name":"Ananas"}
👉 Optional improvement: instead of returning the deleted item:{"message": "Item deleted successfully"}

❌ Error cases - 400 Bad Request
5. ❌ Method – POST (Invalid input - not a string)
Command – curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d "{\"name\": 123}"
Given result – {"error":"Name must be a string"}

6. ❌ Method – GET (Invalid ID - not found) - 404 Not Found
Command – curl http://localhost:3000/items/999
Given result – {"error":"Item not found"}

7. ❌ Method – PUT (Invalid input - not a string) - 	400 Bad Request
Command – curl -X PUT http://localhost:3000/items/999 -H "Content-Type: application/json" -d "{\"name\": 123}"
Given result – {"error":"Name must be a string"}

8. ❌ Method – DELETE (Invalid ID - not found) - 	404 Not Found
Command – curl -X DELETE http://localhost:3000/items/999
Given result – {"error":"Item not found"}

----------------------------------------
## 🧪 Testing with Postman (Tested During Task 3)

You can also test the API using [Postman](https://www.postman.com/) as an alternative to manual cURL or frontend requests.

### ➤ GET /items

- **URL**: `http://localhost:3000/items`
- **Method**: `GET`
- **Description**: Returns an array of all items currently stored in memory.

### ➤ POST /items

- **URL**: `http://localhost:3000/items`
- **Method**: `POST`
- **Headers**:  
  - `Content-Type: application/json`
- **Body (raw JSON)**:
  ```json
  {
    "name": "Example Item"
  }
Description: Adds a new item with a unique ID and returns the created object.

✅ All endpoints have been tested successfully with Postman during development.
----------------------------------------
📁 Project Structure

├── src/
│   ├── index.ts          // Entry point
│   ├── routes/items.ts   // Routes for /items endpoints
│   └── models/item.ts    // TypeScript interface for an Item
├── tsconfig.json         // TypeScript compiler config
├── package.json          // Project metadata and scripts

----------------------------------------
⚙️ Additional Setup Notes:
express.json() is used to parse incoming JSON requests.
UUIDs are generated via the uuid npm package.
TypeScript interfaces ensure structure of data.
Data is stored in memory only, and is lost on server restart.

----------------------------------------
✅ Assignment Criteria Covered - Task 3
✔️ Node.js project setup with npm
✔️ TypeScript configured with tsconfig.json
✔️ Express installed and used for routing
✔️ API endpoints: GET and POST /items
✔️ In-memory storage using array of Item objects
✔️ UUIDs used for unique id
✔️ Proper request validation and HTTP status codes
✔️ Clean and modular code structure
Additional Task 4:
✔️ PUT /items/:id endpoint for updating items  
✔️ DELETE /items/:id endpoint for deleting items  
✔️ Validation for PUT and DELETE requests  
✔️ Error handling for invalid UUIDs and missing items  
✔️ Descriptive success and error messages in JSON format  