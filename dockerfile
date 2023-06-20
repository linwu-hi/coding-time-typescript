

FROM nginx

ENV BASE=true

COPY ./dist /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf