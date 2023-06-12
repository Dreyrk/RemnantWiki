#bin/bash

echo "\n###\n# Starting Mongo Container...\n###"
docker compose -f docker-compose.dev.yml --env-file ./.env up -d &
PID=$!
wait $PID
echo "\n###\n# Install deps...\n###"
npm i &
PID2=$!
wait $PID2
echo "\n###\n# Run Seed...\n###"
node ./seed.js &
PID3=$!
wait $PID3
echo "\n###\n# Launch API...\n###"
npm run dev