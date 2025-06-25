# Utiliza la imagen oficial de Node.js como base para el contenedor
# Esta imagen incluye Node.js y npm preinstalados
# Puedes especificar la versión de Node.js según los requisitos de tu proyecto
FROM node:20.19

# Establece el directorio de trabajo dentro del contenedor
# Todos los comandos siguientes se ejecutarán desde este directorio
WORKDIR /usr/src/app


# Copia los archivos de dependencias (package.json y package-lock.json) al contenedor
# Esto permite instalar las dependencias antes de copiar el resto del código,
# aprovechando la cache de Docker para acelerar las reconstrucciones
COPY package*.json ./

# Instala las dependencias del proyecto utilizando npm
RUN npm install


# Copia el resto del código fuente de la aplicación al contenedor
COPY . .

# ENV PORT=${APP_PORT}
# EXPOSE ${PORT}
# Expone el puerto en el que la aplicación escuchará dentro del contenedor
# Esto permite mapear el puerto al host cuando se ejecuta el contenedor
EXPOSE 3001


# Define el comando por defecto para ejecutar la aplicación cuando el contenedor se inicie
CMD [ "node", "app.js" ]





