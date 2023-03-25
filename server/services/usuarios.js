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