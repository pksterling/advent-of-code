p (
  File.read("./input.txt")
    .each_line
    .reduce(0) do |a, v|
      a += (v.match(/\d/).to_s + v.reverse.match(/\d/).to_s).to_i
    end
)