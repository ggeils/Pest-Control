const db = require('../config/connection');
const { User, Bug } = require('../models');
// seed json files
const userSeeds = require('./userSeeds.json');
const bugSeeds = require('./bugSeeds.json');

db.once('open', async () => {
    await User.deleteMany({});
    await Bug.deleteMany({});
       
    // bulk create each model
    const users = await User.create(userSeeds);
    const bugs = await Bug.create(bugSeeds);

    for (newbug of bugs) {
        // randomly add each class to a school
        const tempuser = users[Math.floor(Math.random() * users.length)];
        tempuser.bugs.push(newbug._id);
        await tempuser.save();
    }

    // all done
    console.log('all done!');
    process.exit(0);
});