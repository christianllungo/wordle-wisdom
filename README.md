# Wordle Wisdom

Wordle Wisdom is a variant of the original game Wordle, where players guess a secret five-letter word by trial and error. In this variant, only words with positive connotations are used, including Christian terms and old language such as "selah". However, some neutral words are also included, as they can still be used to find edifying interesting facts. At the end of the game, the secret word is revealed together with its definition, and an interesting fact.

The purpose of this project is to provide a fun and educational game for people to learn new positive words or know the meanings of words they already know. The game also features authentication and authorization, where users can create an account and save their game progress.

## Technologies Used

The Wordle Wisdom app was built using the following technologies:
- Backend API: NestJS
- Frontend: React
- Database: MySQL
- Object-Relational Mapping (ORM): TypeORM
- Authentication and Authorization: NestJS Guards
- URL Routing: React Router DOM
- Deployment: Heroku

## Installation

1. Clone the repository to your local machine
2. Install dependencies with `npm install`
3. Create a .env file with the necessary environment variables
4. Run the app with `npm run start:dev`

## Environment Variables

- JWT_SECRET: The secret key used for jwt
- DB_HOST
- DB_PORT
- DB_USERNAME
- DB_PASSWORD
- DB_NAME

## License

Wordle Wisdom is licensed under the [MIT licensed](LICENSE).
