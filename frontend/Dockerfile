# Étape de construction
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape de production
FROM nginx:latest
COPY --from=build /app/dist/frontend /usr/share/nginx/html
