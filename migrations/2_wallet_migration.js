const Wallet = artifacts.require('Wallet');

module.exports = function (deployer, accounts) {
    address = [
        '0x47ea1058a505208936e7d60e5a8b40156bfe4dd6',
        '0x34480cc990cf5be08edd193f87684581d84a3f36',
        '0x9ace1641b81fb2729c98ca1d53361145f5dcc6f5',
    ];
    uint = 2;
    const userAddress = accounts[(0, 1, 2)];
    deployer.deploy(
        Wallet,
        [
            '0x47ea1058a505208936e7d60e5a8b40156bfe4dd6',
            '0x34480cc990cf5be08edd193f87684581d84a3f36',
            '0x9ace1641b81fb2729c98ca1d53361145f5dcc6f5',
        ],
        2
    );
};
