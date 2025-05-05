# This Dockerfile is for a Telegram bot using Node.js
# It uses a lightweight Node.js image and installs dependencies

# then copies the source code
# Use official lightweight Node.js image/
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json first, then install dependencies
COPY package*.json ./
# This is to leverage Docker cache for faster builds
# Install dependencies
# RUN npm install && npm install cors

RUN npm install && npm install node-telegram-bot-api

# Now copy the rest of the source
COPY . .

# Expose the port the bot listens on
CMD ["node", "bot.js"]
