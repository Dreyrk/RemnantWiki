#bin/bash

echo "\n###\n# Launch API...\n###"
nohup npm start &
echo "\n###\n# Populate DB with seed...\n###"
node ./seed.js
PID=$!
wait $PID
