import { Request, Response } from 'express';
import connection from '../database/databaseConnection';

class DeckController{
  async index(req: Request, res: Response){

    await connection.query('SELECT * FROM deck', (err, data) => {
      if(err) return res.json(err);

      return res.json(data);
    })
  }

  async save(req: Request, res: Response){
    const data = req.body;
    
    await connection.query(`INSERT INTO deck set ?`, data, (err, result) => {
      if(err) return res.json(err);

      return res.json({ message: "Deck created!!" });
    })
  }

  async update(req: Request, res: Response){
    const { id } = req.params;
    const data = req.body
    console.log(id, data)

    await connection.query('UPDATE deck SET ? WHERE id = ?', [data, id], (err, result) => {
      if(err) return res.json(err);

      return res.json({ message: "Deck updated!" });
    })

  }
}

export default DeckController;