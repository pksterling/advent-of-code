MAX_VALUES = {
  red: 12,
  green: 13,
  blue: 14
}

record = File.readlines("./input.txt", chomp: true)
  .reduce({}) do |record, game_string|
    record.merge(Hash[
      game_string.match(/(?<=Game )\d*/).to_s,
      game_string.scan(/\d+ \w+/).map(&:split)
    ])
  end

possible_games = record.filter do |_, game|
  game.none? { |colour| MAX_VALUES[colour[1].to_sym] < colour[0].to_i }
end

sum_of_possible_game_ids = possible_games.map { |game_id, _| game_id.to_i }.sum

p sum_of_possible_game_ids
