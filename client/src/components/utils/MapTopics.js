const filterTopics = id => {
    return allTopics.filter(topic => topic.createdBy._id === id)
}

const users = [
    {
        name: "Julien",
        id: "61e38003db816610d5c60763",
    },
    {
        name: "Paige",
        id: "61e4484c02346a0427761471",
    },
    {
        name: "Eloise",
        id: "61e4484c02346a0427761472",
    },
    {
        name: "Charlie",
        id: "61e4484c02346a0427761473",
    },
    {
        name: "Melissa",
        id: "61e4484c02346a0427761474",
    },
    {
        name: "Luca",
        id: "61e4484c02346a0427761475",
    },
    {
        name: "Abigail",
        id: "61e4484c02346a0427761476",
    },
    {
        name: "Zoe",
        id: "61e4484c02346a0427761477",
    },
    {
        name: "Henry",
        id: "61e4484c02346a0427761478",
    },
    {
        name: "Hayden",
        id: "61e4484c02346a0427761479",
    },
    {
        name: "Georgina",
        id: "61e4484c02346a042776147a",
    },
    {
        name: "Daisy",
        id: "61e4484c02346a042776147b",
    },
    {
        name: "Alicia",
        id: "61e4484c02346a042776147c",
    },
    {
        name: "Jayden",
        id: "61e4484c02346a042776147d",
    },
    {
        name: "Anthony",
        id: "61e4484c02346a042776147e",
    },
    {
        name: "Charlie2",
        id: "61e4484c02346a042776147f",
    },
    {
        name: "Eliott",
        id: "61e4484c02346a0427761480",
    },
    {
        name: "Eloise2",
        id: "61e4484c02346a0427761481",
    },
    {
        name: "Owen",
        id: "61e4484c02346a0427761482",
    },
    {
        name: "Skye",
        id: "61e4484c02346a0427761483",
    },
    {
        name: "Henry2",
        id: "61e4484c02346a0427761484",
    },
]

{
    users.map(user => (
        <p key={user.id} style={{ whiteSpace: "pre-line" }}>
            {"//"} {user.name}
            <br />
            const id{user.name} = "{user.id}"<br />
            const topics{user.name} = [
            {filterTopics(user.id).map(topic => `"${topic._id}",`)}
            ]<br />
            <br />
            User.findOneAndUpdate(
            <br />
            &#123; _id: id{user.name} &#125;,
            <br />
            &#123; $push: &#123; topics: topics{user.name} &#125; &#125;,
            <br />
            &#123;
            <br />
            new: true,
            <br />
            &#125;
            <br />
            ) .then(topics =&gt; &#123;
            <br />
            console.log(topics)
            <br />
            &#125;)
            <br />
            .catch(err =&gt; console.log(err))
            <br />
        </p>
    ))
}
