## versus-fighting-improvement-app :iphone:

- Contributor: Arnaud-Adon
- version: 1.0
- status: En cours
- Raisons: :video_game: Grand amateur de jeu de combat, j'ai voulu me développer un outils me permettant de progressé sur un titre, qu'il soit facilement accéssible, d'où le choix porté sur mobile

## Description
Une application mobile composé de notes par personnage, pour permettre de s'améliorer sur un jeu de combat, pour le moment centralisé sur le jeu de combat Street Fighter 5

- Sélection de un ou plusieurs personnages
- Possibilité de créer, modifier, supprimmer une note par personnage en fonction d'un adversaire choisi
- Statistiques globales: nombres de matchs effectués, ratio, etc...
- videos youtube en relation avec le personnage sélectionné

<img width="396" alt="ImprovePage" src="https://user-images.githubusercontent.com/17828383/122561707-78522380-d042-11eb-8398-36245987a114.png"> <img width="396" alt="ImprovePage" src="https://user-images.githubusercontent.com/17828383/122561828-99b30f80-d042-11eb-9877-3ac6d2833b2c.png">

<img width="396" alt="ImprovePage" src="https://user-images.githubusercontent.com/17828383/122561901-b0f1fd00-d042-11eb-8c03-11eb392bac2c.png"> <img width="396" alt="ImprovePage" src="https://user-images.githubusercontent.com/17828383/122561984-c9faae00-d042-11eb-9148-c99324f8dab9.png">


## Stack Technique

La stack est séparé sous deux différents repository

Client

🔗  Lien vers la patie client - [ICI](https://github.com/Arnaud-Adon/versus-fighting-improvement-app-client)

  - Expo: v40.0.0
  - React Native - Hooks
  - Redux - thunk

Serveur

🔗  Lien vers la partie server - [ICI](https://github.com/Arnaud-Adon/versus-fighting-improvement-app-server)

  - Node Js: v14.11.0
  - ExpressJs
  - Cluster MongoDB Atlas sous AWS
  - Base de donnée MongoDB avec Mongoose pour le relationnel
  - Passport JS pour l'authentification
  - Hébergement sur HEROKU

## Framework et Librairie de test
- Jest
- SuperTest
- Testing library

## Intégration continue

Intégration continu de la partie client et serveur via Circle CI

## déploiement continue

Serveur

- Via Circle CI vers la plateforme Heroku
  
## Changelog

v1.0.0

- Fonctionnalité
 
