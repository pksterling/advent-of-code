NUMBERS_IN_WORDS = %w[
  zero
  one
  two
  three
  four
  five
  six
  seven
  eight
  nine
]
NUMBER_REGEX = /(?=(\d|#{NUMBERS_IN_WORDS.join("|")}))/

def integer_from_strings(*strings)
  strings.map { |string| string.match(/\d/) ? string : NUMBERS_IN_WORDS.index(string) }
    .join("")
    .to_i
end

calibration_document = File.read("./input.txt")

calibration_value = calibration_document.each_line.reduce(0) do |sum, line|
  sum += integer_from_strings(line.match(NUMBER_REGEX)[1], line.scan(NUMBER_REGEX).flatten.last)
end

p calibration_value