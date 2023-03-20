import conn from './conexion.js'

export const getAll = () => {
  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM material', function (error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}