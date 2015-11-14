require 'rubygems'
require 'optparse'
require 'yaml'
require 'fileutils'

desc "creates a new post"
task :newpost do
  OptionParser.new.parse!
  ARGV.shift
  title = ARGV.join(' ')
  title_normalized = title.downcase.gsub(/[^[:alnum:]]+/, '-')

  path = "_posts/#{Date.today}-#{title_normalized}.md"
  home_dir = Dir.respond_to?(:home) ? Dir.home : ENV['HOME']

  YAML.to_yaml(options = {:line_width => -1})

  example_post = <<-EOF

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec condimentum eros, at venenatis orci. Vestibulum scelerisque libero nisl. Sed tristique, purus eu condimentum volutpat, nisi erat mollis justo, id blandit velit augue quis elit. Aliquam a quam vestibulum, vestibulum enim eget, vehicula augue. Fusce eget eleifend neque. Nam nec elit non nisl placerat hendrerit. In fermentum placerat mauris, id pretium enim volutpat eget. Ut sit amet vehicula lacus. Vivamus posuere varius erat, quis consequat enim auctor vitae.

### Heading

Nulla commodo rhoncus nisl sit amet congue. Cras bibendum sem in consectetur venenatis. Nam fermentum diam non risus fringilla, ut bibendum sapien pretium. Duis sed auctor odio, at tempor erat. Integer eu imperdiet lacus. Suspendisse suscipit tortor vel mattis faucibus. Sed porttitor mauris nec mi consectetur, a imperdiet magna tempus.

#### Formatting text

Sed hendrerit in erat quis pulvinar. Aenean gravida bibendum quam, eu tristique nunc fringilla sit amet. Suspendisse potenti. Vivamus euismod suscipit odio, eget rutrum arcu vulputate id. Nunc vitae tortor leo. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque nec porta odio. Praesent sagittis ex nec condimentum ullamcorper. Integer facilisis sem vitae nulla bibendum faucibus. In placerat, nisi eu lacinia efficitur, mauris nisi mattis est, ac varius leo lacus sed erat. Cras quis magna purus.

##### Bold

**strong** or __strong__

##### Italics

*italic* or _italic_

##### Links

You can link to things, like [this Markdown guide.](https://guides.github.com/features/mastering-markdown/)

#### Adding images, captions, bullets, code, and quotes

![screen-reader accessible "alternate text" for image](/images/#{title_normalized}/my-image.jpg)

<p class='caption'>If needed, add a caption underneath images for additional descriptive text and attribution.</p>

* Start a line with an asterisk to create a list.
* This is the second list item.

<quote>“This is a quotation.” ―Michael Scott</quote>

##### Code

`littleCode()`

{% highlight javascript %}
if (you === senstiveToLanguageType) {
  console.log('You can use language highlight');
}
{% endhighlight %}

    else
      you can use this block.

###### End note

  EOF
  if File.exist?(path)
    puts "[WARN] A post with this file name exists already!"
  else
    File.open(path, "w") do |file|
      file.puts YAML.dump({
        'layout' => 'page',
        'category' => 'news',
        'published' => false,
        'isThereTitle' => true,
        'title' => title
        },
        :line_width => -1
      )
      file.puts "---"
      file.puts example_post
    end

    # Create a folder in the image directory for this post.
    FileUtils.mkdir_p("images/#{title_normalized}")

    # Run a text editor, if found (default Sublime Text)
    config = {'editor' => 'subl'}
    file = `which #{config['editor']} 2> /dev/null`.chomp
    if $?.to_i == 0 and File.exists?(file)
      begin
      `#{config['editor']} #{path}`
      rescue Exception
        puts "[WARN] Could not find editor #{config['editor']} - please edit #{path} manually"
      end
    else
      puts "[WARN] Could not find editor #{config['editor']} - please edit #{path} manually"
    end
  end

  exit 1
end

desc "Alias for newpost"
task :np => :newpost