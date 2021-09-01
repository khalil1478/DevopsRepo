import { Adherent } from "./adherent";
import { Category } from "./Category";
import { Docteur } from "./Docteur";

export class Remboursement {


    id: number;
    valeur: number;
    nom_docteur: string;
    montant_dep: number;
    montant_remboursement: number;
   category : Category;
    adherent : Adherent;
    docteur : Docteur;
   
   }