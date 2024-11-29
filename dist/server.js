"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect('mongodb://antopolis:raTn5g1qAeU5b967@ac-tkbml57-shard-00-00.suciuav.mongodb.net:27017,ac-tkbml57-shard-00-01.suciuav.mongodb.net:27017,ac-tkbml57-shard-00-02.suciuav.mongodb.net:27017/antopolis?ssl=true&replicaSet=atlas-8nw49y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Level-2');
            console.log(config_1.default.database_url);
            app_1.default.listen(config_1.default.port, () => {
                console.log(`app is listening on port ${config_1.default.port}`);
            });
        }
        catch (err) {
            console.log(err);
        }
    });
}
main();
