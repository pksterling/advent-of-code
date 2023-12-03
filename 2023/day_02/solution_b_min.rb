p (
  File.readlines("./input.txt", chomp: true)
    .map { |game| game.scan(/\d+ \w+/).map(&:split) }
    .map do |game|
      game.reduce({}) do |min_values, (value, colour)|
        min_values.merge(Hash[
          colour.to_sym,
          [min_values[colour.to_sym], value.to_i].compact.max
        ])
      end
      .values
      .inject(:*)
    end
    .sum
)