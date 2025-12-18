# Use an official Node.js runtime as a parent image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Build the app for production
RUN npm run build

# Install a simple static server to serve the built files
RUN npm install -g serve

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist"]
