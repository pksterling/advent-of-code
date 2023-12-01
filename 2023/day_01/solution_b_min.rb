NUMBER_WORDS = %w[ zero one two three four five six seven eight nine ]
REGEX = /(?=(\d|#{NUMBER_WORDS.join("|")}))/

p (
  File.read("./input.txt")
    .each_line
    .reduce(0) do |a, v|
      a += [v.match(REGEX)[1], v.scan(REGEX).flatten.last]
        .map { |i| i.match(/\d/) ? i : NUMBER_WORDS.index(i) }
        .join("")
        .to_i
    end
)