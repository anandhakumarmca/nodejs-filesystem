# NODEJS FILE SYSTEM

This provides information about the project, how to use and the Postman API documentation.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
    - [Create a Text File](#create-a-text-file)
    - [List Text Files](#list-text-files)
- [API Documentation](#postman-api-documentaion)
- [HASH ID](#lost-comitted-hash-id)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/anandhakumarmca/nodejs-filesystem.git

2. Navigate to the project directory:

    ```bash
     cd your-repository

3. Install project dependencies:
    
   ```bash
     npm install
  
4. Start the server:
       
   ```bash
      npm start

## API ENDPOINTS

# Create a Text File

This API endpoint creates a text file with a filename in the 'YYYY-MM-DD-HH-mm-ss.txt' format. The file is created in the 'files' directory located in the root directory.

URL: https://nodejs-filesystem-lec7.onrender.com/createFile
Method: POST

Response:

     ```bash
         {
            "message": "File created successfully.",
            "filePath": "/opt/render/project/src/files/2023-9-14-7-59-1.txt"
        }


# List Text Files

This API endpoint retrieves a list of text files from the 'files' directory located in the root directory.

URL: https://nodejs-filesystem-lec7.onrender.com/listFiles
Method: GET

Response:

     ```bash
         {
        "files": [
                    "2023-9-14-7-59-1.txt",
                    "2023-9-14-8-00-15.txt",
                    ...
                 ]
        }

# API Documentation

 For detailed information about specific endpoints, request parameters, and response formats, please refer to the complete API documentation.
