# Javascript (Document Object Model / DOM)

- Dynamic changes or DOM menupulation
  - Example:
    - `document.body.style.background = "black";`
    - `document.body.style.color = "gray";`
  - selecting with their id:
    - `let header = document.getElementById("id");`
  - selecting with their class:
    - `let text = document.getElementsBy ("classname");`
  - selecting by tag :
    - `let paras = document.getElementsByTagName("p");`
  - Query Selector
    - `document.querySelector("myId/ myClass/ tag")`:returns the first element
    - `document.querySelectorAll("myId/ myClass/ tag")`:returns a node list
  - Properties:
    - tagName : returns tag for element nodes
    - innerText : returns the text content of the element and all its childeren
    - innerHTML : returns the plain text or HTML contents in the elements
    - textContent : returns the textual content even for hidden elements
  - Attributes
    - `getAttribute(attr)`:to get the attribute value
    - `setAttribute(attr,value)`:to set the attribute value
  - Style
    - `node.style`:to apply style on a peticular node
  - Insert elements
    - to insert first we have to create a new element by `document.createElement("el");`
    - `node.append (el);`:ads at the end of the node (inside)
    - `node.prepend(el);`:adds at the statrt of the node (inside)
    - `node.before(el);`:adds before the node (outside)
    - `node.after(el);`:adds after the node (outside)
  - Delete element
    - `node.remove();`:removes the node