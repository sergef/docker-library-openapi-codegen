FROM %DOCKER_REGISTRY%docker-library-jre8

MAINTAINER Serge Fomin <serge.fo@gmail.com>

ENV SWAGGER_CODEGEN_URL http://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.1.5/
ENV SWAGGER_CODEGEN_JAR swagger-codegen-cli-2.1.5.jar

RUN apk update \
  && apk add inotify-tools \
  && rm -rf /tmp/* /var/cache/apk/*

RUN mkdir /specs \
  && mkdir /src

VOLUME /specs
VOLUME /src

WORKDIR /src

COPY entrypoint.sh /opt
RUN chmod +x /opt/entrypoint.sh

ADD $SWAGGER_CODEGEN_URL$SWAGGER_CODEGEN_JAR /opt

ENTRYPOINT /opt/entrypoint.sh
