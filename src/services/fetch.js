const server = "http://localhost:3000/";


/**
 * fetchUserData - Récupère les données d'un utilisateur depuis une URI.
 * @param {string} uri - L'URI pour récupérer les données
 * @returns {Promise<any>} - Retourne une promesse
 * @throws {Error} - Renvoie une erreur si les données ne peuvent pas être récupérées
 */
async function fetchUserData(uri) {
    try {
        const response = await fetch(server + uri);
        if (!response.ok) {
            throw new Error("La réponse du serveur renvoie une erreur.");
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error("Les données du serveur n'ont pas pu être récupérées.");
    }
}


/**
 * getUserData - Récupère les données spécifiques d'un utilisateur en fonction du type des données
 * @param {string} userId - L'ID de l'utilisateur
 * @param {string} dataType - Le type de données à récupérer (activity, "average, performance)
 * @returns {Promise<any>} - Retourne une promesse
 * @throws {Error} - Renvoie une erreur si les données ne peuvent pas être récupérées
 */
export async function getUserData(userId, dataType) {
    let uri = `user/${userId}`;
    
    if (dataType === "activity") {
        uri = `user/${userId}/activity`;
    } else if (dataType === "average") {
        uri = `user/${userId}/average-sessions`;
    } else if (dataType === "performance") {
        uri = `user/${userId}/performance`;
    }

    return await fetchUserData(uri);
}