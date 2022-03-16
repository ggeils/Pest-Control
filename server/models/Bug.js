const { Schema, model } = require('mongoose');
const dateFormat = require('../../client/src/utils/dateFormat');

/* bugName: string
 * productName: string
 * date: Date.now
 * severity: string ( low || medium || High)
 * description: string
 * reproduction: string
 * status: string (Open || Closed) 
 *  default: open
 */
const bugsSchema = new Schema({
    bugName: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
    },
    productName: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
    },
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    severity: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength:280,
    },
    reproduction: {
        type: String,
        required: true,
        minlength: 1,
        maxlength:280,
    },
    status: {
        type: String,
        required: true,
        default: 'open',
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//initialize the BUG schema model
const Bug = model('Bug', bugsSchema);

module.exports = Bug;
