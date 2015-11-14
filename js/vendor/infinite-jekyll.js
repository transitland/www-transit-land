//based on infinite jekyll, https://github.com/tobiasahlin/infinite-jekyll
//edited by Hanbyul Jo to make it fit to transit.land

$(function() {

  var postURLs,
      isFetchingPosts = false,
      shouldFetchPosts = true,
      postsToLoad = $(".post-list").children().length,
      loadNewPostsThreshold = 3000;
  
  // Load the JSON file containing all URLs
  $.getJSON('/all-posts.json', function(data) {
    postURLs = data["posts"];
    
    // If there aren't any more posts available to load than already visible, disable fetching
    if (postURLs.length <= postsToLoad)
      disableFetching();
  });
	
  // If there's no spinner, it's not a page where posts should be fetched
  if ($(".infinite-spinner").length < 1)
    shouldFetchPosts = false;
	
  // Are we close to the end of the page? If we are, load more posts
  $(window).scroll(function(e){
    if (!shouldFetchPosts || isFetchingPosts) return;
    
    var windowHeight = $(window).height(),
        windowScrollPosition = $(window).scrollTop(),
        bottomScrollPosition = windowHeight + windowScrollPosition,
        documentHeight = $(document).height();
    
    // If we've scrolled past the loadNewPostsThreshold, fetch posts
    if ((documentHeight - loadNewPostsThreshold) < bottomScrollPosition) {
      fetchPosts();
    }
  });
  
  // Fetch a chunk of posts
  function fetchPosts() {
    // Exit if postURLs haven't been loaded
    if (!postURLs) return;
    
    isFetchingPosts = true;
    
    // Load as many posts as there were present on the page when it loaded
    // After successfully loading a post, load the next one
    var loadedPosts = 0,
        postCount = $(".post-list").children().length,
        callback = function() {
          loadedPosts++;
          var postIndex = postCount + loadedPosts;
          if (postIndex > postURLs.length-1) {
            disableFetching();
            return;
          }
          if (loadedPosts < postsToLoad) {
            fetchPostWithIndex(postIndex, callback);
          } else {
            isFetchingPosts = false;
          }
        };
		
    fetchPostWithIndex(postCount + loadedPosts, callback);
  }
	
  function fetchPostWithIndex(index, callback) {
    var postURL = postURLs[index];
    $.get(postURL, function(data) {
      try {
        var postlist = $('.post-list');
        var wholePost = $(data).find('.post-wrapper');
        var postParagraphs = wholePost.html().split('<!-- more -->');
        if(postParagraphs.length > 1) {
          wholePost.html(postParagraphs[0]);
          wholePost.find('.post-content').append('<a class=\'col-xs-12 btn btn-default btn-transparent\' href=\''+postURL+'\'> Read more</a>');
        }
        $(wholePost.find('.date')).wrap('<a href = \"'+postURL+'\"></a>');

        wholePost.appendTo(postlist);
        var el = wholePost.find('.social-popup')[0];
        socialHandler.updateNewButton(el);

      } catch(e) { console.log(e);}
      callback();
    });
  }
  function disableFetching() {
    shouldFetchPosts = false;
    isFetchingPosts = false;
    $(".infinite-spinner").fadeOut();
  }
	
});
