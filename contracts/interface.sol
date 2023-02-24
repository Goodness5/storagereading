// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

//address = 0xb6364550499baca567Ae0fb361b20AA5b908de2a;
interface Ifirst {
    function getTokenInfo(uint256 _tokenId) external view returns (    bytes32, uint128, uint128);

}

//address =0x080c23415Bd7f11fd8CAea9D132a89E866028AF3
interface Isecond {
    function getFreeMints(address owner) external view returns (uint256);
}

// address =0xFF7D5c7dA613A91f31915c7bf6F4ab07a2B37EE9
interface Ithird {
     function getMintLimitInfo() external view returns
      (uint256 currentLimit, uint256 rate, uint256 maximum);
}

// address = 0xfb56F5F6D8D0A712778D82127B25b8533426D785
interface Ifourth {
    function hasMinted(address account) external view returns (uint256);
}

// address = 0x7e897a5FDc03F0E2Cf24b5A7e28B6439F3194de7
interface Ififth {
    function totalSupply() external view returns (uint256);
}