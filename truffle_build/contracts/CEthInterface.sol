pragma solidity ^0.8.0;

interface CEthInterface {
  function mint() external payable;
  function redeemUnderlying(uint redeemAmount) external view returns (uint);
  function balanceOfUnderlying(address owner) external returns(uint);
}
