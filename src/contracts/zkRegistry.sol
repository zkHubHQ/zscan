// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract ZkRegistry {
    struct ZkData {
        string zKey;
        address verifierContract;
    }

    mapping(string => ZkData) private registry;

    // Event to emit when a new zkData is registered
    event ZkDataRegistered(string indexed key, string zKey, address verifierContract);

    // Function to register zkData
    function registerZkData(string memory key, string memory zKey, address verifierContract) public {
        registry[key] = ZkData(zKey, verifierContract);
        emit ZkDataRegistered(key, zKey, verifierContract);
    }

    // Function to retrieve zkData
    function getZkData(string memory key) public view returns (string memory, address) {
        ZkData storage zkData = registry[key];
        return (zkData.zKey, zkData.verifierContract);
    }
}
