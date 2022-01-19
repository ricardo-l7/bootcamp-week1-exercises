1. Breaking the user interface into different components.
- Diagram: *see diagram.jpg*
- Explanation: I envision my Todo Page to have 5 different components: entire page, "add todo" bar, 
"search" bar, list component, and an item component. Within the entire page component will be the "add todo"
bar, "search" bar, and list component. Within the list component will be the item component. The "add todo" bar
and "search" bar will receive user input in the form of strings. The list component will be an unordered list 
of "item" components. The "item" components (li) will be consist of user input and a delete button. 

2. Now that you've established which components your app will use, consider how data should flow through your application. We can break this up into a few smaller questions.
- Explanation: The "add todo" and "search bar" components are simply receiving input from users and will pass on that data to the list component. Each "add todo" input will create a new object that consists
of a string and a taskid. Each "search" input will create a string that gets passed to the list component in order to search for a specific task. The list component needs to be able to access the user input. Specifically, each item component will need to be able to access the taskid (in order to delete tasks) and string (so that tasks can be properly added and/or searched for). 