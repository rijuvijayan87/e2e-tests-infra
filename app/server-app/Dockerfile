# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package*.json files
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Make port 9222 available to the world outside this container
EXPOSE 9222

# Define environment variable
ENV NODE_ENV production

ENTRYPOINT ["npm"]
# Set the command to run the index.ts file
CMD ["start"]