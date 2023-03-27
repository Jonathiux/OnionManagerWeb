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

export const getSingleMaterial = ({ id }) => {
  return new Promise((resolve, reject) => {
    conn.query(`select * from material where IDMaterial = ${id}`, function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

export const postMaterial = ({ _nombre, _descripcion, _cantidad}) => {
  return new Promise((resolve, reject) => {
    conn.query(`Insert into material values (null, ?,?,?,1)`,[_nombre, _descripcion, _cantidad], function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve({result:results.affectedRows, id:results.insertId})
      }
    })
  })
}

export const putMaterial = ({_id, _nombre, _descripcion, _cantidad}) => {
  return new Promise((resolve, reject) => {
    conn.query(`Update material set Nombre=?, Descripcion=?,Cantidad=? where IDMaterial=? `,[_nombre, _descripcion, _cantidad, _id], function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results.affectedRows)
      }
    })
  })
}