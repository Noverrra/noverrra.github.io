module Drops
  class BreadcrumbItem < Liquid::Drop
    extend Forwardable

    def_delegator :@page, :data
    def_delegator :@page, :url

    def initialize(page, payload, hash = "", titleOverride = nil)
      @payload = payload
      @page = page
      @hash = hash
      @titleOverride = titleOverride
    end

    def title
      if @titleOverride.nil?
        then @page.data["breadcrumb"] != nil ? @page.data["breadcrumb"] : @page.data["title"]
      else
        @titleOverride
      end
    end

    def namespace
      @page.data["namespace"]
    end

    def getUrlHash
      @hash
    end
  end
end
