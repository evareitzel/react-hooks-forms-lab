// - App
  // - Header
  // - ShoppingList
    // - ItemForm
    // - Filter
    // - Item



// Filter
  // x determine state location (for search text) // --> ShoppingList
  // x  add state
  // x use onSearchChange as callback

  // x connect state w input field (for controlled input)

  // x setState for input onChange
  // x determine displayed items using state val (similar to category dropdown)
  // optional: update <select> to a controlled el

// ItemForm
  // x onSubmit, add new item to list

  // x make input fields controlled inputs
  // x make initial state for <select> "Produce"
  // x handleSubmit event
    // x use data saved in state to create new item obj:
    // x const newItem = {
    //   id: uuid(), // // the `uuid` library can be used to generate a unique id
    //   name: itemName,
    //   category: itemCategory,
    // }

  // update state to add new item to list
  // x use prop "onItemFormSubmit" as callback, pass new item
  // use spread (...) to add new el to arr
    // function addEl(el){
    //   setArr([...Array, el])
    // }


    // const itemsToDisplay = items.filter((item) => {
    //   if (selectedCategory === "All") {
    //     return true
    //   }
    //   return item.category === selectedCategory;
    //   item.name.toLowerCase().includes(search.toLowerCase)
    // })
    // determine displayed items using state val (similar to category dropdown)


    //     return item.name.toLowerCase().includes(search.toLowerCase())