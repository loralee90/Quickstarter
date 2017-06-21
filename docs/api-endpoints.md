# API Endpoints

## HTML API

### Root
Loads React web app

- `GET /`

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Projects

- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### Rewards

- `DELETE /api/rewards/:id`
- `PATCH /api/rewards/:id`


### Pledges

<!-- send up either project or reward id -->
- `POST /api/pledges`

### Categories

- `GET /api/categories`
- `GET /api/categories/:id`
