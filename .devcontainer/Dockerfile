FROM mcr.microsoft.com/devcontainers/universal:2-linux

USER root

RUN rm -f \
      /etc/apt/sources.list.d/yarn.list \
      /usr/share/keyrings/yarn.gpg \
      /usr/share/keyrings/yarn-archive-keyring.gpg \
    && apt-get update \
    && rm -rf /var/lib/apt/lists/*
