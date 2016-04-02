

# Plugin to add environment variables to the `site` object in Liquid templates

module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['env'] = ENV['TARGET'] || 'local'
      # Add other environment variables to `site.config` here...
      if site.config['env'] == 'prod'
        site.config['url'] = 'https://transit.land/'
      elsif site.config['env'] == 'staging'
        site.config['url'] = 'https://dev.transit.land/'
      elsif site.config['env'] == 'local'
        site.config['url'] = nil
      end
    end

  end

end
