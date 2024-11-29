import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(config.database_url);


        app.listen(config.port, () => {
            console.log(`app is listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();