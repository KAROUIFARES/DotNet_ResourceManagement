# Stage 1 : Builder l'application Angular
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2 : Servir l'application à l'aide de NGINX
FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html
