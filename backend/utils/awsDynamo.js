// const AWS = require('aws-sdk');
// const { v4: uuidv4 } = require('uuid');

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION
// });

// const docClient = new AWS.DynamoDB.DocumentClient();

// const USERS_TABLE = process.env.DYNAMO_USERS_TABLE;
// const HISTORY_TABLE = process.env.DYNAMO_HISTORY_TABLE;
// const FEEDBACK_TABLE = process.env.DYNAMO_FEEDBACK_TABLE;

// async function getUserById(userId) {
//   const params = {
//     TableName: USERS_TABLE,
//     Key: { userId }
//   };
//   const res = await docClient.get(params).promise();
//   return res.Item;
// }

// async function createOrUpdateUser({ userId, email, name }) {
//   const now = new Date().toISOString();
//   const item = { userId, email, name, createdAt: now };
//   const params = { TableName: USERS_TABLE, Item: item };
//   await docClient.put(params).promise();
//   return item;
// }

// async function saveChat({ userId, prompt, response }) {
//   const now = new Date().toISOString();
//   const historyId = uuidv4();
//   const item = { historyId, userId, prompt, response, createdAt: now };
//   const params = { TableName: HISTORY_TABLE, Item: item };
//   await docClient.put(params).promise();
//   return item;
// }

// async function getHistoryByUser(userId, limit = 100) {
//   const params = {
//     TableName: HISTORY_TABLE,
//     IndexName: 'userId-createdAt-index',
//     KeyConditionExpression: 'userId = :u',
//     ExpressionAttributeValues: { ':u': userId },
//     ScanIndexForward: false,
//     Limit: limit
//   };

//   try {
//     const res = await docClient.query(params).promise();
//     return res.Items || [];
//   } catch (err) {
//     // fallback: scan filter (less efficient)
//     const scanParams = {
//       TableName: HISTORY_TABLE,
//       FilterExpression: 'userId = :u',
//       ExpressionAttributeValues: { ':u': userId }
//     };
//     const res = await docClient.scan(scanParams).promise();
//     return res.Items || [];
//   }
// }

// async function saveFeedback({ userId, stars, yearOfBirth, sex, country, state, comments }) {
//   const now = new Date().toISOString();
//   const feedbackId = uuidv4();
//   const item = { feedbackId, userId: userId || null, stars, yearOfBirth, sex, country, state: state || null, comments, createdAt: now };
//   const params = { TableName: FEEDBACK_TABLE, Item: item };
//   await docClient.put(params).promise();
//   return item;
// }

// async function getAllFeedbacks(limit = 1000) {
//   const params = { TableName: FEEDBACK_TABLE, Limit: limit };
//   const res = await docClient.scan(params).promise();
//   return res.Items || [];
// }

// module.exports = {
//   getUserById,
//   createOrUpdateUser,
//   saveChat,
//   getHistoryByUser,
//   saveFeedback,
//   getAllFeedbacks
// };

const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const docClient = new AWS.DynamoDB.DocumentClient();

const USERS_TABLE = process.env.DYNAMO_USERS_TABLE;
const HISTORY_TABLE = process.env.DYNAMO_HISTORY_TABLE;
const FEEDBACK_TABLE = process.env.DYNAMO_FEEDBACK_TABLE;


// -----------------------------
// USERS
// -----------------------------
async function getUserById(userId) {
  const params = {
    TableName: USERS_TABLE,
    Key: { userId },
  };
  const res = await docClient.get(params).promise();
  return res.Item;
}

async function createOrUpdateUser({ userId, email, name }) {
  const now = new Date().toISOString();
  const item = { userId, email, name, createdAt: now };
  const params = { TableName: USERS_TABLE, Item: item };
  await docClient.put(params).promise();
  return item;
}


// -----------------------------
// CHAT HISTORY (PK = id)
// -----------------------------
async function saveChat({ userId, prompt, response }) {
  const now = new Date().toISOString();
  const id = uuidv4();  // Must match your DynamoDB PK

  const item = {
    id,                // FIXED
    userId,
    prompt,
    response,
    createdAt: now,
  };

  const params = { TableName: HISTORY_TABLE, Item: item };
  await docClient.put(params).promise();
  return item;
}

async function getHistoryByUser(userId, limit = 100) {
  // Your table has NO GSI, so must use scan()
  const params = {
    TableName: HISTORY_TABLE,
    FilterExpression: "userId = :u",
    ExpressionAttributeValues: {
      ":u": userId,
    },
  };

  const res = await docClient.scan(params).promise();

  // sort newest → oldest
  return (res.Items || []).sort((a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt)
  );
}


// -----------------------------
// FEEDBACK (PK = id)
// -----------------------------
async function saveFeedback({ userId, stars, yearOfBirth, sex, country, state, comments }) {
  const now = new Date().toISOString();
  const id = uuidv4();  // Must match DynamoDB PK

  const item = {
    id,                    // FIXED
    userId: userId || null,
    stars,
    yearOfBirth,
    sex,
    country,
    state: state || null,
    comments,
    createdAt: now,
  };

  const params = { TableName: FEEDBACK_TABLE, Item: item };
  await docClient.put(params).promise();
  return item;
}

async function getAllFeedbacks(limit = 1000) {
  const params = { TableName: FEEDBACK_TABLE, Limit: limit };
  const res = await docClient.scan(params).promise();

  // Sort newest first
  return (res.Items || []).sort((a, b) =>
    new Date(b.createdAt) - new Date(a.createdAt)
  );
}


// -----------------------------
module.exports = {
  getUserById,
  createOrUpdateUser,
  saveChat,
  getHistoryByUser,
  saveFeedback,
  getAllFeedbacks,
};
