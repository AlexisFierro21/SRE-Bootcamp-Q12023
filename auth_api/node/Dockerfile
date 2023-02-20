FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm i

# Bundle app source
COPY . .

# App must run on port 8000
EXPOSE 8000

# Run the server
CMD [ "npm", "start" ]

