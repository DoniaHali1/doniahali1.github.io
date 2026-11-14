# Résultats d'évaluation

Fichier généré par `backend/evaluate.py`. Ne pas modifier à la main.

## 1. Routeur : validation croisée (5 plis)

- Exemples : 338, sujets : 26
- Exactitude : 53.3%
- F1 macro : 53.8%
- Référence naïve (toujours le sujet le plus fréquent) : 8.9%

## 2. Routeur : jeu de test séparé

- Questions : 60, seuil de confiance : 0.3
- Bon sujet : 50 (83.3%)
- « Je ne sais pas » (confiance trop basse) : 9 (15.0%)
- Mauvais sujet : 1 (1.7%)

- fr : 28/31
- en : 22/29

### Erreurs

| Question | Attendu | Prédit | Confiance |
|---|---|---|---|
| Would she move to Belgium? | disponibilite | inconnu | 0.11 |
| Elle a fini ses études ? | formation | inconnu | 0.19 |
| What's her university? | formation | inconnu | 0.16 |
| Quick intro please | profil | inconnu | 0.19 |
| Elle a bossé où avant ? | experience | inconnu | 0.18 |
| Did she work on traffic lights with RL? | sumo | inconnu | 0.23 |
| Elle fait quoi à côté des cours ? | extrascolaire | formation | 0.31 |
| What pay is she expecting? | salaire | inconnu | 0.23 |
| What's the best pizza in town? | hors_sujet | inconnu | 0.26 |
| Is she single? | hors_sujet | inconnu | 0.28 |

## 3. Moteur de recherche TF-IDF

- Questions évaluées : 30
- Bonne fiche en première position : 16 (53.3%)
- Bonne fiche dans les 3 premières : 23 (76.7%)

## Limites de cette évaluation

- Les exemples d'entraînement et le jeu de test ont été écrits par la même personne.
  Les vraies questions de recruteurs seront plus variées : ces chiffres sont optimistes.
- Le jeu de test est petit. Un écart d'une ou deux questions n'est pas significatif.
- Le moteur de recherche est évalué au niveau de la fiche, pas du passage exact.
