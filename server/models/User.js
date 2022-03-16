const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

/* username: string
 * email: string
 * password: string
 * bug: ref: Bug
 * * userProfile: 
 * * name: string
 * * jobTitle: string
 * * company: String
 * * currentProject: string
 * * bugsFixed: integer
 * 
 * .virtual(bugsReported)
 */
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    bugs: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Bug',
        },
    ],
    // User profile area
    name: {
        type: String,
        maxlength: 50,
        minlength: 2,
    },
    jobTitle: {
        type: String,
        maxlength: 180,
        minlength: 2,
    },
    company: {
        type: String,
        maxlength: 50,
        minlength: 2,
    },
    currentProject: {
        type: String,
        maxlength: 180,
        minlength: 2,
    },
    bugsFixed: {
        type: Number,
    },
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual called `bugsReported` 
userSchema
    .virtual('bugsReported')
    .get(function () {
        return this.bugs.length;
    });

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// initialized the user Model
const User = model('User', userSchema);

module.exports = User;