const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'deo7t33d5',
    api_key: '434894622691648',
    api_secret: '2a2JgkyIGWucme2dKFbJOClrqKc'
});


const uploadImage = async (filePath) => { 
  return await cloudinary.uploader.upload(filePath, {
      folder: "replit"
  });
};



module.exports = {uploadImage}