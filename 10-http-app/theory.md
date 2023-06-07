# Theory

Para arreglar el problema de la inicialización del local host en el puesto 3001 y a la vez correr la app en vite he tenido que instalar una nueva dependencia:
    1. npm install concurrently --save-dev
    2. En el package.json -> "scripts": {
        "dev": "vite",
        "server": "json-server server/db.json --port 3001",
        "start": "concurrently \"npm run dev\" \"npm run server\""
    }
    3. npm start
Y con esto ha funcionado y me corre la app tanto para el local como para vite.
Para obtener la respuesta he usado chatGPT
