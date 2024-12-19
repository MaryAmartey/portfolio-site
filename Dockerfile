# Stage 1: Build the Vite app
FROM node:16 as build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx.conf to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the default HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

