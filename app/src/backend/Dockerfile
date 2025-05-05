## Dockerfile
# This Dockerfile is for the backend of the SchoolBuddys application.
# It uses a multi-stage build to create a lightweight image for production.

# Use official lightweight Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies first (leverages Docker cache)
COPY package*.json ./
RUN npm install && npm install cors

# Copy remaining source code
COPY . .

# Expose the port the backend listens on
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
