const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  constructor() {
    super({ table: "language" });
  }

  insert(language) {
    return this.database.query(`INSERT INTO ${this.table} (title) VALUES (?)`, [
      language.title,
    ]);
  }

  update(language) {
    return this.database.query(
      `UPDATE ${this.table} set title = ? where id = ?`,
      [language.title]
    );
  }

  delete(languageId) {
    return this.database.query(
      `DELETE language
    FROM language
    WHERE language.id = ?
  `,
      [languageId]
    );
  }
}

module.exports = LanguageManager;
