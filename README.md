getElementById selects one element by id,getElementsByClassName selects multiple elements by class,querySelector selects the first element using any CSS selector,querySelectorAll selects all elements using any CSS selector.
Use document.createElement() to create a new element and appendChild() or append() to insert it into the DOM.
Event Bubbling is when an event starts from the target element and then moves upward to its parent elements one by one.
Event Delegation is a technique where you add one event listener to a parent element to handle events for its child elements, which is useful for better performance and handling dynamic elements.
preventDefault() stops the default action of an element, while stopPropagation() stops the event from bubbling up to parent elements. 
