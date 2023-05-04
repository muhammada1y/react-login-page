# Use an official Node.js image as the base image

 

FROM node:18.12.1

# Set the working directory in the image
WORKDIR /frontendapp

# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the image
COPY . .

# Specify the command to run when the container starts
CMD [ "npm", "start" ]
