

# Plugin to add environment variables to the `site` object in Liquid templates
 
module Jekyll
 
  class EnvironmentVariablesGenerator < Generator
 
    def generate(site)
      site.config['env'] = ENV['TARGET'] || 'local'
      # Add other environment variables to `site.config` here...
      if site.config['env'] == 'prod'
        site.config['url'] = '//transit.land/'
        site.config['playground_url'] = '//transit.land/playground'
      elsif site.config['env'] == 'staging'
        site.config['url'] = '//dev.transit.land/'
        site.config['playground_url'] = '//dev.transit.land/playground'
      elsif site.config['env'] == 'local'
        site.config['url'] = '//localhost:4000/'
        site.config['playground_url'] = '//localhost:4001'
      end
    end
 
  end
 
end
