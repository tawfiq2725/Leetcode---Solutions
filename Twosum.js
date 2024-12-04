function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let tar = target - nums[i];

    if (map.has(tar)) {
      return [map.get(tar), i];
    }

    map.set(nums[i], i);
  }

  return [];
}
