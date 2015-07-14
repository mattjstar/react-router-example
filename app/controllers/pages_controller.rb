class PagesController < ApplicationController
  include HighVoltage::StaticPage

  def pricing
    @page_scripts = ['pricing']
    @page_styles = ['pricing']

    @page_path = request.env['PATH_INFO']

    render "pages/pricing"
  end
end
