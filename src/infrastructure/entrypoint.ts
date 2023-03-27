import {buildServer} from "@infrastructure/drivers/express/server";

const app = buildServer();
app.listen(8000, '127.0.0.1', () => {
    console.log('Started on port 8000');
});