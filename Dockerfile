# Start from an official Node base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency manifests first (better build caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy the rest of the app
COPY . .

# The app listens on this port
EXPOSE 3000

# Command to start the server when the container runs
CMD ["node", "src/server.js"]
