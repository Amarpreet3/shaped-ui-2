const express = require('express');
const { execSync } = require('child_process');
const yaml = require('js-yaml');
const cors = require('cors');

const app = express();
const PORT = 5000;

const API_KEY = "0QgBxIDhZB3oCmkzcdVSa747isLDpkSz6cSkK5NT";

app.use(cors());

app.get('/api/rank', (req, res) => {
  try {
    execSync(`shaped init --api-key "${API_KEY}"`);
    const output = execSync(
      `shaped rank --model-name hackernews_interactions_posts --user-id post44279181 --limit 10 --return-metadata`,
      { encoding: 'utf8' }
    );

    const parsed = yaml.load(output);
    res.json(parsed);
  } catch (error) {
    res.status(500).json({ error: error.message, stack: error.stack });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
