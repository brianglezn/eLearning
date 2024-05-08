import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../bdd/db.json');

function readDB() {
    const jsonData = fs.readFileSync(dbPath);
    return JSON.parse(jsonData);
}

export function getAllUsers(req, res) {
    const data = readDB();
    res.status(200).json(data.users);
}

export function getUserById(req, res) {
    const { id } = req.params;
    const data = readDB();
    const user = data.users.find(u => u.id.toString() === id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
}
