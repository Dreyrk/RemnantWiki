#bin/bash

echo "# Start Test Script..."
docker compose -f ./back/docker-compose.test.yml up -d --build --force-recreate --quiet-pull &
PID=$!
wait $PID

echo "# Wait For Test To End..."
interval=2 
while true;
do
    echo "Waiting.. Retrying in 2s"
    sleep $interval
    containerlist=$(docker ps -a | grep Exited)
    case "$containerlist" in 
    *"api"*) 
        echo "Test Done !" 
        break;;
    esac
done

echo "# Watch The Test Output...\n\n"
result=$(docker logs dummy-api-test-api-1)
echo "$result"
case "$result" in 
*"problem"*)
    echo "Linter Have Failed :/" 
    exit 1;;
*"failing"*)
    echo "Some Unit Test Have Failed :/" 
    exit 1;;
*)
    echo "All Test Passed :)" 
    exit 0;;
esac
