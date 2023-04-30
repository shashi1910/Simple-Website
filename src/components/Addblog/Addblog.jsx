import React from 'react'
import '../Signup/style.css'

const Addblog = () => {
  return (
    <div class = "signup">
        <form>
            <h2>Add Your Blogs Here</h2>
            <label id='title'>Title</label>
            <input htmlFor="title" type="text"/>

            <label id='desc'>Description</label>
            <textarea htmlFor="desc" type=""></textarea>

            <label id='cont'>Content</label>
            <textarea htmlFor="desc" type=""></textarea>

            <label id='img'>Images</label>
            <input htmlFor="title" type="file"/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Addblog