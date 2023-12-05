cards = File.readlines("./input.txt", chomp: true)
multipliers = Array(1..cards.length).fill(1)

cards.each_with_index do |card, index|
  card = card.scan(/\d+ [\d ]+\d/)
    .map { |group| group.split(/ +/).map(&:to_i) }

    card.last.filter { |number| card.first.include? number }.length.times { |step| multipliers[index + step + 1] += multipliers[index] }
end

p multipliers.sum
