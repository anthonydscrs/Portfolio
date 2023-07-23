const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  find(projectId) {
    return this.database.query(
      `
      SELECT project.id, project.name, project.description, project.website, project.picture, project.github, project.date, project.Htmlcss, project.Javascript, project.React, project.Node, project.Express, project.MySQL
      FROM project
      WHERE project.id = ?
    `,
      [projectId]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT project.id, project.name, project.description, project.website, project.picture, project.github, project.date, project.Htmlcss, project.Javascript, project.React, project.Node, project.Express, project.MySQL
      FROM ${this.table}`
    );
  }

  insert(project) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, description, website, picture, github, date, Htmlcss, Javascript, React, Node, Express, MySQL) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        project.name,
        project.description,
        project.website,
        project.picture,
        project.github,
        project.date,
        project.Htmlcss,
        project.Javascript,
        project.React,
        project.Node,
        project.Express,
        project.MySQL,
      ]
    );
  }

  update(project, id) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, website = ?, picture = ?, github = ?, date = ?, Htmlcss = ?, Javascript = ?, React = ?, Node = ?, Express = ?, MySQL = ? WHERE id = ?`,
      [
        project.name,
        project.description,
        project.website,
        project.picture,
        project.github,
        project.date,
        project.Htmlcss,
        project.Javascript,
        project.React,
        project.Node,
        project.Express,
        project.MySQL,
        id,
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
