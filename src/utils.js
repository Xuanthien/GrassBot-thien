require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('========================================'.cyan);
    console.log('=              Grass Bot               ='.cyan);
    console.log('=           Gangster of GPC            ='.cyan);
    console.log('=            Gay Par Chink             ='.cyan);
    console.log('========================================'.cyan);
    console.log();
  }

module.exports = { delay, displayHeader };
