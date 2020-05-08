FROM mariadb:10.3.22

MAINTAINER Todor ilievski

ENV MYSQL_USER root
ENV MYSQL_ALLOW_EMPTY_PASSWORD yes
ENV MYSQL_DATABASE setup_question_tool

COPY db.changelog-init.sql /docker-entrypoint-initdb.d/
EXPOSE 3306

