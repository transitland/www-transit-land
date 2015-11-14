## How to write a post

Transitland news/update (blog) follows a lot of [Mapzen blog](https://mapzen.com/blog). Mind that this process skips details and detailed explanation of each step. If you have problem running at first, please take a look at 'First time setup' part of Mapzen blog README. 

First, you pull the latest version of www-transit-land. Then

```
bundle install
```

inside of your directory. This installs Ruby dependancies that you need to create a new post.

```
bundle exec rake newpost "My post title"
```

What this does is it adds a sample Markdown file to the `_posts` directory, named `<timestamp>-my-post-title.md` (where the timestamp is today's date, in the format `YYYY-MM-DD`.) You can change this timestamp if you want to publish it on a different date.

Transitland blog supports the blog post without title, but for making permalink purpose, you still need to name your post in reasonable way. 

### Adding images

The `rake newpost` task has also created a folder for your images! It is located at `images/my-post-title/.` Drop any images you'd like into that folder. The image path is going to be

```
![image title](/images/my-post-title/my-image.jpg)
```

This is same with Mapzen blog, but different thing is that the *images should be pushed to the repo.* For the purpose of making the repo light, you can grab image address from Mapzen blog if your post is already in Mapzen's blog. 

### If your post doesn't need a title

Don't forget to set `isThereTitle` as `false`. It is inside of yaml part of the post, which is on the top of the blog post.

````
---
layout: page
title: 'Open Transit Data for All'
published: true
isThereTitle: false
category: news
---
```

### If your post is long

Transitland blog is infinite scroll style, so you probably want to split the post if yours is long. To split the post, put

```
<!-- more -->
```

at the point that you want to split. It is going to be like this.

```
blah balh something this paragraph is going to show up on the front page

<!-- more -->

People can read this part only when they clicked read more button
```




### If you are cross posting from Mapzen blog

You can just copy the markdown file then place it into `_posts` folder. 



