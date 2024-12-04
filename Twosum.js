/*************  ✨ Codeium Command 🌟  *************/
/**
 * Returns indices of the two numbers such that they add up to the target
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Create a map that stores the numbers and their indices
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let tar = target - nums[i];

    // Check if the target - current number is already in the map
    if (map.has(tar)) {
      // Return the indices of the two numbers that add up to the target
      return [map.get(tar), i];
    }

    // Add the current number and its index to the map
    map.set(nums[i], i);
  }

  // Return an empty array if no two numbers add up to the target
  return [];
}

/******  10780733-785e-4afb-9d55-a4fb64bf5929  *******/
