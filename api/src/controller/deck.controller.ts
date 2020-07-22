import { Request, Response } from 'express';
import connection from '../database/databaseConnection';

class DeckController{
  async index(req: Request, res: Response){
    const { id } = req.params;

    await connection.query('SELECT name FROM decks '+
                            'WHERE user_id = ?', id, (err, data) => {
      if(err) return res.json(err);

      return res.json(data);
    })
  }

  async save(req: Request, res: Response){
    const data = req.body;
    
    await connection.query(`INSERT INTO decks SET ?`, data, (err, result) => {
      if(err) return res.json(err);

      return res.json({ message: "Deck created!!" });
    })
  }

  async update(req: Request, res: Response){
    const { id } = req.params;
    const data = req.body
  
    await connection.query('UPDATE decks SET ? WHERE id = ?', [data, id], (err, result) => {
      if(err) return res.json(err);

      return res.json({ message: "Deck updated!" });
    })

  }
}

export default DeckController;