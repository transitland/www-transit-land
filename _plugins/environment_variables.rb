

# Plugin to add environment variables to the `site` object in Liquid templates
 
module Jekyll
 
  class EnvironmentVariablesGenerator < Generator
 
    def generate(site)
      site.config['env'] = ENV['TARGET'] || 'dev'
      # Add other environment variables to `site.config` here...
      if site.config['env'] == 'prod'
        site.config['url'] = '//transit.land/'
        site.config['playground_url'] = '//transit.land/playground'
      else
        site.config['url'] = '//dev.transit.land/'
        site.config['playground_url'] = '//dev.transit.land/playground'
      end
    end
 
  end
 
end
