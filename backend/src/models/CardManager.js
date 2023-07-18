const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  constructor() {
    super({ table: "card" });
  }

  insert(card) {
    return this.database.query(
      `INSERT INTO ${this.table} 
    (project_id, language_id) VALUES (?, ?)`,
      [card.project_id, card.language_id]
    );
  }

  update(card) {
    return this.database.query(
      `update ${this.table} set  project_id = ?,language_id = ? where id = ${card.id}`,
      [card.project_id, card.language_id]
    );
  }

  delete(cardId) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      cardId,
    ]);
  }
}

module.exports = CardManager;
