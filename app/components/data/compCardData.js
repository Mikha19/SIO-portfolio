export const competences = [
    { id: 1, title: "HTML", image: "/images/competences/html.png", progress: 75,
        codeExample: `//Code HTML pour l'affichage du code
<div className="w-full rounded-lg overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <span className="text-sm text-gray-200">{language}</span>
        <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
    </div>
    <pre className="bg-gray-900 p-4 overflow-x-auto">
        <code className="text-sm text-gray-300">{children}</code>
    </pre>
</div>`
    },
    { id: 2, title: "CSS", image: "/images/competences/css.png", progress: 90,
        codeExample: `/*Code CSS pour les bordures et un fond noir broullier */
.rounded-md {
  border-radius: 0.375rem;
}

.border-2 {
  border-width: 2px;
}

.border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-border-opacity, 1));
}

.bg-black\/50 {
  background-color: rgb(0 0 0 / 0.5);
}`},
    { id: 3, title: "JavaScript", image: "/images/competences/javascript.png", progress: 90,
        codeExample: `// Fonction asynchrone pour récupérer des données
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur:', error);
    }
}`},
    { id: 4, title: "Node.JS", image: "/images/competences/nodejs.png", progress: 95,
        codeExample: `const express = require('express');
const app = express();

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => console.log('Server running'));`},
    { id: 5, title: "PHP", image: "/images/competences/php.png", progress: 55,
        codeExample: `<?php
class Database {
    private $connection;
    
    public function __construct() {
        $this->connection = new PDO(
            "mysql:host=localhost;dbname=test",
            "user",
            "password"
        );
    }
    
    public function getUsers() {
        $query = $this->connection->query("SELECT * FROM users");
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
}`},
    { id: 6, title: "MySQL", image: "/images/competences/mysql.png", progress: 75,
        codeExample: `-- Création d'une table avec clé étrangère
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Requête avec jointure
SELECT o.id, u.name, o.total_amount 
FROM orders o
INNER JOIN users u ON o.user_id = u.id
WHERE o.total_amount > 100;`},
    { id: 7, title: "Python", image: "/images/competences/python.png", progress: 75,
        codeExample: `from dataclasses import dataclass
from typing import List

@dataclass
class User:
    name: str
    age: int
    email: str

class UserService:
    def __init__(self):
        self.users: List[User] = []
    
    def add_user(self, user: User) -> None:
        self.users.append(user)
        
    def get_adult_users(self) -> List[User]:
        return [user for user in self.users if user.age >= 18]`},
    { id: 8, title: "C#", image: "/images/competences/csharp.jpg", progress: 25,
        codeExample: `public class GameController : MonoBehaviour
{
    private float speed = 5f;
    private Vector3 movement;
    
    void Update()
    {
        // Get input from player
        float horizontal = Input.GetAxisRaw("Horizontal");
        float vertical = Input.GetAxisRaw("Vertical");
        
        // Calculate movement vector
        movement = new Vector3(horizontal, 0f, vertical).normalized;
        
        // Move the player
        transform.Translate(movement * speed * Time.deltaTime);
    }
}`},
];