const server = require("express").Router();
const { Componentes, Perifericos } = require("../db");
const cors = require("cors");



//FILTROS Y ORDENAMIENTO

const filterController = async (req, res) => {
  try {
    const { categoria, sortOrder, sortBy, priceRange } = req.query;
    let filteredProducts = [];

    // Filtrar por categoría

    if (categoria) {
      const categoryComponentes = await Componentes.findAll({
        include: {
          model: Componentes,
          where: {
            name: categoria,
          },
        },
      });
      const categoryPerifericos = await Perifericos.findAll({
        include: {
          model: Perifericos,
          where: {
            name: categoria,
          },
        },
      });



      if (categoryComponentes.length > 0 && categoryPerifericos.length > 0) {
        filteredProducts = categoryComponentes.concat(categoryPerifericos);
      } else {
        return res.status(404).json({
          msg: `No se encontraron componentes ni perifericos para la categoría ${categoria}`,
        });
      }      
    }

    //Filtrar por rango de Precio

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-");
      let priceFilteredProducts = [];

      if (filteredProducts.length > 0) {
        // Si se aplicó algún filtro de categoría, filtrar por precio los productos filtrados
        priceFilteredProducts = filteredProducts.filter((product) => {
          const productPrice = parseFloat(product.precio);
          return productPrice >= minPrice && productPrice <= maxPrice;
        });
      } else {
        // Si no se aplicó ningún filtro de categoría, filtrar por precio todos los productos
        const allProductsC = await Componentes.findAll();
        const allProductsP = await Perifericos.findAll();
        const allProducts = allProductsC.concat(allProductsP);
        priceFilteredProducts = allProducts.filter((product) => {
          const productPrice = parseFloat(product.precio);
          return productPrice >= minPrice && productPrice <= maxPrice;
        });
      }

      filteredProducts = priceFilteredProducts;
    }

    //Ordenar por precio BARATO-CARO CARO-BARATO si de se desea

    if (sortBy === "precio") {
      let sortedProducts = [];

      if (filteredProducts.length > 0) {
        // Si se aplicó algún filtro de categoría, ordenar por precio los productos filtrados
        sortedProducts = filteredProducts.sort((a, b) => {
          const priceA = parseFloat(a.precio);
          const priceB = parseFloat(b.precio);
          return priceA - priceB;
        });
      } else {
        // Si no se aplicó ningún filtro de categoría, ordenar por precio todos los productos
        const allProductsC = await Componentes.findAll();
        const allProductsP = await Perifericos.findAll();
        const allProducts = allProductsC.concat(allProductsP);
        sortedProducts = allProducts.sort((a, b) => {
          const priceA = parseFloat(a.precio);
          const priceB = parseFloat(b.precio);
          return priceA - priceB;
        });
      }

      if (sortOrder === "dsc") {
        // Si se desea orden descendente, invertir el orden del array
        sortedProducts.reverse();
      }

      filteredProducts = sortedProducts;
    }

 

    if (filteredProducts.length === 0) {
      return res.status(404).json({
        msg: "No se encontraron productos para los filtros seleccionados.",
      });
    }

    res.status(200).json(filteredProducts);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {filterController}   

