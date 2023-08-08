const { getAllData } = require("./getData");


const getDataByNameController = async (name) => {
    const allData = await getAllData();
  
    if (name) {
      const lowerCaseName = name.toLowerCase();
      const filteredData = allData.filter((data) =>
        data.modelo.toLowerCase().includes(lowerCaseName)
      );
      const filter8 = filteredData.slice(0,7)
      return filter8
  
    } else {
      return allData;
    }
  };

  module.exports = {getDataByNameController}