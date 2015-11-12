module Jekyll
	module ActiveLink
		def activelink(link, pagelink)
			if pagelink == link || pagelink == link+".html" || pagelink == link+"/index.html"
      	"active"
			else
				"inactive"
			end
		end

	end
end

Liquid::Template.register_filter(Jekyll::ActiveLink)