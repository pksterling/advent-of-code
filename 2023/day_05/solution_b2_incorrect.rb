almanac = File.read("./input.txt").split("\n\n")
seed_ranges = almanac.shift.scan(/\d+/).map(&:to_i).each_slice(2).to_a
maps = almanac.map { |map_string| map_string.scan(/(?<=\n)[\d ]+/)
  .map{ |string| string.scan(/\d+/).map(&:to_i) }.sort{ |map_a, map_b| map_a[1] <=> map_b[1] } }

def split_range_on_map_boundaries(range, map)
  return [range] if range.first > map[1] + map[2] - 1
  return [range] if range.sum - 1 < map[1]
  return [range] if range.first >= map[1] && range.sum <= map[1] + map[2]

  boundary = range.first < map[1] ? map[1] : map[1] + map[2]
  lower_range = [range.first, boundary - range.first]
  upper_range = [boundary, range.last - lower_range.last]

  return [lower_range] + split_range_on_map_boundaries(upper_range, map)
end

def merge_ranges(range1, range2)
  return if range1 == range2

  ranges = [range1, range2].sort { |a, b| a[0] <=> b[0] }

  return if ranges[0].sum < ranges[1].first
  return ranges[0] if ranges[0].sum >= ranges[1].sum
  return [ranges[0].first, ranges[1].last + ranges[1].first - ranges[0].first]
end

def remap_range(range, map)
  return range if range.sum - 1 < map[1]
  return range if range.first > map[1] + map[2] - 1

  range[0] += map[0] - map[1]
  range
end

def merge_all_ranges(ranges)
  ranges.each_with_index do |range1, i|
    ranges.each_with_index do |range2, j|
      merged = merge_ranges(range1, range2)

      if merged
        ranges.slice! [i, j].max
        ranges.slice! [i, j].min
        ranges << merged

        break
      end
    end
  end

  ranges
end

def split_all_ranges(ranges, maps)
  maps.each do |map|
    ranges.each_with_index do |range, i|
      split_ranges = split_range_on_map_boundaries(range, map)

      if split_ranges != [range]
        ranges += split_ranges
        ranges.slice!(i)
      end
    end
  end

  ranges
end

def remap_all_ranges(ranges, maps)
  ranges.map do |range|
    maps.reduce(range) do |current_range, map|
      remap_range(current_range, map)
    end
  end
end

final_ranges = maps.reduce(seed_ranges) do |current_ranges, map_group|
  p ""
  p map_group
  p current_ranges
  current_ranges = split_all_ranges(current_ranges, map_group)
  p current_ranges
  current_ranges = remap_all_ranges(current_ranges, map_group)
  p current_ranges
  current_ranges = merge_all_ranges(current_ranges)
  p current_ranges
  current_ranges
end

locations = final_ranges.map(&:first)
p locations.min
