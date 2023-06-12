const express = require('express');
const { GraphQLClient } = require('graphql-request');

const app = express();
app.use(express.json());

const client = new GraphQLClient(
    process.env.ENDPOINT
);

app.get('/getCourses', async (req, res) => {
    const allCourses = `
    {
        courses {
          id
          name
          description
          url
          vote
          authors {
            name
          }
        }
    }
  `;

  const { courses } = await client.request(allCourses);

  res.json({ courses })
});

module.exports = app