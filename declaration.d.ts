// Déclare les modules pour les fichiers d'images courants utilisés dans le projet TypeScript pour permettre leur importation sans erreurs de type.

declare module "*.jpg" {
    const value: number;
    export default value;
}

declare module "*.png" {
    const value: number;
    export default value;
}

declare module "*.jpeg" {
    const value: number;
    export default value;
}

declare module "*.ttf"{
    const value: number;
    export default value;
}

declare module "*.otf"{
    const value: number;
    export default value;
}
