almanac = File.read("./input.txt").split("\n\n")
seeds = almanac.shift.scan(/\d+/).map(&:to_i)
maps = almanac.map { |map_string| map_string.scan(/(?<=\n)[\d ]+/).map{ |string| string.scan(/\d+/).map(&:to_i) } }

locations = seeds.map do |seed|
  maps.reduce(seed) do |previous_number, map|
    map.reduce(previous_number) do |current_number, instruction|
      if current_number == previous_number && current_number >= instruction[1] && current_number < instruction[1] + instruction[2]
        current_number += instruction[0] - instruction[1]
      end

      current_number
    end
  end
end

p locations.min