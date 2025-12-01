# --- Stage 1: Build the React (Vite) app ---
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Vite app
RUN npm run build

# --- Stage 2: Serve using Nginx ---
FROM nginx:stable-alpine

# Remove default Nginx HTML
RUN rm -rf /usr/share/nginx/html/*

# Copy built files to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config (optional)
# ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
