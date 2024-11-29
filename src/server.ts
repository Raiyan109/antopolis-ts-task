import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
    try {
        await mongoose.connect('mongodb://antopolis:raTn5g1qAeU5b967@ac-tkbml57-shard-00-00.suciuav.mongodb.net:27017,ac-tkbml57-shard-00-01.suciuav.mongodb.net:27017,ac-tkbml57-shard-00-02.suciuav.mongodb.net:27017/antopolis?ssl=true&replicaSet=atlas-8nw49y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Level-2');
        console.log(config.database_url);


        app.listen(config.port, () => {
            console.log(`app is listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();