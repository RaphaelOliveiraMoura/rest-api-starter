
import configuration from './application.configuration';

type TestsConfigurationInterface = {
    endpoint: string
}

class TestsConfiguration{
    public configurations: TestsConfigurationInterface;

    constructor(){
        this.configurations = {
            'endpoint': configuration.endpoint
        }
    }
}

export default new TestsConfiguration().configurations;