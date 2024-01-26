# Cloudinary CRUD Application
# What is Cloudinary
Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.
Build a CRUD Web Application using the Cloudinary with MERN Stack.

## Installation

Use the package manager npm to install Cloudinary.

```bash
npm i cloudinary
```

# Configurations
```
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });
```
# Get Data
```JavaScript
const result = await cloudinary.api.resources();
```
# Post Data
```JavaScript
const result = await cloudinary.uploader.upload(req.file.path)
```
# Delete Data
```JavaScipt
const result = await cloudinary.uploader.destroy(req.params.public_id);
```