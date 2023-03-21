import conn from './conexion.js'

export const getAll = () => {
  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM material where estado = 1', function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

export const deleteMaterial = ({ id }) => {
  return new Promise((resolve, reject) => {
    conn.query(`Update material set estado = 0 where IDMaterial = ${id}`, function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve({msg:'Eliminado correctamente'})
      }
    })
  })
}