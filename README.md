# Upload Image via REST API

## Folder Structure:

```
.
├── LICENSE
├── package.json
├── README.md
├── src
│   ├── controllers
│   │   ├── index.ts
│   │   └── upload.ts
│   ├── database.ts
│   ├── index.ts
│   ├── interfaces
│   │   └── index.ts
│   ├── middlewares
│   │   ├── error.ts
│   │   ├── index.ts
│   │   └── upload.ts
│   ├── models
│   │   ├── image.ts
│   │   └── index.ts
│   ├── routes
│   │   ├── index.ts
│   │   └── upload.ts
│   └── utils.ts
├── tsconfig.json
└── uploads
```

## API Routes:

| Method   | Route          | Description                         |
| -------- | -------------- | ----------------------------------- |
| `GET`    | `/uploads/`    | Fetch all uploaded images           |
| `POST`   | `/uploads/`    | Upload images file                  |
| `GET`    | `/uploads/:id` | Fetch uploaded image with id: `id`  |
| `DELETE` | `/uploads/:id` | Delete uploaded image with id: `id` |

## Packages Used:

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [Mongoose](https://mongoosejs.com/)
- [Multer](https://github.com/expressjs/multer)
- [Sharp](https://sharp.pixelplumbing.com/)

## Instructions:

First add a `.env` file to project root directory. Example below-

```bash
# example of .env file
HOST="localhost"
PORT=5000
DB_URI=<DATABASE_URI> # eg. mongodb://localhost:27017/test
```

Then run these commands -

```bash
# install npm packages
npm i
# create uploads folder in root directory
mkdir uploads
# run development server
npm run start
```
