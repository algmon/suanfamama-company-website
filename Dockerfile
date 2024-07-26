# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Docusaurus site
# Define the version as a build argument
ENV VERSION=1.0.0
RUN yarn build

# Expose the port for the Docusaurus server
EXPOSE 3000

# Start the Docusaurus server
CMD ["yarn", "start"]