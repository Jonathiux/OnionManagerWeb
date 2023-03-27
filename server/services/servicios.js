import conn from './conexion.js'

export const getAll = () => {
  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM servicio', function (error, results, fields) {
      if (error) {
        reject({error:error})
      } else {
        resolve(results)
      }
    })
  })
}

export const getservicesCliente = ({idUsuario}) => {
  return new Promise((resolve, reject) => {
    conn.query('select s.* from  servicio as s join usuario_servicio as us on s.ID = us.IDServicio join usuario as u on u.IDUsuario = us.IDUsuario where u.IDUsuario = ?',[idUsuario], function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

export const crearServicio = (s) => {
  return new Promise((resolve, reject) => {
    // se inicia la transaccion
    conn.beginTransaction()
    conn.query(`INSERT INTO servicio values (null,?,?,?,?,?,?,?,?,?,?,?,?)`, [s._Folio, s._TipoServicio, s._Cantidad, s._Descripcion, s._PrecioUnitario, s._PrecioTotal, s._Anticipo, s._Observaciones, s._FechaEntrega, s._FechaSolicitado, s._FechaInicio, s._Estado], function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        console.log(results.affectedRows)
        conn.query('INSERT INTO usuario_servicio values (null,?,?)', [s._IDUsuario, results.insertId], (error, result, fields) => {
          if (error) {
            // Si se produce un error en la inserción de usuario_servicio, cancelar la transacción y rechazar la promesa
            conn.rollback()
            reject(error)
          } else {
            // Si todo fue exitoso, confirmar la transacción y resolver la promesa
            conn.commit()
            resolve(results.affectedRows)
          }
        })
      }
    })
  })

}

// export const getHome = ({ tipo, limit }) => {
//   return new Promise((resolve, reject) => {
//     conn.query(`SELECT * from productos where Tipo_Producto_id = ${tipo} and \`as\` = 1 and status = 1 limit ${limit}`, function (error, results, fields) {
//       if (error) {
//         reject(error)
//       } else {
//         resolve(results)
//       }
//     })
//   })
// }

// export const crearProducto = ({ nombre, descripcion, caracteristicas, precio, stock, status, tipo }) => {
//   // se inicia la transaccion
//   // conn.beginTransaction()
//   const result = conn.query(`INSERT INTO productos values (null,?,?,?,?,?,?,?,1)`, [nombre, descripcion, caracteristicas, precio, stock, status, tipo])
//   console.log("El id del producto insertado es: ")
//   console.log(result)

//   // return result
//   // console.log(result[0].insertId)s
//   //se hace el comit
//   // conn.commit()
// }