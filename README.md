# Orders & Products App

**Author**: Tkachov Oleksandr
**Email**: [kreker2112@gmail.com](mailto:kreker2112@gmail.com)

## Description

Orders & Products App is an application that includes a server-side implemented with Node.js and Express, and a client-side built with Vue.js. The application supports real-time communication using WebSocket (Socket.io) and is styled with Bootstrap.

## Project Structure

- **Server** (`/server`)
  Built with Node.js, using `Express`, `Socket.io`, and `Winston` for logging.
- **Client** (`/client`)
  Developed with Vue 3, utilizing `Vuex` for state management, `Vue Router` for routing, and `Bootstrap` along with `Bootstrap Icons` for styling.

- **Docker**
  The project supports containerization using Docker with separate Dockerfiles for the server and client. Containers are built and managed using `docker-compose`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kreker2112/orders-products-app.git
   cd orders-products-app
   ```

2. Install dependencies:

   ### For the server:

   ```bash
   cd server
   npm install
   ```

   ### For the client:

   ```bash
   cd ../client
   yarn install
   ```

## Running in Development Mode

1. **Start the server:**

   ```bash
   cd server
   node server.js
   ```

2. **Start the client:**

   ```bash
   cd ../client
   yarn serve
   ```

3. The application will be available at: `http://localhost:8080`.

## Containerization

The project supports two containerization modes:

### 1. Local Development

To create and run containers in local development mode:

1. Navigate to the project's root directory:

   ```bash
   cd /path/to/orders-products-app/scripts
   ```

2. Run the script:

   ```bash
   ./start-dev.sh
   ```

3. The application will be available at: `http://localhost`.

### 2. Production

To create and run containers in production mode:

1. Navigate to the project's root directory:

   ```bash
   cd /path/to/orders-products-app/scripts
   ```

2. Run the script:

   ```bash
   ./start-prod.sh
   ```

3. The application will be available at: `http://<your IP or domain>`.

## Technologies Used

- **Client**:

  - Vue.js 3
  - Vue Router
  - Vuex
  - Bootstrap
  - SCSS

- **Server**:

  - Node.js
  - Express
  - Socket.io
  - Winston

- **Containerization**:
  - Docker
  - Docker Compose

## Contact

If you have any questions or suggestions, feel free to contact me at [kreker2112@gmail.com](mailto:kreker2112@gmail.com).
