## Near Billboard

Demo link: [https://vitabread.github.io/near-billboard/](https://vitabread.github.io/near-billboard/)
Near billboard is a place that user can make promises in the DApp with deposit to the smart contract. The promise receiver (to) can release the deposit to the sender (from) if the promise is met. If the user is not the receiver, he/she is not allowed to release the deposit. Once the promise is completed and the deposit is released, the promise will be marked as released.

## Changes Log - version 0.2

### Added due block index to promise class
### Function - Rescind Promise: the promise creator can rescind the promise if the promise is not yet overdue. Half of the deposit amount will be refunded to creator and the other half will be forfeited and keep in the smart contract.
### Function - Transfer Deposit: if the promise's due block index is met, the receiver have the choice to transfer the deposit to his/her own account.
### Re-layout the UI to make information more clear and better experience.
