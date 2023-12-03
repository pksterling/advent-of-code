MAX_VALUES = {red: 12, green: 13, blue: 14}

p (
  File.readlines("./input.txt", chomp: true)
    .reduce(0) do |sum, game|
      if game.scan(/\d+ \w+/)
          .map(&:split)
          .none? { |colour| MAX_VALUES[colour[1].to_sym] < colour[0].to_i }
        sum += game.match(/(?<=Game )\d*/).to_s.to_i
      end

      sum
    end
)
