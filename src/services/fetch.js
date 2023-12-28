const server = "http://localhost:3000/";

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