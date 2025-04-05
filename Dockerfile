FROM node:18

RUN npm install -g expo-cli


WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./
RUN npm install || yarn install


COPY . .

EXPOSE 8081

# Start the Expo app
CMD ["npx", "expo", "start", "--tunnel"]
