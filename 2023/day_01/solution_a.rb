calibration_document = File.read("./input.txt")

calibration_value = calibration_document.each_line.reduce(0) do |sum, line|
  tens = line.match(/\d/).to_s.to_i
  units = line.reverse.match(/\d/).to_s.to_i

  sum += 10 * tens + units
end

p calibration_value
