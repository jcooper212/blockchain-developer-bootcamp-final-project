# avoiding attack vectors - blockchain-developer-bootcamp-final-project

The following  patterns are applied for avoiding attack vectors


## Avoiding Attack Vector #1
## SWC-103 (Floating Pragma)

Description
Contracts should be deployed with the same compiler version and flags that they have been tested with thoroughly. Locking the pragma helps to ensure that contracts do not accidentally get deployed using, for example, an outdated compiler version that might introduce bugs that affect the contract system negatively.

## SWC-100 (Function Default Visibility)
Description
Functions that do not have a function visibility type specified are public by default. This can lead to a vulnerability if a developer forgot to set the visibility and a malicious user is able to make unauthorized or unintended state changes.
