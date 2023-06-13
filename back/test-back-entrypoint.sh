#bin/bash

echo "\n###\n# Launch API...\n###"
nohup npm run dev &
echo "\n###\n# Launch Units Tests...\n###"
npm run mocha &
PID2=$!
wait $PID2
