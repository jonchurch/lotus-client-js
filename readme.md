This is my attempt at getting Lotus up and running to create a JS client lib for the API.

I hope it will help anyone else as a starting point.

## Usage

I've included a Dockerfile to start lotus and begin syncing the chain to devnet.

Build an image from the Dockerfile and tag it as `lotus-client`:

```shell
docker build -t lotus-client .
```

After it has been built, start the container by running the shell script I've included:

```shell
./dockerRun.sh
```

This will mount three volumes into the container. It will mount this directory and the JS client code at `/lotus-client-js`, as well as create a `.lotus` directory in the container at `/root/.lotus` and a `.lotusstorage` directory at `/root/.lotusstorage`. Both `.lotus` and `.lotusstorage` will be created in your current system's home folder if they don't already exist.

Lotus uses `.lotus` to store API information, as well as the blocks that it attempts to sync when the daemon is run.
