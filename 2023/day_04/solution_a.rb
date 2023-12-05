p (
  File.readlines("./input.txt", chomp: true)
    .map { |line| line.scan(/\d+ [\d ]+\d/).map { |group| group.split(/ +/).map(&:to_i) } }
    .sum(0) do |card|
      2 ** card.last.filter { |number| card.first.include? number }.length / 2
    end
)