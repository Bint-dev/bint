# Usa la imagen oficial de Node.js versión 22
FROM node:22.8.0

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto 5000
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
