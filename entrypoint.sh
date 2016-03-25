#!/bin/sh
while inotifywait \
  -r $SPECS_DIR; do
  java -jar /opt/$SWAGGER_CODEGEN_JAR generate \
    -i $SPECS_FILE \
    -l $SRC_LANG \
    -o $SRC_DIR
done
