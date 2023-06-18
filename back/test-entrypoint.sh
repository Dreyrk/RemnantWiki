#bin/bash

echo "\n###\n# Launch API...\n###"
nohup npm start &
echo "\n###\n# Launch Units Tests...\n###"
npm run mocha &
PID=$!
wait $PID
