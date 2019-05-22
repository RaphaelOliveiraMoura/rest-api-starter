module.exports = api => {
    // There is is possible use 'isTest' variable to determine what presets and plugins to use.
    const isTest = api.env('test');

    return {
        presets: [
            ['@babel/preset-env', { targets: { node: '10.15.3' } }],
            '@babel/preset-typescript',
        ],
    };
};