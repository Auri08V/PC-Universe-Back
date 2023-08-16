
const { reverDeleteProductService, deleteProductService } = require("../../Services/productosServices")

const revertDeleteProductController = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await reverDeleteProductService(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error al revertir el producto' });
    }
};


const deleteProductsByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await deleteProductService(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
};

module.exports = {
    deleteProductsByIdController, revertDeleteProductController
}