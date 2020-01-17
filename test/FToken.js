const {
    BN
} = require('openzeppelin-test-helpers');
const { expect } = require('chai');

const FToken = artifacts.require('FToken');

contract('test ftoken', async () => {
    it('checking get name', async () => {
        this.ftoken = await FToken.new("Bitcoin","BTC",18);
        expect(await this.ftoken.name.call()).equal('Bitcoin');
    });
});
