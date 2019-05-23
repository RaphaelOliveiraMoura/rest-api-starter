
type TestsConfigurationInterface = {
    endpoint: string
}

class TestsConfiguration{
    public configurations: TestsConfigurationInterface;

    constructor(){
        this.configurations = {
            'endpoint': '/api/v1'
        }
    }
}

export default new TestsConfiguration().configurations;