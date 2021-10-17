# Earthdawn front end site

## Local running instructions

-   Install nginx ( `brew install nginx` )
    -   commands:
        -   background:
            `brew services start nginx`
            `brew services stop ngix`
        -   direct start/stop
            `sudo nginx`
            `sudo nginx -s stop`
            `sudo nginx -t` <-- validates the conf file

## Hosting will need to be on same domain

Local host url in `nginx` setup: `http://local.earthdawn.com/`
