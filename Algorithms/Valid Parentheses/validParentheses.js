// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

var isValid = function(s) {
    let stack = [];  
    let map = {
        ")":"(",
        "]":"[",
        "}":"{"
    };
    
    for(let char of s) {
        if(Object.values(map).includes(char)) {
            stack.push(char);
        } else if(Object.keys(map).includes(char)) {
            if(stack.length === 0 || map[char] !== stack.pop()) {
                return false;
            }
        } else {
            return false;
        }
    }
    return stack.length === 0;
   
};