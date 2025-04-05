# 📱 PartyApp - React Native + Expo (Dockerized)

Este proyecto es una aplicación móvil construida con **React Native usando Expo**, y está completamente dockerizada para facilitar su ejecución sin necesidad de instalar dependencias locales.

---

## 🚀 Requisitos

Asegúrate de tener instalados:

- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

---

## 📦 Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/PartyApp.git
cd PartyApp
```

🐳 Construir la imagen Docker

```bash
docker build -t party-app .
```

▶️ Ejecutar el contenedor

```bash
docker run -it -p 8081:8081 --name party-container party-app
```

Esto iniciará el servidor de desarrollo de Expo. Verás un QR code en la terminal que puedes escanear con la app Expo Go en tu celular para probar la app.
💡 Asegúrate de estar conectado a internet y en la misma red Wi-Fi que tu dispositivo móvil.

🛑 Detener y eliminar el contenedor

```bash
docker stop party-container
docker rm party-container
```
