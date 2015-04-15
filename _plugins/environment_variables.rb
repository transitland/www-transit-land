

# Plugin to add environment variables to the `site` object in Liquid templates
 
module Jekyll
 
  class EnvironmentVariablesGenerator < Generator
 
    def generate(site)
      site.config['env'] = ENV['TARGET'] || 'dev'
      # Add other environment variables to `site.config` here...
      if site.config['env'] == 'prod'
        site.config['url'] = '//transit.land/'
        site.config['playground_url'] = '//playground.transit.land/'
      elsif site.config['env'] == 'staging'
        site.config['url'] = '//staging.transit.land/'
        site.config['playground_url'] = '//staging.playground.transit.land/'
      else
        site.config['url'] = '/'
        site.config['playground_url'] = '//staging.playground.transit.land/'
      end
    end
 
  end
 
end
