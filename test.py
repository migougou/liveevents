class Personne:
    def __init__(self, nom):
        self.nom = nom

p = Personne("Alice")
nouveau_nom = "Eve"

print(p.nom)

setattr(p, "nom", nouveau_nom)  # Met à jour la valeur de l'attribut "nom" avec "Eve"

print(p.nom)