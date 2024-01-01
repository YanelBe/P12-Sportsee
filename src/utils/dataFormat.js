/**
 * dateFormatter - Récupère le jour d'une date complète
 * @param {string} value - La date complète au format YYYY-MM-DD, par exemple 2020-07-01
 * @returns {number {1-31}} Le jour de la date
 */
export function dateFormatter(value) {
    const valueDay = value.split('-')
    return (Number(valueDay[2]))
}


/**
 * performanceKindFormatter - Formate en français les valeurs de l'axe X pour le RadarChart
 * @param {number} kind - Représente le type de performance en anglais
 * @returns {string|null} - Renvoie la traduction en français
 */
export function performanceKindFormatter(kind) {
    
    switch (kind){
        case 1: 
            return "Cardio";
        case 2: 
            return "Energie";
        case 3: 
            return "Endurance";
        case 4: 
            return "Force";
        case 5: 
            return "Vitesse";
        case 6: 
            return "Intensité";
        default: 
            return null;
    }
}


/**
 * convertToPercentage - Transforme le score en pourcentage après avoir normalisé les données
 * @param {number} score - Le score à convertir en pourcentage
 * @returns {number} Le score converti en pourcentage
 */
export function convertToPercentage(score) {
    return Math.round(score * 100);
}


/**
 * Formate le jour de la semaine pour le transformer en sa première lettre
 * @param {number {1-7}} day - Récupère le jour de la semaine
 * @returns Retourne sa première lettre
 */
export function labelFormatter(day) {
    switch(day){
        case 1: 
            return "L";
        case 2: 
            return "M";
        case 3: 
            return "M";
        case 4: 
            return "J";
        case 5: 
            return "V";
        case 6: 
            return "S";
        case 7: 
            return "D";
        default: 
            return "";
    }
}