schematic = File.readlines("./input.txt", chomp: true)
  .map { |line| line.split("") }

current_number = ""
current_is_part = false
part_numbers = []

schematic.each_with_index do |row, row_index|
  row.each_with_index do |char, col_index|
    if char.match /\d/
      current_number += char

      unless current_is_part
        rows_to_check = [row_index]
        rows_to_check << row_index - 1 if row_index > 0
        rows_to_check << row_index + 1 if row_index < schematic.length - 1

        cols_to_check = [col_index]
        cols_to_check << col_index - 1 if col_index > 0
        cols_to_check << col_index + 1 if col_index < row.length - 1

        symbol_found = rows_to_check.any? do |row_index|
          cols_to_check.any? do |col_index|
            schematic[row_index][col_index].match /[^\.\d]/
          end
        end

        current_is_part = true if symbol_found
      end
    end

    if char.match(/\D/) || col_index == row.length - 1
      part_numbers << current_number.to_i if current_is_part
      current_number = ""
      current_is_part = false
    end
  end
end

p part_numbers.sum
