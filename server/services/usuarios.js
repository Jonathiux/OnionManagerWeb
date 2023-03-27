import conn from './conexion.js'
import md5 from 'md5'

export const login = ({username,password}) => {
  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM usuario where username = ? ',[username], function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        if(results.length > 0){
          if(md5(password) === results[0].Contrasena){
            resolve(results)
          }else{
            resolve([])
          }
        }
        resolve([])
      }
    })
  })
}

export const postUsuario = ({
  _Nombre,
  _Apellidos,
  _Telefono,
  _Username,
  _Contrasena
}) => {
  const pass = md5(_Contrasena)
  return new Promise((resolve, reject) => {
    conn.query('INSERT INTO usuario values (null,?,?,?,?,?,0) ',[
      _Nombre,
      _Apellidos,
      _Telefono,
      _Username,
      pass,
    ], function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        resolve(results.affectedRows)
      }
    })
  })
}

export const getSingleUsuario =({idUsuario})=>{
  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM usuario where IDUsuario = ? ',[idUsuario], function (error, results, fields) {
      if (error) {
        reject(error)
      } else {
        if(results.length > 0){
          resolve(results)
        }
        resolve([])
      }
    })
  })
}