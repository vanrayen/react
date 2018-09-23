import React from "react";

const html = {
    __html : '<h1>HELLO REACT</h1>'
};

/*
const BlogList = props => {
  return (
    <div>
        <h1>Blog List Title</h1>
        <p>Continually promote adaptive functionalities for resource maximizing materials. Professionally drive installed base mindshare before B2B "outside the box" thinking. Efficiently initiate interdependent architectures without adaptive portals. Quickly expedite sticky catalysts for change with global "outside the box" thinking. Completely mesh excellent ideas vis-a-vis backend leadership skills.

Professionally administrate flexible solutions via accurate ideas. Uniquely monetize value-added testing procedures before bricks-and-clicks value. Intrinsicly provide access to interdependent functionalities without client-based.</p>
    </div>
  );
};

export default BlogList;
*/

export default function BloglistName ({article}) {
    console.log({article})
    return(
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <p>Author : {article.author}</p>
            <p>{article.created_at}</p>
            <hr/>
            <div dangerouslySetInnerHTML={html} />
        </div>
    )
}
