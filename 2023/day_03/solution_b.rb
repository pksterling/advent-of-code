schematic = File.readlines("./input.txt", chomp: true)
  .map { |line| line.split("") }

current_number = ""
current_gears = []
gears = {}

schematic.each_with_index do |row, row_index|
  row.each_with_index do |char, col_index|
    if char.match /\d/
      current_number += char

      rows_to_check = [row_index]
      rows_to_check << row_index - 1 if row_index > 0
      rows_to_check << row_index + 1 if row_index < schematic.length - 1

      cols_to_check = [col_index]
      cols_to_check << col_index - 1 if col_index > 0
      cols_to_check << col_index + 1 if col_index < row.length - 1

      rows_to_check.each do |row_index|
        cols_to_check.each do |col_index|
          current_gears << "#{row_index},#{col_index}" if schematic[row_index][col_index].match /\*/
          current_gears.uniq!
        end
      end
    end

    if char.match(/\D/) || col_index == row.length - 1
      current_gears.each do |gear|
        gears[gear] ||= []
        gears[gear] += [current_number.to_i]
      end

      current_number = ""
      current_gears = []
    end
  end
end

gear_ratios = gears.values
  .filter { |gear| gear.length == 2 }
  .sum(0) { |gear| gear.first * gear.last }


p gear_ratios
