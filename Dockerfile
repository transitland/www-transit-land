FROM ruby:2.2.3
RUN apt-get update -qq && apt-get install -y build-essential
RUN mkdir /www
WORKDIR /www
ADD . /www
ADD Gemfile /www/Gemfile
ADD Gemfile.lock /www/Gemfile.lock
RUN bundle install
RUN apt-get update && \
    apt-get -y install nginx && \
    apt-get -y install nodejs

RUN bundle exec jekyll build --destination /var/www/html
CMD nginx -g 'daemon off;'
