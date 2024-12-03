# Use an official node image for Node.js 22
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_USER_ID
ARG VITE_GITHUB
ARG VITE_FACEBOOK
ARG VITE_LINKEDIN
ARG VITE_TWITTER
ENV VITE_SERVICE_ID=$VITE_SERVICE_ID
ENV VITE_TEMPLATE_ID=$VITE_TEMPLATE_ID
ENV VITE_USER_ID=$VITE_USER_ID
ENV VITE_GITHUB=$VITE_GITHUB
ENV VITE_FACEBOOK=$VITE_FACEBOOK
ENV VITE_LINKEDIN=$VITE_LINKEDIN
ENV VITE_TWITTER=$VITE_TWITTER
RUN npm run build

# Use a lightweight web server to serve the build files
FROM nginx:1.27.3-alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
