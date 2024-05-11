// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

contract TestContract  {
    constructor() {}

    function execute(int256 amount0Delta, int256 amount1Delta, bool zeroForOne) external view returns (uint256 amount, uint256 converted, uint256 newAmount) {
        amount = uint256(-(zeroForOne ? amount1Delta : amount0Delta));
        converted = uint256(zeroForOne ? amount1Delta : amount0Delta);
        newAmount = type(uint256).max - converted;
    }
}
