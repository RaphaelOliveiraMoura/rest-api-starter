require('dotenv').config();

type ConfigurationInterface = {
    'enviroment': string,
    'host': string,
    'port': string|number
}

class Configuration{
    public configurantions: ConfigurationInterface;

    constructor(){
        this.configurantions = {
            'enviroment': process.env.ENV || 'development',
            'host': process.env.HOST || 'localhost',
            'port': process.env.PORT || 3003
        }
    }
}

export default new Configuration().configurantions;