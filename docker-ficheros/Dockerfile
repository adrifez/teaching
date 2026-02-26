FROM httpd:2.4-alpine

# Install git to clone the repository
RUN apk add --no-cache git

# Repository URL (override with: docker build --build-arg REPO_URL=...)
ARG REPO_URL=https://github.com/pbarrabes/DWEC_25_26.git

# Clone the repo and copy its contents into the document root
RUN git clone --depth 1 "${REPO_URL}" /tmp/repo && \
    rm -rf /usr/local/apache2/htdocs/* && \
    cp -r /tmp/repo/. /usr/local/apache2/htdocs/ && \
    rm -rf /usr/local/apache2/htdocs/.git /tmp/repo

# Enable directory listing (Index of /)
COPY httpd-autoindex.conf /usr/local/apache2/conf/extra/httpd-autoindex.conf

EXPOSE 80
