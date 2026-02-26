# Docker: serve DWEC_25_26 with directory listing

This project runs a web server in a Docker container that serves the contents of [pbarrabes/DWEC_25_26](https://github.com/pbarrabes/DWEC_25_26). The root URL shows an **Index of /** directory listing.

## Start Docker Daemon

```bash
sudo systemctl start docker
```

## Build and run

The repository URL is configurable at build time. Omitting it uses the default (pbarrabes/DWEC_25_26).

**With Docker:**

```bash
docker build -t docker-ficheros .
docker run -d -p 8080:80 docker-ficheros
docker stop <container_id>
```

To serve a different repo, pass the URL when building:

```bash
docker build -t docker-ficheros --build-arg REPO_URL=https://github.com/user/other-repo.git .
docker run -d -p 8080:80 docker-ficheros
```

Use `-d` so the container runs in the background and does not exit when the terminal is resized (SIGWINCH). To stop it: `docker stop <container_id>`.

## Check Docker containers

```bash
docker ps -a
```

**With Docker Compose:**

```bash
docker compose up --build
```

To use a different repo, set `REPO_URL` when building (e.g. `REPO_URL=https://github.com/user/other-repo.git docker compose up --build`) or in a `.env` file in the project directory.

Then open **http://localhost:8080** in your browser to see the directory index (README.md, UD1/, UD2/, UD 3/, etc.).
