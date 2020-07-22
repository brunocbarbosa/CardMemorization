import { Request, Response } from 'express';
import connection from '../database/databaseConnection';

class CardController{

  async index(req: Request, res: Response){
    const { deck_id } = req.params

    await connection.query( "SELECT c.front_name,c.back_name FROM cards c "+
                            "JOIN decks d ON c.deck_id = d.id "+
                            "WHERE c.deck_id = ?", deck_id, (err, data) => {
      if(err) return res.json(err);
      return res.json(data);
    })
  }

  async create(req: Request, res:Response){
    const data = req.body;

    await connection.query('INSERT INTO cards SET ?', data, (err, data) => {
      if(err) return res.json(err);
      return res.json({ message: 'Card created!' })
    })
  }

  async update(req: Request, res:Response){
    const { id } = req.params;
    const data = req.body;

    await connection.query('UPDATE cards SET ? WHERE id = ?', [data, id], (err, result) =>{
      if(err) return res.json(err);
      return res.json({ message: 'Card updated!' });
    })

  }
}

export default CardController