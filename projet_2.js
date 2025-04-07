// Inverser une chaîne
function inverserChaine(chaine) {
    let chaineInversee = "";
    for (let i = chaine.length - 1; i >= 0; i--) {
      chaineInversee += chaine[i];
    }
    return chaineInversee;
  }
  
  // Compter les caractères
  function compterCaracteres(chaine) {
    return chaine.length;
  }
  
  // Mettre les mots en majuscule
  function mettreEnMajuscule(phrase) {
    let mots = phrase.split(" ");
    let resultat = [];
    
    for (let i = 0; i < mots.length; i++) {
      if (mots[i].length > 0) {
        resultat.push(mots[i][0].toUpperCase() + mots[i].slice(1));
      } else {
        resultat.push("");
      }
    }
    
    return resultat.join(" ");
  }
  
  // FONCTIONS DU TABLEAU
  
  // Trouver le maximum
  function trouverMaximum(tableau) {
    if (tableau.length === 0) {
      return null;
    }
    
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
      if (tableau[i] > max) {
        max = tableau[i];
      }
    }
    return max;
  }
  
  // Trouver le minimum
  function trouverMinimum(tableau) {
    if (tableau.length === 0) {
      return null;
    }
    
    let min = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
      if (tableau[i] < min) {
        min = tableau[i];
      }
    }
    return min;
  }
  
  // Calculer la somme du tableau
  function calculerSomme(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
    return somme;
  }
  
  // Filtrer un tableau
  function filtrerTableau(tableau, condition) {
    let resultat = [];
    for (let i = 0; i < tableau.length; i++) {
      if (condition(tableau[i])) {
        resultat.push(tableau[i]);
      }
    }
    return resultat;
  }
  
  // FONCTIONS MATHÉMATIQUES
  
  // Calculer la factorielle
  function calculerFactorielle(nombre) {
    if (nombre < 0) {
      return "Le nombre doit être positif";
    }
    
    let resultat = 1;
    for (let i = 2; i <= nombre; i++) {
      resultat *= i;
    }
    return resultat;
  }
  
  // Vérifier si un nombre est premier
  function estNombrePremier(nombre) {
    if (nombre <= 1) {
      return false;
    }
    
    if (nombre <= 3) {
      return true;
    }
    
    if (nombre % 2 === 0 || nombre % 3 === 0) {
      return false;
    }
    
    for (let i = 5; i * i <= nombre; i += 6) {
      if (nombre % i === 0 || nombre % (i + 2) === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  // Générer la suite de Fibonacci
  function genererFibonacci(nombreTermes) {
    if (nombreTermes <= 0) {
      return [];
    }
    
    if (nombreTermes === 1) {
      return [0];
    }
    
    let suite = [0, 1];
    for (let i = 2; i < nombreTermes; i++) {
      suite.push(suite[i-1] + suite[i-2]);
    }
    
    return suite;
  }