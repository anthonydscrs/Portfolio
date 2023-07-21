const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  find(projectId) {
    return this.database.query(
      `
      SELECT project.id, project.name, project.description, project.website, project.picture, project.github, project.date
      FROM project
      WHERE project.id = ?
    `,
      [projectId]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT project.id, project.name, project.description, project.website, project.picture, project.github, project.date FROM ${this.table}`
    );
  }

  insert(project) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, description, website, picture, github, date) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        project.name,
        project.description,
        project.website,
        project.picture,
        project.github,
        project.date,
      ]
    );
  }

  update(project) {
    return this.database.query(
      `UPDATE ${this.table} set title = ?, description = ?, website = ?, picture = ?, github = ?, date = ? where id = ?`,
      [
        project.name,
        project.description,
        project.website,
        project.picture,
        project.github,
        project.date,
      ]
    );
  }

  delete(projectId) {
    return this.database.query(
      `DELETE project
    FROM project
    WHERE project.id = ?
  `,
      [projectId]
    );
  }
}

module.exports = ProjectManager;
