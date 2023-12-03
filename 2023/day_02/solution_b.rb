record = File.readlines("./input.txt", chomp: true)
  .map { |game_string| game_string.scan(/\d+ \w+/).map(&:split) }

powers = record.map do |game|
  min_values = game.reduce({}) do |min_values, (value, colour)|
    min_values.merge(Hash[
      colour.to_sym,
      [min_values[colour.to_sym], value.to_i].compact.max
    ])
  end

  min_values.values.inject(:*)
end

sum_of_powers = powers.sum

p sum_of_powers