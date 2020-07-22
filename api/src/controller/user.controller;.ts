import { Request, Response } from 'express';
import connection from '../database/databaseConnection';
import md5 from 'md5';

class UserController{
  async index(req: Request, res: Response){
    connection.query('SELECT name, email FROM users', (err, result) => {
      if(err) return res.json(err);
      return res.json(result);
    });
  }

  async getById(req: Request, res: Response){
    const { id } = req.params;
    
    connection.query('SELECT name, email FROM users '+ 
                      'WHERE id = ?', id, (err, result) => {
      if(err) return res.json(err);
      return res.json(result);                    
    })
  }

  async create(req: Request, res: Response){
    const data = req.body;
    data.password = md5(data.password)
 
    connection.query('INSERT INTO users SET ?', data, (err, result) => {
      if(err) return res.json(err);
      return res.json({ message: 'User created!' });
    })
  }

  async update(req: Request, res: Response){
    const { id } = req.params
    const data = req.body;

    connection.query('UPDATE users SET ? WHERE id = ?', [ data, id ], (err, result) => {
      if(err) return res.json(err);
      return res.json({ message: 'User Updated' })
    })
  }

}

export default UserController