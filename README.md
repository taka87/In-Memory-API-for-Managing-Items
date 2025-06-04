# 🧠 In-Memory Items API (Node.js + TypeScript)

A simple RESTful API for managing items (in memory) using Node.js, Express and TypeScript. The app allows you to create and retrieve items through HTTP endpoints.

---

## 📦 Technologies Used

- Node.js
- TypeScript
- Express.js
- UUID (for generating unique IDs)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/in-memory-items-api.git
cd in-memory-items-api

2. Install dependencies

npm install

3. Start the development server

npm run dev
Open your browser at: http://localhost:3000

🧰 Scripts:
npm run dev – Start with ts-node-dev
npm run build – Compile TypeScript
npm start – Run compiled code (from /dist)

----------------------------------------
📌 API Endpoints
GET /items
Returns all items currently stored in memory.

Example:
curl http://localhost:3000/items

Response:
[
  { "id": "uuid1", "name": "Banana" },
  { "id": "uuid2", "name": "Apple" }
]

POST /items
Adds a new item. The body must contain a name (string).

Example:
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{ "name": "Orange" }'
Response:
{
  "id": "generated-uuid",
  "name": "Orange"
}

If invalid input:
{ "error": "Name is required and must be a string" }

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
✅ Assignment Criteria Covered
✔️ Node.js project setup with npm
✔️ TypeScript configured with tsconfig.json
✔️ Express installed and used for routing
✔️ API endpoints: GET and POST /items
✔️ In-memory storage using array of Item objects
✔️ UUIDs used for unique id
✔️ Proper request validation and HTTP status codes
✔️ Clean and modular code structure
