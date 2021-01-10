const express = require("express");
// router
const booksRouter = express.Router();

// router function
function router(nav){
    
    // books array
    var books = [
        {
            title : "The Girl in Room 105",
            author : "Chetan Bhagat",
            genre : "Novel",            
            about : "The Girl in Room 105 is the eighth novel and the tenth book overall written by the Indian author Chetan Bhagat. The book became a bestseller based on prearranged sales alone. It tells about a IIT coaching class tutor who goes to wish his ex-girlfriend on her birthday and finds her murdered."
        },
        {
            title : "2 States: The Story Of My Marriage",
            author : "Chetan Bhagat",
            genre : "Novel",
           about : "2 States: The Story of My Marriage commonly known as 2 States is a 2009 novel written by Chetan Bhagat. It is the story about a couple coming from two different states in India, who face hardships in convincing their parents to approve of their marriage."
        },
        {
            title : "Half Girlfriend",
            author : "Chetan Bhagat",
            genre : "Novel",            
            about : "Madhav Jha, a student from Bihar, takes admission in a Delhi college and falls in love with Riya Somani. He coaxes her to be his girlfriend, but she is not interested in him romantically."
        }
    ]
    
    // books page
    booksRouter.get("/",(req,res)=>{
        res.render("books",
        {
            nav,
            title : "Books",
            books
        });
    });
    
    // single book page
    booksRouter.get("/:id",(req,res)=>{
        const id = req.params.id;
        res.render("book",{
            nav,
            title : "Book",
            book : books[id]
        });
    });

    return booksRouter;
}

// router function call
module.exports = router;