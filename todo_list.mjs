import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('todo_list.db');

db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY,
        task TEXT
    )
`);

export function addTask(task) {
    db.run('INSERT INTO tasks (task) VALUES (?)', task, (err) => {
        if (err) {
            console.error('Error adding task:', err.message);
        } else {
            console.log('Task added:', task);
        }
    });
}

export function viewTasks() {
    db.all('SELECT * FROM tasks', (err, rows) => {
        if (err) {
            console.error('Error viewing tasks:', err.message);
        } else {
            console.log('Tasks:');
            rows.forEach((row) => {
                console.log(row.id, row.task)
            })
        }
    })
}

