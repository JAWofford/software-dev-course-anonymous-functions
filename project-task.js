/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================
  
  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
  const uncompletedTasks = todos.filter((task) => !task.completed);
  
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
 //NOTE to me: From Mdn -  remember that (a, b) => a - b sorts numbers in ascending order.
  const tasksByPriority = todos.sort((a,b) => a.priority - b.priority);
     
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.

  NOTE: I wasn't sure if you wanted the completed property to be changed to true in the original array or not.
   But since the first step says to return a new array, I'm leaving the original array intact after researching how to copy an array
   and use the spread operators.  I need more understanding on deep copies and shallow copies. Also, I noticed the new array is 
   sorted by priority.  I need to understand the map method better.
  */
//If we were supposed to change the original array, use this.
// const markTasksCompleted = todos.map(task => task.completed = true);
   

  const markTasksCompleted = todos.map(task => ({
  ...task,          // copy all existing properties
  completed: true   // overwrite the completed property in this new array
}));
  
  

  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */

  const sortedUncompletedTasks = todos
      .filter((task) => !task.completed)
      .sort((a,b) => a.priority - b.priority);
        
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
function printTaskNames(listArray){
  let taskNames = listArray.map(todoName => todoName.task);
  taskNames.forEach(name => console.log(name));
}

  //Incomplete Tasks - Task 1
console.log("Incomplete Tasks:");
printTaskNames(uncompletedTasks);

// Sorted by Priority - Task 2
console.log ("\nTasks Sorted by Priority:");
printTaskNames(tasksByPriority);
  
// All Tasks Completed - Task 3
console.log("\nAll Tasks Completed:");
console.log(markTasksCompleted);
//console.log(todos);  Use this if you want to update the original array instead of making a copy.

// Sorted Incomplete Tasks - Task 4
console.log("\nSorted Incomplete Tasks:")
printTaskNames(sortedUncompletedTasks);
  

  