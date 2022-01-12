/* eslint-disable import/prefer-default-export */
import hre from 'hardhat';

import marmite from '../../src';

async function main() {
  await marmite(hre, async (flag) => {
    const Bar = await hre.ethers.getContractFactory('Bar');
    const bar = await Bar.deploy(42);

    const tx = await bar.deployTransaction;
    await flag('deployTransaction', tx);
  }, ['Immutable', 'Non-immutable']);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
