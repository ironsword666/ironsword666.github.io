module AlfolioCompatFilters
  # Keep asset paths stable when cache-busting plugin is not installed.
  def bust_file_cache(input)
    input
  end

  # Lightweight replacement for regex_replace used in publication templates.
  def regex_replace(input, pattern, replacement = "")
    return input if input.nil?

    input.to_s.gsub(Regexp.new(pattern.to_s), replacement.to_s)
  rescue RegexpError
    input
  end
end

Liquid::Template.register_filter(AlfolioCompatFilters)
