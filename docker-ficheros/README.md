# Docker: serve DWEC_25_26 with directory listing

This project runs a web server in a Docker container that serves the contents of [pbarrabes/DWEC_25_26](https://github.com/pbarrabes/DWEC_25_26). The root URL shows an **Index of /** directory listing.

## Build and run

**With Docker:**

```bash
docker build -t dwec-server .
docker run -d -p 8080:80 dwec-server
```

Use `-d` so the container runs in the background and does not exit when the terminal is resized (SIGWINCH). To stop it: `docker stop <container_id>`.

**With Docker Compose:**

```bash
docker compose up --build
```

Then open **http://localhost:8080** in your browser to see the directory index (README.md, UD1/, UD2/, UD 3/, etc.).
