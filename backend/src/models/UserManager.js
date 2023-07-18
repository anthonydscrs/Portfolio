const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(userId) {
    return this.database.query(
      `
      SELECT user.email, user.hashedPassword, user.admin
      FROM user
      WHERE user.id = ?
    `,
      [userId]
    );
  }

  findUserByEmailWithPassword(email) {
    return this.database.query(
      `SELECT ${this.table}.*, user.email, user.hashedPassword, user.admin  FROM ${this.table} 
      WHERE email = ?`,
      [email]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT user.email, user.hashedPassword, user.admin FROM ${this.table}`
    );
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (email, hashedPassword, admin) VALUES (?, ?, ?)`,
      [user.email, user.hashedPassword, user.admin]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} set email = ?, phone = ? where id = ?`,
      [user.email]
    );
  }
}

module.exports = UserManager;
