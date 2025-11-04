export const competences = [
    { id: 1, title: "HTML", image: "/images/competences/html.png", progress: 50,
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
    { id: 2, title: "CSS", image: "/images/competences/css.png", progress: 70,
        codeExample: `/*Code CSS pour les bordures et un fond noir broullié */
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
    { id: 3, title: "JavaScript", image: "/images/competences/javascript.png", progress: 60,
        codeExample: `const tableViewBtn = document.getElementById('table-view-btn');
    const kanbanViewBtn = document.getElementById('kanban-view-btn');
    const tableView = document.getElementById('table-view');
    const kanbanView = document.getElementById('kanban-view');
    
    if (tableViewBtn && kanbanViewBtn && tableView && kanbanView) {
        // Toggle to table view
        tableViewBtn.addEventListener('click', function() {
            tableView.classList.remove('d-none');
            kanbanView.classList.add('d-none');
            tableViewBtn.classList.add('active');
            kanbanViewBtn.classList.remove('active');
            
            // Update URL without reloading the page
            const url = new URL(window.location);
            url.searchParams.set('view', 'table');
            window.history.pushState({}, '', url);
        });
        
        // Toggle to kanban view
        kanbanViewBtn.addEventListener('click', function() {
            tableView.classList.add('d-none');
            kanbanView.classList.remove('d-none');
            tableViewBtn.classList.remove('active');
            kanbanViewBtn.classList.add('active');
            
            // Update URL without reloading the page
            const url = new URL(window.location);
            url.searchParams.set('view', 'kanban');
            window.history.pushState({}, '', url);
        });
    } else {
        console.error('One or more view toggle elements not found');
    }`},
    { id: 4, title: "Node.JS", image: "/images/competences/nodejs.png", progress: 70,
        codeExample: `// Création d'un serveur HTTP avec Node.js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Bienvenue sur mon serveur Node.js !");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page non trouvée");
    }
});

server.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000");
});`},
    { id: 5, title: "PHP", image: "/images/competences/php.png", progress: 30,
        codeExample: `<?php
// Configuration de la base de données
$host = 'localhost';
$dbname = 'nom_BDD';
$username = 'utilisateur_BDD';
$password = 'mdp_BDD';

try {
    // Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Requête pour récupérer toutes les données
    $stmt = $pdo->query("SELECT * FROM utilisateurs ORDER BY nom, prenom");
    $donnees = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
} catch(PDOException $e) {
    $erreur = "Erreur de connexion : " . $e->getMessage();
}
?>`},
    { id: 6, title: "MySQL", image: "/images/competences/mysql.png", progress: 70,
        codeExample: `-- Création de la base de données
CREATE DATABASE collectus;

-- Utilisation de cette base de données
USE collectus;

-- Création de la table pour les demandes
CREATE TABLE IF NOT EXISTS demandes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    email VARCHAR(150) NOT NULL,
    adresse_postale TEXT NOT NULL,
    type_encombrant VARCHAR(100) NOT NULL,
    consentement_rgpd ENUM('oui', 'non') NOT NULL DEFAULT 'non',
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_modification TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertion de données dans la base de données
INSERT INTO encombrants (nom, prenom, telephone, email, adresse_postale, type_encombrant, consentement_rgpd) VALUES
('Dupont', 'Marie', '01.23.45.67.89', 'marie.dupont@email.com', '123 Rue de la Paix, 75001 Paris', 'Électroménager', '1'),
('Durand', 'Sophie', '01.11.22.33.44', 'sophie.durand@email.com', '789 Boulevard Saint-Germain, 75006 Paris', 'Cartons', '0');`},
    { id: 7, title: "Python", image: "/images/competences/python.png", progress: 55,
        codeExample: `def get_user_enterprise_tasks(user):
    """
    Retourne les tâches associées à l'entreprise ou ESN de l'utilisateur.
    """
    user_profile = user.profile
    if not user_profile.enterprise and not user_profile.esn:
        raise ValueError("L'utilisateur n'est associé ni à une entreprise ni à une ESN.")
    if user_profile.role in ['esn_admin', 'advisor']:
        return Task.objects.filter(enterprise__esn=user_profile.esn)
    elif user_profile.role == 'enterprise_admin':
        return Task.objects.filter(enterprise=user_profile.enterprise)
    elif user_profile.role == 'user':
        return Task.objects.filter(assigned_to=user_profile)
    else:
        return Task.objects.none()`},
    { id: 8, title: "C#", image: "/images/competences/csharp.jpg", progress: 30,
        codeExample: `private void SaveWaypoints()
    {
        //Sauvegarder l'état des balises
        SaveManager.Instance.SaveCompletedGames(completedGames);
        SaveManager.Instance.SaveActiveWaypoints(
            activeWaypoints.Select(wp => waypoints.IndexOf(wp)).ToList());

        foreach (var wp in activeWaypoints)
        {
            int index = waypoints.IndexOf(wp);
            SaveManager.Instance.SaveWaypointScene(index, waypointScenes[wp]);
        }

        SaveManager.Instance.SetHasActiveWaypoints(true);
    }`},
];