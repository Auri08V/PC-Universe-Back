const {PcFinal , Componentes , Perifericos} = require ("../db")
const postCreatePcFinal =  async (req, res) => {
  try {
    const pcId = req.params.id;
    const pcEnsamblada = await PcFinal.findByPk(pcId);
    if (!pcEnsamblada) {
      return res.status(404).json({ error: "La PC ensamblada no existe" });
    }
    const { modelo, descripcion, precio } = req.body;

    const nuevoComponente = await Componentes.create({
      modelo,
      especificaciones,
      precio,
    });

    await pcEnsamblada.addComponente(nuevoComponente);

    const componentes = await pcEnsamblada.getComponentes();
    const precioTotal = componentes.reduce((total, componente) => total + componente.precio, 0);

    await pcEnsamblada.update({ precio_total: precioTotal });

    res.json({ message: "Componente agregado correctamente a la PC ensamblada", nuevoComponente });
  } catch (error) {
    console.error("Error al agregar el componente:", error);
    res.status(500).json({ error: "Error al agregar el componente a la PC ensamblada" });
  }
}
module.exports={postCreatePcFinal}
