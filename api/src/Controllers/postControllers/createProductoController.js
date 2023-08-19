const { createdComponentService, createdPerifericosService } = require("../../Services/productosServices");
const { uploadImage } = require("../../middlewares/cloudanary");

const createdComponenteController = async (req, res) => {
    const { modelo, especificaciones, precio, stock, categoria, cantidad } = req.body;
    console.log("CUERPO", req.body);
    
    try {
        let result = "";
        if (req.files && req.files.img) {
            result = await uploadImage(req.files.img.tempFilePath);
            console.log(result);
        } else {
            console.log("No se encontró ninguna imagen en la solicitud.");
        }
        
        if (result) {
            const imgURL = result.secure_url; 
            const newProduct = await createdComponentService(modelo, especificaciones, precio, stock, imgURL, categoria, cantidad);
            res.status(201).json(newProduct);
        } else {
            res.status(400).json({ error: "Error al subir la imagen." });
        }
        
    } catch (error) {
        console.error("Error al crear un producto", error);
        res.status(500).json({ error: "Hubo un error al crear el producto" });
    }
};



const createdPerifericoController = async (req, res) => {
    const { modelo, especificaciones, precio, stock, categoria, cantidad,tipo} = req.body;
    console.log("BODY", req.body);
    
    try {
        let result = "";
        if (req.files && req.files.img) {
            result = await uploadImage(req.files.img.tempFilePath);
            console.log(result);
        } else {
            console.log("No se encontró ninguna imagen en la solicitud.");
        }
        if(result){
            const imgURL= result.secure_url;
            const newperiferico= await createdPerifericosService(modelo, especificaciones, precio, stock, imgURL, categoria, cantidad,tipo)
                res.status(201).json(newperiferico);
        }else{
            res.status(400).json({error:"Error al subir la imagen"})
        }
    
    } catch (error) {
        console.error("Error al crear un producto", error);
        res.status(500).json({ error: "Hubo un error al crear el producto" });
    }
};


module.exports = { createdComponenteController,createdPerifericoController };

 //   try {
//     const { modelo, especificaciones, precio, stock, categoria, cantidad } = req.body;
//     console.log("BODY", req.body);

//     const minIdValue = 81;
//     const maxIdValue = 1000000
//     const randomId = Math.floor(Math.random() * (maxIdValue - minIdValue + 1)) + minIdValue;

//     const newComponente = await Componentes.create({
//         id: randomId,
//         modelo,
//         especificaciones,
//         precio,
//         stock,
//         categoria,
//         cantidad,
//       });

//     if (req.files && req.files.image){
//      const result = await  uploadImage(req.files.image.tempFilePath)
//      console.log(result);
//     }
//     res.status(201).json(newComponente)
//    } catch (error) {
//     console.error("Error al crear un componente",error)
//    }




 // const { modelo, especificaciones, precio, stock, img, categoria, cantidad } = req.body;
    // console.log("BODY", req.body);
    //  try {
    //     let imgValue;
    //     if (req.files && req.files.img) {
    //         const result = await uploadImage(req.files.img.tempFilePath);
    //         console.log(result);
    //         imgValue = result.url
    //     }
    //     const newProduct = await createdComponentService(modelo, especificaciones, precio, stock, imgValue, categoria, cantidad);
    //     res.status(201).json(newProduct);
    // } catch (error) {
    //     console.error("Error al crear un componente", error);
    //     res.status(500).json({ error: "Hubo un error al crear un componente" });
    // }









    //     let componenteData = req.body
//     const components = Array.isArray(componenteData) ? componenteData : [componenteData]
//     try {
//         const createComponent = []
//         const invalidComponent = []

//         for (const component of components) {
//             const { error } = validateComponent(component)

//             if (error) {
//                 invalidComponent.push({
//                     component,
//                     error: error.message
//                 })
//             } else {
//                 try {
//                     let imageUrl;
//                     if (component.img) {
//                         imageUrl = await uploadUrlToCloudinary(component.img);
//                     } else if (req.file) {
//                         const result = await uploadFileToCloudinary(req.file)
//                         imageUrl = result.secure_url
//                     }
//                     const createComponent = await createdComponentService({
//                         ...component,
//                         img: imageUrl
//                     })
//                     createComponent.push(createComponent)
//                 } catch (error) {
//                     if (error.message === "Componente duplicado") {
//                         console.log(`Duplicado ${component.modelo}`);
//                         invalidComponent.push({
//                             component,
//                             error: "Componente Duplicado"
//                         })
//                     } else {
//                         throw error
//                     }
//                 }
//             }
//         }
//         if (createComponent.length > 0) {
//             if (invalidComponent.length > 0) {
//                 res.status(201).json({
//                     message: "Componente Creado",
//                     createComponent,
//                     invalidComponent
//                 })
//             } else {
//                 res.status(201).json({
//                     message: "Componente Creado",
//                     createComponent
//                 })
//             }
//         } else {
//             res.status(400).json({
//                 message: 'Componente no creado',
//                 invalidProducts,  
//             })
//         }
//     } catch (error) {
//         res.status(500).json({message:"Error al crear un componente"})
//     }
// };

// const createdPerifericoController = async (req, res) => {
//     const { modelo, especificaciones, precio, stock, img, categoria, cantidad, tipo } = req.body;
//     console.log("BODY", req.body);

//     try {
//         const newProduct = await createdPerifericosService(modelo, especificaciones, precio, stock, img, categoria, cantidad, tipo);
//         res.status(201).json(newProduct);
//     } catch (error) {
//         console.error("Error al crear un producto", error);
//         res.status(500).json({ error: "Hubo un error al crear el producto" });
//     }
// };

// const validateComponent = (product) => {
  
//     if (!product.modelo) {
//         return { error: 'Componente requiere un modelo' };
//     }

//     if (!product.precio) {
//         return { error: 'Componente requiere un precio' };
//     }

//     return {}; 
// };
// // Función para subir un archivo a Cloudinary
// const uploadFileToCloudinary = (file) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(file.path, (error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

// // Función para subir una imagen por URL a Cloudinary
// const uploadUrlToCloudinary = (imageUrl) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(imageUrl, (error, result) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(result.secure_url);
//             }
//         });
//     });