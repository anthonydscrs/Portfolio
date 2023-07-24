const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  constructor() {
    super({ table: "card" });
  }

  find(cardId) {
    return this.database.query(
      `
      SELECT  card.Htmlcss, card.Javascript, card.React, card.Node, card.Express, card.MySQL
      FROM card
      INNER JOIN project ON card.project_id = project.id
  
      WHERE card.id = ?
    `,
      [cardId]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT  card.Htmlcss, card.Javascript, card.React, card.Node, card.Express, card.MySQL FROM ${this.table}
      INNER JOIN project ON card.project_id = project.id
      `
    );
  }

  insert(card) {
    return this.database.query(
      `INSERT INTO ${this.table} 
    (card.Htmlcss, card.Javascript, card.React, card.Node, card.Express, card.MySQL) VALUES ( ?, ?, ?, ?, ?, ?, ?)`,
      [
        card.Htmlcss,
        card.Javascript,
        card.React,
        card.Node,
        card.Express,
        card.MySQL,
      ]
    );
  }

  update(card) {
    return this.database.query(
      `update ${this.table} set card.Htmlcss = ?, card.Javascript = ?, card.React = ?, card.Node = ?, card.Express = ?, card.MySQL = ? where id = ${card.id}`,
      [
        card.Htmlcss,
        card.Javascript,
        card.React,
        card.Node,
        card.Express,
        card.MySQL,
      ]
    );
  }

  delete(cardId) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      cardId,
    ]);
  }
}

module.exports = CardManager;
