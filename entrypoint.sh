#!/bin/sh
while inotifywait \
  -e modify \
  -e move \
  -e create \
  -e delete \
  -r /specs; do
  java -jar /opt/$SWAGGER_CODEGEN_JAR help
done
